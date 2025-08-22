// src/sections/ThreeFeatureRow.tsx
import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  Text,
  Stack,
  HStack,
  Link,
  Image,
} from "@chakra-ui/react";
import { MotionBox } from "../components/animations/MotionPrimitives";
import { fadeUp, stagger } from "../components/animations/transitions";
import useInViewAnimation from "../components/animations/useInViewAnimation";

// Use your PNGs (paths must match exactly; Vite can import file names with spaces)
import assessIcon from "../assets/icons/access icon phishcode 1.png";
import improveIcon from "../assets/icons/improve.png";
import performanceIcon from "../assets/icons/performance icon phishcode 1.png";

const items = [
  {
    icon: assessIcon,
    title: "Assess phishing risk",
    desc: "Conduct safe attack simulations within your organization to assess security practices and evaluate employees' awareness of phishing threats.",
    cta: "Explore your payloads ›",
    href: "#payloads",
  },
  {
    icon: improveIcon,
    title: "Improve user awareness",
    desc: "Remediate risks and enhance user behavior with our comprehensive cybersecurity awareness training platform.",
    cta: "Explore training ›",
    href: "#training",
  },
  {
    icon: performanceIcon,
    title: "Assess performance",
    desc: "The dashboard offers a clear overview of phishing risk assessments, user vulnerability, and the status of cybersecurity awareness training completion.",
    cta: "View insights and reporting ›",
    href: "#insights",
  },
];

export default function ThreeFeatureRow() {
  const { ref, controls } = useInViewAnimation();

  return (
    <Box
      id="platform"
      bg="neutral.50"
      py={{ base: 12, md: 20 }}
      scrollMarginTop="72px"
    >
      <Container
        maxW={{ base: "100%", sm: "92%", md: "90%", lg: "86%", xl: "7xl" }}
        px={{ base: 4, md: 6 }}
      >
        {/* Centered title + subtitle */}
        <Stack textAlign="center" spacing={3} mb={{ base: 10, md: 14 }}>
          <Heading size={{ base: "xl", md: "xl" }} fontWeight="semibold">
            Phishing risk evaluation and reduction platform
          </Heading>
          <Text color="neutral.500" maxW="4xl" mx="auto">
            Seamlessly implement a security awareness training program and
            assess user behavior improvements over time.
          </Text>
        </Stack>

        {/* Three feature columns */}
        <MotionBox
          ref={ref}
          variants={stagger(0.12, 0.15)}
          initial="hidden"
          animate={controls}
        >
          <SimpleGrid
            columns={{ base: 1, md: 3 }}
            spacing={{ base: 10, md: 8, lg: 12 }}
          >
            {items.map((it, i) => (
              <MotionBox key={i} variants={fadeUp(0)}>
                <Stack spacing={3} align="start">
                  {/* Icon */}
                  <Image
                    src={it.icon}
                    alt=""
                    boxSize="48px"
                    objectFit="contain"
                  />

                  {/* Heading with thin left bar */}
                  <HStack spacing={3} align="center">
                    <Box
                      w="3px"
                      h="24px"
                      bg="neutral.800"
                      borderRadius="full"
                    />
                    <Heading size="lg" fontWeight="normal">
                      {it.title}
                    </Heading>
                  </HStack>

                  {/* Description */}
                  <Text color="neutral.600">{it.desc}</Text>

                  {/* Underlined CTA */}
                  <Link
                    href={it.href}
                    fontWeight={600}
                    textDecoration="underline"
                    _hover={{ color: "brand.700" }}
                  >
                    {it.cta}
                  </Link>
                </Stack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </MotionBox>
      </Container>
    </Box>
  );
}
