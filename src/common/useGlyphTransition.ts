import { useEffect, useReducer, useState } from "react";
import { getRandomIndex } from "./helpers";

const STEP_INTERVAL = 70;
const GLYPHS = "▤▥▦▧▨◊◆◇◈◉○◌◍◎●◐◑◒◓◧◨◩◪◫◬◭◮═║╞╟╠╡╢╣╪╫╬";

const getRandomGlyph = () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)];

type Action =
  | { type: "RESET"; text: string }
  | { type: "PADD"; start: string; end: string }
  | { type: "ADD"; char: string; index: number }
  | { type: "REMOVE"; index: number }
  | { type: "REPLACE"; char: string; index: number }
  | { type: "NOTHING" };
type ActionFn = (prevText: string) => Action;

const reducer = (text: string, actionFn: ActionFn | Action) => {
  const action = typeof actionFn === "function" ? actionFn(text) : actionFn;
  switch (action.type) {
    case "RESET":
      return action.text;
    case "PADD":
      return `${action.start}${text}${action.end}`;
    case "ADD":
      return `${text.slice(0, action.index)}${action.char}${text.slice(action.index)}`;
    case "REMOVE":
      return `${text.slice(0, action.index)}${text.slice(action.index + 1)}`;
    case "REPLACE":
      return `${text.slice(0, action.index)}${action.char}${text.slice(action.index + 1)}`;
    case "NOTHING":
    default:
      return text;
  }
};

type Stage = "INITIAL" | "PADDING" | "TEXT_TO_GLYPHS" | "GLYPHS_TO_TEXT" | "DONE";
const useGlyphTransition = (prev: string, next: string) => {
  const diff = next.length - prev.length;
  const [stage, setStage] = useState<Stage>("INITIAL");

  const [toBe, setToBe] = useState<string>(next);
  const [text, setText] = useReducer(reducer, prev);

  // When the next text is different than the current text move to the text to glyphs stage
  useEffect(() => {
    setToBe(next);
    setText({ type: "RESET", text: prev });
    setStage("PADDING");
  }, [next, prev]);

  // Padd either the to be text or the current text
  useEffect(() => {
    if (stage !== "PADDING") return;

    // If the next text is the same length, move to the next stage
    if (diff === 0) {
      setStage("TEXT_TO_GLYPHS");
      return;
    }

    // If the next text is longer, padd the text with glyphs
    if (diff > 0) {
      let remaining = diff;
      const interval = setInterval(() => {
        setText(() => {
          // If the next text is longer, padd the text
          if (remaining > 0) {
            remaining = remaining - 2;
            return { type: "PADD", start: getRandomGlyph(), end: getRandomGlyph() };
          }

          setStage("TEXT_TO_GLYPHS");
          return { type: "NOTHING" };
        });
      }, STEP_INTERVAL);

      return () => clearInterval(interval);
    }

    // If the next text is shorter, padd the text with spaces
    if (diff < 0) {
      setToBe((prevToBe) => {
        const padding = new Array(Math.abs(diff)).fill(" ");
        const half = Math.floor(padding.length / 2);
        const paddingStart = padding.slice(0, half).join("");
        const paddingEnd = padding.slice(half).join("");
        return `${paddingStart}${prevToBe}${paddingEnd}`;
      });
      setStage("TEXT_TO_GLYPHS");
    }
  }, [diff, stage]);

  // Start the text to glyphs transition
  useEffect(() => {
    if (stage !== "TEXT_TO_GLYPHS") return;

    const interval = setInterval(() => {
      setText((prevText) => {
        // If the text is already all glyphs, move to the next stage
        if (prevText.split("").every((char) => GLYPHS.includes(char))) {
          setStage("GLYPHS_TO_TEXT");
          return { type: "NOTHING" };
        }

        // Get a random index that is not already a glyph
        let index = getRandomIndex(prevText);
        while (GLYPHS.includes(prevText[index])) index = getRandomIndex(prevText);

        return { type: "REPLACE", char: getRandomGlyph(), index };
      });
    }, STEP_INTERVAL);

    return () => clearInterval(interval);
  }, [stage]);

  // Start the glyphs to text transition
  useEffect(() => {
    if (stage !== "GLYPHS_TO_TEXT") return;

    const interval = setInterval(() => {
      setText((prevText) => {
        // If the text is already all text, move to the next stage
        if (prevText.split("").every((char) => !GLYPHS.includes(char))) {
          setStage("DONE");
          return { type: "NOTHING" };
        }

        // Get a random index, make sure it is not already transitioned
        let index = getRandomIndex(prevText);
        let char = toBe[index];
        while (prevText[index] === char) {
          index = getRandomIndex(prevText);
          char = toBe[index];
        }
        if (!char) return { type: "REMOVE", index };

        // Replace the glyph with the next text
        return { type: "REPLACE", char, index };
      });
    }, STEP_INTERVAL);

    return () => clearInterval(interval);
  }, [toBe, stage]);

  return { text, stage };
};

export default useGlyphTransition;
