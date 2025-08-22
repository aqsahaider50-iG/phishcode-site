// src/sections/CTASplit.tsx
import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  Text,
  Button,
  Image,
} from "@chakra-ui/react";
import {
  MotionBox,
  MotionImg,
} from "../components/animations/MotionPrimitives";
import {
  slideInX,
  fadeUp,
  stagger,
  scaleReveal,
} from "../components/animations/transitions";
import useInViewAnimation from "../components/animations/useInViewAnimation";

// local hero/banner image
import banner from "../assets/png-imgs/smiling.png";

export default function CTASplit() {
  const { ref, controls } = useInViewAnimation({ once: true, amount: 0.5 });

  return (
    <Box
      id="next-steps"
      scrollMarginTop="72px"
      bg="neutral.50"
      py={{ base: 12, md: 20 }}
    >
      <Container
        maxW={{ base: "100%", sm: "92%", md: "90%", lg: "86%", xl: "7xl" }}
        px={{ base: 4, md: 6 }}
      >
        <Box
          bg="white"
          borderRadius="2xl"
          borderWidth="1px"
          borderColor="neutral.100"
          boxShadow="sm"
          p={{ base: 4, md: 6 }}
        >
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 6, md: 6 }}
            alignItems="stretch"
            minH={{ base: "auto", md: "320px" }}
          >
            {/* LEFT: staggered text + button */}
            <MotionBox
              ref={ref}
              variants={stagger(0.08, 0.12)} // parent stagger
              initial="hidden"
              animate={controls}
              pr={{ md: 4 }}
              display="flex"
              flexDir="column"
              justifyContent="center"
            >
              <MotionBox variants={fadeUp(0)}>
                <Text
                  fontSize="sm"
                  letterSpacing="0.08em"
                  color="neutral.600"
                  mb={1}
                >
                  Next steps
                </Text>
              </MotionBox>

              <MotionBox variants={slideInX(-1, 0.06, 40)}>
                <Heading
                  size={{ base: "xl", md: "xl" }}
                  lineHeight="1.15"
                  fontWeight="semibold"
                >
                  Try Phishing Attack Simulation
                  <br /> Service
                </Heading>
              </MotionBox>

              <MotionBox variants={fadeUp(0.05)}>
                <Text color="neutral.600" mt={3} maxW="2xl">
                  Deliver exceptional, proactive service that resolves customers
                  issues the first time.
                </Text>
              </MotionBox>

              <MotionBox variants={scaleReveal(0.96, 1, 0.12)} mt={6}>
                <Button size="md" colorScheme="brand">
                  Try for free
                </Button>
              </MotionBox>
            </MotionBox>

            {/* RIGHT: image with entrance + hover micro-parallax */}
            <MotionBox
              variants={slideInX(1, 0.08, 56)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.45 }}
              borderRadius="xl"
              borderWidth="1px"
              borderColor="neutral.100"
              overflow="hidden"
              h="100%"
              // subtle hover zoom
              whileHover={{
                scale: 1.01,
                transition: { type: "spring", stiffness: 220, damping: 24 },
              }}
            >
              <MotionImg
                // fade the image itself on enter so border shows immediately
                variants={fadeUp(0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                as={Image}
                src={banner}
                alt="Phishing simulation illustration"
                w="100%"
                h="100%"
                objectFit="cover"
                // micro parallax on hover feels lively but not distracting
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.35, ease: "easeOut" },
                }}
              />
            </MotionBox>
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
}
