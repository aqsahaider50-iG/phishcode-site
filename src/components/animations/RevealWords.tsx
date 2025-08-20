import { Fragment } from "react";
import { motion } from "framer-motion";
import {
  Heading,
  Text,
  type HeadingProps,
  type TextProps,
} from "@chakra-ui/react";

const ease: number[] = [0.22, 1, 0.36, 1];

const container = (stagger = 0.06) => ({
  hidden: {},
  show: { transition: { staggerChildren: stagger, delayChildren: 0.05 } },
});

const word = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

type CommonProps = {
  text: string;
  /** default: "h2" */
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  /** Heading size or Text fontSize; default: "xl" */
  size?: HeadingProps["size"] | TextProps["fontSize"];
  color?: string;
  /** allow overriding weight; default: "normal" so it’s NOT bold */
  fontWeight?: HeadingProps["fontWeight"];
};

// Allow passing any extra Chakra props and forward them to the wrapper
type Props = CommonProps &
  Omit<HeadingProps, "as" | "size"> &
  Omit<TextProps, "as" | "fontSize">;

export default function RevealWords({
  text,
  as = "h2",
  size = "xl",
  color,
  fontWeight = "normal", // <-- not bold by default
  ...rest
}: Props) {
  const words = text.split(" ");
  const Wrapper = (as === "p" ? Text : Heading) as any;

  return (
    <motion.span
      variants={container()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
    >
      <Wrapper
        as={as as any}
        // Heading uses "size", Text uses "fontSize"
        size={as !== "p" ? (size as HeadingProps["size"]) : undefined}
        fontSize={as === "p" ? (size as TextProps["fontSize"]) : undefined}
        color={color}
        lineHeight="1.2"
        display="inline"
        fontWeight={fontWeight}
        {...rest}
      >
        {words.map((w, i) => (
          <Fragment key={`${w}-${i}`}>
            <motion.span
              style={{ display: "inline-block", willChange: "transform" }}
              variants={word}
            >
              {w}
            </motion.span>{" "}
          </Fragment>
        ))}
      </Wrapper>
    </motion.span>
  );
}
