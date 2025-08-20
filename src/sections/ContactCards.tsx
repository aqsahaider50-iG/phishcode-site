// src/sections/ContactCards.tsx
import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  Text,
  HStack,
  VStack,
  Button,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import { MotionBox } from "../components/animations/MotionPrimitives";
import {
  fadeUp,
  stagger,
  scaleReveal,
  slideInX,
} from "../components/animations/transitions";
import useInViewAnimation from "../components/animations/useInViewAnimation";
import { FiChevronRight } from "react-icons/fi";

// local assets
import EmailIcon from "../assets/icons/email.png";
import DemoIcon from "../assets/icons/demo.png";

type Item = { icon: string; t: string; d: string; cta: string };

const items: Item[] = [
  {
    icon: EmailIcon,
    t: "Email Phishcode Representatives",
    d: "Available M–F 6 AM to 3 PM PT.",
    cta: "Contact now",
  },
  {
    icon: DemoIcon,
    t: "Request a demo",
    d: "Take a look at our demo.",
    cta: "Watch demo",
  },
];

export default function ContactCards() {
  const { ref, controls } = useInViewAnimation({ once: true, amount: 0.35 });

  // slightly larger paddings on md+
  const cardP = useBreakpointValue({ base: 8, md: 6 });

  return (
    <Box bg="neutral.50" py={{ base: 12, md: 20 }}>
      <Container maxW="7xl">
        <MotionBox
          ref={ref}
          variants={stagger(0.12, 0.15)}
          initial="hidden"
          animate={controls}
        >
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 6, md: 8 }}>
            {items.map((it, i) => (
              <MotionBox
                key={i}
                variants={fadeUp(0)}
                // pleasant hover lift + shadow
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                bg="white"
                borderRadius="2xl"
                borderWidth="1px"
                borderColor="neutral.200"
                boxShadow="sm"
                p={cardP}
              >
                <HStack
                  align="start"
                  spacing={{ base: 4, md: 5 }}
                  justify="space-between"
                >
                  {/* Left: icon + text */}
                  <HStack align="start" spacing={{ base: 3, md: 4 }} flex="1">
                    {/* Icon badge with scale-in */}
                    <MotionBox
                      variants={scaleReveal(0.85, 1, 0.18)}
                      initial="hidden"
                      animate={controls}
                      borderRadius="md"
                      borderWidth="1px"
                      borderColor="neutral.200"
                      bg="neutral.50"
                      boxShadow="xs"
                      p={{ base: "8px", md: "10px" }}
                      flexShrink={0}
                    >
                      <Image
                        src={it.icon}
                        alt=""
                        boxSize={{ base: "18px", md: "20px" }}
                      />
                    </MotionBox>

                    <VStack align="start" spacing={1}>
                      <MotionBox variants={slideInX(-1, 0.05, 24)}>
                        <Heading
                          size={useBreakpointValue({ base: "sm", md: "md" })}
                          lineHeight="1.3"
                          fontWeight="normal"
                        >
                          {it.t}
                        </Heading>
                      </MotionBox>

                      <MotionBox variants={fadeUp(0.05)}>
                        <Text
                          color="neutral.600"
                          fontSize={useBreakpointValue({
                            base: "sm",
                            md: "md",
                          })}
                        >
                          {it.d}
                        </Text>
                      </MotionBox>
                    </VStack>
                  </HStack>

                  {/* Right: CTA pill (kept at bottom-left in your ref; here it stays visible & animates) */}
                </HStack>

                <MotionBox variants={fadeUp(0.1)} mt={{ base: 4, md: 6 }}>
                  <HStack spacing={3}>
                    <Button
                      size="sm"
                      p={0}
                      w={{ base: "28px", md: "30px" }}
                      h={{ base: "28px", md: "30px" }}
                      minW="unset"
                      bg="neutral.900"
                      _hover={{ bg: "neutral.800" }}
                      color="white"
                      borderRadius="md"
                      aria-label={it.cta}
                      // subtle press ripple
                      transition="transform .08s ease"
                      _active={{ transform: "scale(0.96)" }}
                    >
                      <FiChevronRight />
                    </Button>
                    <Text
                      fontWeight={600}
                      color="neutral.700"
                      fontSize={{ base: "sm", md: "md" }}
                    >
                      {it.cta}
                    </Text>
                  </HStack>
                </MotionBox>
              </MotionBox>
            ))}
          </SimpleGrid>
        </MotionBox>
      </Container>
    </Box>
  );
}
