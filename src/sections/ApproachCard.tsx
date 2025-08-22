// src/sections/ApproachCard.tsx
import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  SimpleGrid,
} from "@chakra-ui/react";
import {
  MotionBox,
  MotionImg,
} from "../components/animations/MotionPrimitives";
import {
  fadeUp,
  slideInX,
  stagger,
  scaleReveal,
} from "../components/animations/transitions";
import useInViewAnimation from "../components/animations/useInViewAnimation";

// Local asset
import approachDiagram from "../assets/png-imgs/approach section png.png";

export default function ApproachCard() {
  const { ref, controls } = useInViewAnimation({ amount: 0.5, once: true });

  return (
    <Box
      id="approach"
      bg="neutral.50"
      py={{ base: 12, md: 20 }}
      scrollMarginTop="72px"
    >
      <Container
        maxW={{ base: "100%", sm: "92%", md: "90%", lg: "86%", xl: "7xl" }}
        px={{ base: 4, md: 6 }}
      >
        {/* Title block with staggered text */}
        <MotionBox
          variants={stagger(0.08, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.7 }}
          textAlign="center"
          mb={{ base: 8, md: 10 }}
        >
          <MotionBox variants={fadeUp(0)}>
            <Text fontSize="sm" letterSpacing="0.08em" color="neutral.500">
              APPROACH
            </Text>
          </MotionBox>

          <MotionBox variants={slideInX(-1, 0.05, 36)}>
            <Heading size={{ base: "xl", md: "xl" }} fontWeight="semibold">
              A comprehensive security approach
            </Heading>
          </MotionBox>

          <MotionBox variants={fadeUp(0.04)}>
            <Text color="neutral.600" maxW="4xl" mx="auto">
              Providing your people with awareness and training is a key piece
              of your overall PHISHCODE security strategy.
            </Text>
          </MotionBox>

          <MotionBox variants={scaleReveal(0.96, 1, 0.1)}>
            <Button variant="outline" size="sm" borderRadius="md">
              More about diagram
            </Button>
          </MotionBox>
        </MotionBox>

        {/* Main white panel */}
        <Box
          bg="white"
          borderRadius="2xl"
          borderWidth="1px"
          borderColor="neutral.100"
          boxShadow="sm"
          p={{ base: 5, md: 7 }}
        >
          <SimpleGrid
            columns={1}
            spacing={{ base: 8, md: 10 }}
            alignItems="center"
          >
            {/* Diagram with entrance + hover micro-zoom */}
            <MotionImg
              variants={slideInX(1, 0.06, 48)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.6 }}
              src={approachDiagram}
              alt="PHISHCODE Approach diagram"
              borderRadius="lg"
              borderWidth="1px"
              borderColor="neutral.200"
              bg="white"
              w="100%" // fill the grid width
              h="auto" // keep aspect ratio
              objectFit="contain"
              // performance & feel
              style={{ willChange: "transform, opacity" }}
              loading="lazy"
              decoding="async"
              // small, tasteful hover
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            />
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
}
