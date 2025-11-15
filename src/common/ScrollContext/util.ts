export const isElementInView = (element: HTMLElement): boolean => {
  try {
    const rect = element.getBoundingClientRect();

    const bottom = rect.bottom > 0;
    const top = rect.top < window.innerHeight;
    const right = rect.right > 0;
    const left = rect.left < window.innerWidth;

    return bottom && top && right && left;
  } catch (error) {
    console.warn("Error checking if element is in view:", error);
    return false;
  }
};

export const isFullElementInView = (element: HTMLElement): boolean => {
  try {
    const rect = element.getBoundingClientRect();

    const bottom = rect.bottom > 0 && rect.bottom < window.innerHeight;
    const top = rect.top < window.innerHeight + 0 && rect.top > 0;
    const right = rect.right > 0 && rect.right < window.innerWidth;
    const left = rect.left < window.innerWidth + 0 && rect.left > 0;

    return bottom && top && right && left;
  } catch (error) {
    console.warn("Error checking if full element is in view:", error);
    return false;
  }
};
