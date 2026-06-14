export const fadeUp = {
  initial: {
    opacity: 0,
    y: 60,
  },

  whileInView: {
    opacity: 1,
    y: 0,
  },

  transition: {
    duration: 0.7,
  },
};

export const scaleIn = {
  initial: {
    opacity: 0,
    scale: 0.9,
  },

  whileInView: {
    opacity: 1,
    scale: 1,
  },

  transition: {
    duration: 0.7,
  },
};

export const slideLeft = {
  initial: {
    opacity: 0,
    x: -60,
  },

  whileInView: {
    opacity: 1,
    x: 0,
  },

  transition: {
    duration: 0.7,
  },
};

export const slideRight = {
  initial: {
    opacity: 0,
    x: 60,
  },

  whileInView: {
    opacity: 1,
    x: 0,
  },

  transition: {
    duration: 0.7,
  },
};