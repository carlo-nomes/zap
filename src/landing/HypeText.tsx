import { useState, useEffect } from "react";

const HYPE_INTERVAL = 10000;
const TRANSITION_STEP = 75;

const hypes = [
  "Full Stack Development",
  "Cloud Native Development",
  "Agile Coaching",
  "JavaScript Coaching",
  "TypeScript Coaching",
  "Node.js Coaching",
  "React Coaching",
  "AWS Coaching",
  "UX/UI Design",
];

const chars = "▤▥▦▧▨◌◍◎●◐◑◒◓◧◨◩◪◫◬◭◮╢╣╤╥╦╪╫╬".split("");
const randomChar = () => chars[Math.floor(Math.random() * chars.length)];

const HypeText = () => {
  const [hype, setHype] = useState(hypes[0]);
  const [step, setStep] = useState(0);
  const [word, setWord] = useState(hype.split("").map(randomChar).join(""));

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHype(hypes[Math.floor(Math.random() * hypes.length)]);
      setStep(0);
    }, HYPE_INTERVAL);
    return () => clearTimeout(timeout);
  }, [hype]);

  useEffect(() => {
    if (word.split("").every((c) => chars.includes(c))) setStep((s) => (s === 0 ? 1 : s));
    if (word.length === hype.length) setStep((s) => (s === 1 ? 2 : s));
  }, [word, hype]);

  // Step 1: Replace all current characters with random characters
  useEffect(() => {
    if (step !== 0) return;
    const interval = setInterval(() => {
      setWord((word) => {
        if (word.split("").every((c) => chars.includes(c))) return word;

        const indexes = word
          .split("")
          .map((char, index) => (!chars.includes(char) ? index : null))
          .filter((index) => index !== null);
        const randomIndex = indexes[Math.floor(Math.random() * indexes.length)];

        return word
          .split("")
          .map((char, index) => (randomIndex === index ? randomChar() : char))
          .join("");
      });
    }, TRANSITION_STEP);
    return () => clearInterval(interval);
  }, [step]);

  // Step 2: Make the word the same length as the hype
  useEffect(() => {
    if (step !== 1) return;
    const interval = setInterval(() => {
      setWord((word) =>
        word.length < hype.length
          ? `${randomChar()}${word}${randomChar()}`
          : word.length > hype.length
          ? word.slice(2, -1)
          : word
      );
    }, TRANSITION_STEP);
    return () => clearInterval(interval);
  }, [hype.length, step]);

  // Step 3: Replace characters with the hype characters
  useEffect(() => {
    if (step !== 2) return;

    const interval = setInterval(() => {
      setWord((word) => {
        // If the word is already fully transitioned, we can just return it
        if (word === hype) return word;

        const indexes = word
          .split("")
          .map((char, index) => (char !== hype[index] ? index : null))
          .filter((index) => index !== null);
        const randomIndex = indexes[Math.floor(Math.random() * indexes.length)];

        return word
          .split("")
          .map((char, index) => (randomIndex === index ? hype[index] : char))
          .join("");
      });
    }, TRANSITION_STEP);

    return () => clearInterval(interval);
  }, [hype, step]);

  return <h2>{word}</h2>;
};

export default HypeText;
