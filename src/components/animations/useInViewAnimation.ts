import { useEffect, useRef } from "react";
import { useAnimation, useInView } from "framer-motion";

export default function useInViewAnimation(options = { amount: 0.35, once: true }) {
  // non-null assertion keeps TS happy for framer's RefObject<Element>
  const ref = useRef<HTMLDivElement>(null!);
  const controls = useAnimation();
  const inView = useInView(ref, options as any);

  useEffect(() => { if (inView) controls.start("show"); }, [inView, controls]);
  return { ref, controls };
}
