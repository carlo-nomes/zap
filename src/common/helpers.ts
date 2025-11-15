export const getRandomIndex = (text: string): number => {
  if (!text || text.length === 0) {
    return 0;
  }
  return Math.floor(Math.random() * text.length);
};
