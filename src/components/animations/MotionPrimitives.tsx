// src/components/animations/MotionPrimitives.tsx
import { chakra, shouldForwardProp } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";

// Works perfectly with Chakra v2 + Framer Motion 10
export const MotionBox = chakra(motion.div, {
  // Forward Framer Motion props + normal Chakra props
  shouldForwardProp: (prop: string) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});

export const MotionImg = chakra(motion.img, {
  shouldForwardProp: (prop: string) =>
    isValidMotionProp(prop) || shouldForwardProp(prop),
});
