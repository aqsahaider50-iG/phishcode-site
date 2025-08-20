// src/sections/ImpactBand.tsx
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Stack,
  HStack,
} from "@chakra-ui/react";
import { MotionBox } from "../components/animations/MotionPrimitives";
import { fadeUp, stagger } from "../components/animations/transitions";
import useInViewAnimation from "../components/animations/useInViewAnimation";
// import Counter from "../components/animations/Counter"; // <- uncomment if you want count-up

// keep your labels; if you want Counter, use numeric values instead (see comment below)
const stats = [
  { v: "$164,000", l: "Saved with PHISHCODE Unified cybersecurity platform." },
  { v: "70%", l: "Reduction in social engineering with SAT." },
  { v: "$432,000", l: "Risk reduction over three years." },
  { v: "$210,000", l: "Saved on email alert costs." },
];

export default function ImpactBand() {
  const { ref, controls } = useInViewAnimation();

  return (
    <Box
      id="impact"
      bg="brand.900" // deep blue band like the reference
      color="white"
      py={{ base: 12, md: 16 }}
      position="relative"
      overflow="hidden"
      scrollMarginTop="72px"
    >
      <Container maxW="7xl">
        {/* section tag */}
        <Text
          fontSize="sm"
          letterSpacing="0.08em"
          color="whiteAlpha.700"
          mb={1}
        >
          IMPACT
        </Text>

        {/* title + subtitle */}
        <Heading size="xl" lineHeight="1.15" fontWeight="semibold">
          The Total Economical Impact of PHISHCODE Customers Insights
        </Heading>
        <Text color="whiteAlpha.800" mt={3} maxW="3xl">
          Explore the advantages of Phishcode Customer Insights in this
          commissioned study conducted by Forrester Consulting.
        </Text>

        {/* stats grid */}
        <MotionBox
          ref={ref}
          variants={stagger(0.1, 0.15)}
          initial="hidden"
          animate={controls}
          mt={{ base: 8, md: 10 }}
        >
          <SimpleGrid
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 8, md: 12 }}
          >
            {stats.map((s, i) => (
              <MotionBox key={i} variants={fadeUp(0)}>
                <HStack align="start" spacing={4}>
                  {/* thin vertical accent bar */}
                  <Box
                    w="3px"
                    h="28px"
                    borderRadius="full"
                    bg="whiteAlpha.800"
                    mt="6px"
                    flexShrink={0}
                  />

                  <Stack spacing={1}>
                    <Heading size="md" fontWeight="normal">
                      {/* If you want counting animation, replace the <>{s.v}</> with Counter:
                          {i === 1
                            ? <Counter value={70} suffix="%" />
                            : i === 0
                              ? <Counter value={164000} prefix="$" />
                              : i === 2
                                ? <Counter value={432000} prefix="$" />
                                : <Counter value={210000} prefix="$" />
                          }
                       */}
                      {s.v}
                    </Heading>
                    <Text fontWeight="normal" color="whiteAlpha.900">
                      {s.l}
                    </Text>
                  </Stack>
                </HStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </MotionBox>
      </Container>
    </Box>
  );
}
