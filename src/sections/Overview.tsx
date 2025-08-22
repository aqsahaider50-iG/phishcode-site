import RevealWords from "../components/animations/RevealWords";
import Reveal from "../components/animations/Reveal";
import { motion } from "framer-motion";
import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  Text,
  Image,
  useColorModeValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AspectRatio,
  AccordionPanel,
  AccordionIcon,
  HStack,
  Icon,
} from "@chakra-ui/react";
import {
  MotionBox,
  MotionImg,
} from "../components/animations/MotionPrimitives";
import {
  slideInX,
  fadeUp,
  scaleReveal,
  stagger,
} from "../components/animations/transitions";

import useInViewAnimation from "../components/animations/useInViewAnimation";
import { FiCheckCircle, FiChevronDown } from "react-icons/fi";
// assets
import stripes from "../assets/png imgs/circles png.png";
// TEMP screenshot (replace when your projects image is ready)
const placeholderShot =
  "https://images.unsplash.com/photo-1551836022-4c4c79ecde51?q=80&w=1400&auto=format&fit=crop";
const bullets = [
  {
    t: "Attack Simulations",
    d: "Precisely assess phishing risks with Real emails attackers might use to target your employees.Automate the creation, payload attachment, user targeting, and scheduling of phishing simulations for your organization.",
  },
  {
    t: "Deep reporting insights",
    d: "The dashboard offers clear insights into simulation results, highlighting user susceptibility, awareness, and training progress. It provides accurate metrics to assess the overall attack exposure of your organization.",
  },
  {
    t: "Cybersecurity awareness training",
    d: "The training modules educate users on key threats like ransomware, phishing, social engineering, and password security. Our awareness templates help employees effectively identify and respond to phishing emails.",
  },
  {
    t: "Multi-tenant account management",
    d: "Precisely access phishing risks with Real emails attackers might use to target your employees. Automate the creation, payload attachment, user targeting, and scheduling of phishing simulations for your organization.",
  },
];

export default function Overview() {
  const { ref, controls } = useInViewAnimation();
  const bg = useColorModeValue("#F6F7F9", "gray.900");
  const textMuted = useColorModeValue("gray.600", "whiteAlpha.700");
  const rule = useColorModeValue("gray.300", "whiteAlpha.300");

  return (
    <Box
      id="overview"
      py={{ base: 12, md: 20 }}
      pb={{ base: 16, md: 24 }} // ★ extra bottom padding so shadow isn’t clipped
      position="relative" // ★ make section a clipping container
      overflow="hidden"
      scrollMarginTop="72px"
    >
      <Container
        maxW={{ base: "100%", sm: "92%", md: "90%", lg: "86%", xl: "7xl" }}
        px={{ base: 4, md: 6 }}
      >
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={12}
          alignItems="start"
        >
          <MotionBox
            ref={ref}
            variants={stagger(0.1, 0.1)}
            initial="hidden"
            animate={controls}
          >
            <Reveal delay={0}>
              <Text
                fontSize="sm"
                color="gray.600"
                mb={1}
                letterSpacing="0.08em"
              >
                OVERVIEW
              </Text>
            </Reveal>
            <RevealWords
              text="Supercharge your Cybersecurity awareness program effectiveness"
              fontWeight="semibold"
              size="xl"
            />
            <Reveal delay={0.1}>
              <Text mt={3} color="gray.600" fontSize="lg">
                Enhance the impact of your cybersecurity awareness program for
                stronger protection and improved employee behavior.
              </Text>
            </Reveal>

            <Accordion allowToggle mt={6}>
              {bullets.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.55,
                    delay: 0.05 * i,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  viewport={{ once: true, amount: 0.6 }}
                >
                  <AccordionItem border="none" mb={1}>
                    <h3>
                      <AccordionButton py={3} _expanded={{ bg: "gray.50" }}>
                        <HStack flex="1" textAlign="left" spacing={3}>
                          <Icon as={FiCheckCircle} color="brand.600" />
                          <Text fontWeight="semibold">{b.t}</Text>
                        </HStack>

                        <AccordionIcon />
                      </AccordionButton>
                    </h3>
                    <AccordionPanel pt={2} color="gray.600">
                      {b.d}
                    </AccordionPanel>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
          </MotionBox>

          {/* RIGHT: device frame + stripes + big soft shadow */}
          <Box position="relative" pl={{ lg: 0 }}>
            {/* striped decoration behind the device */}
            <Image
              src={stripes}
              alt=""
              position="absolute"
              right={{ base: "-30px", lg: "-60px" }}
              top={{ base: "-60px", lg: "-20px" }}
              w={{ base: "260px", md: "360px", lg: "420px" }}
              opacity={0.68}
              pointerEvents="none"
              zIndex={0}
            />

            {/* giant soft drop shadow like the reference */}
            <Box
              position="absolute"
              inset={{ base: "auto 0 -90px 0", lg: "auto 0 -110px 0" }}
              h={{ base: "160px", lg: "200px" }}
              mx="auto"
              maxW={{ base: "95%", lg: "82%" }}
              borderRadius="full"
              bgGradient="radial(circle at 50% 30%, rgba(0,0,0,.25), rgba(0,0,0,0))"
              filter="blur(32px)"
              opacity={0.55}
              zIndex={0}
            />

            {/* device frame */}
            <Box
              position="relative"
              zIndex={1}
              bgGradient="linear(to-b, rgba(255,255,255,.68), rgba(255,255,255,.2))"
              p={{ base: 2.5, md: 3 }}
              borderRadius="24px"
              boxShadow="0 30px 80px rgba(0,0,0,.12)"
            >
              <Box bg="#0F1116" borderRadius="18px" p={{ base: 1.5, md: 2 }}>
                <AspectRatio ratio={16 / 9}>
                  <Box borderRadius="12px" overflow="hidden" bg="white">
                    <Image
                      src={placeholderShot}
                      alt="Projects preview"
                      objectFit="cover"
                    />
                  </Box>
                </AspectRatio>
              </Box>
            </Box>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
