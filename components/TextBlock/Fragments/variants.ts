export const variants = {
  offscreen: {
    scale: 0.65,
    y: 50,
    opacity: 0,
  },
  onscreen: {
    scale: 1,
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 1.5,
      ease: "easeOut",
    },
  },
};
