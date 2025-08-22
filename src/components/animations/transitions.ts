export const ease: number[] = [0.22, 1, 0.36, 1];

export const fadeUp = (delay = 0, distance = 24) => ({
  hidden: { opacity: 0, y: distance },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease } },
});

export const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, delay, ease } },
});

export const slideInX = (dir = 1, delay = 0, dist = 40) => ({
  hidden: { opacity: 0, x: dir * dist },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, delay, ease } },
});

/**
 * scaleReveal(delay)                     // old style (just delay)
 * scaleReveal(from, to, delay)           // new style (from, to, delay)
 */
export const scaleReveal = (...args: number[]) => {
  // defaults
  let from = 0.96;
  let to = 1;
  let delay = 0;

  if (args.length === 1) {
    delay = args[0] ?? 0;
  } else if (args.length >= 2) {
    from = args[0] ?? 0.96;
    to = args[1] ?? 1;
    delay = args[2] ?? 0;
  }

  return {
    hidden: { opacity: 0, scale: from },
    show: { opacity: 1, scale: to, transition: { duration: 0.6, delay, ease } },
  };
};

export const stagger = (stagger = 0.12, delayChildren = 0.15) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren } },
});
