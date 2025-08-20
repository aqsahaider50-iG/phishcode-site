import type { ReactNode } from "react";
import { motion } from "framer-motion";

const ease: number[] = [0.22, 1, 0.36, 1];

export default function Reveal({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease }}
      viewport={{ once: true, amount: 0.6 }}
      style={{ willChange: "transform" }}
    >
      {children}
    </motion.div>
  );
}
