// src/sections/Hero.tsx
import {
  Box,
  Container,
  SimpleGrid,
  Heading,
  Text,
  Stack,
  Button,
  AspectRatio,
  Icon,
  Image,
  useBreakpointValue,
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
import { FiPlay } from "react-icons/fi";

// ASSETS
import banner from "../assets/png imgs/phishcode banner imgg.png";

export default function Hero() {
  const { ref, controls } = useInViewAnimation({ amount: 0.4, once: true });

  // Responsive heading size for small screens
  const headingSize = useBreakpointValue({ base: "xl", sm: "2xl", md: "3xl" });
  const leadSize = useBreakpointValue({ base: "md", md: "xl" });

  return (
    <Box
      bgGradient="linear(to-tr, #0B1420 10%, #0E1C2A 55%, #29A8E1 160%)"
      color="white"
      pt={{ base: 16, md: 20 }}
      pb={{ base: 10, md: 20 }}
      position="relative"
      overflow="hidden" // prevent right-side overflow on mobile
    >
      {/* Decorative glow (kept subtle) */}
      <Box
        position="absolute"
        right="-18%"
        top="-30%"
        w={{ base: "900px", md: "1500px" }}
        h={{ base: "900px", md: "1500px" }}
        borderRadius="full"
        bgGradient="radial(closest-side, rgba(0,0,0,.35) 0%, rgba(0,0,0,.22) 35%, rgba(0,0,0,0) 70%)"
        transform="rotate(-8deg)"
        pointerEvents="none"
      />

      {/* Background banner (lighter on mobile to avoid crowding) */}
      <MotionImg
        as={Image}
        src={banner}
        alt="Phishcode Banner"
        position="absolute"
        right="0"
        bottom="0"
        w={{ base: "90%", md: "60%" }}
        h={{ base: "auto", md: "auto" }}
        maxW="none"
        objectFit="cover"
        zIndex={0}
        pointerEvents="none"
        opacity={{ base: 0.25, md: 1 }}
        variants={fadeUp(0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        loading="lazy"
        decoding="async"
        style={{ willChange: "opacity, transform" }}
      />

      <Container maxW="7xl">
        <SimpleGrid
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 8, md: 14 }}
          alignItems="center"
        >
          {/* LEFT: heading, copy, CTAs with staggered entrance */}
          <MotionBox
            ref={ref}
            variants={stagger(0.08, 0.12)}
            initial="hidden"
            animate={controls}
            zIndex={1}
          >
            <MotionBox variants={slideInX(-1, 0.05, 36)}>
              <Heading
                size={headingSize}
                lineHeight="1.15"
                letterSpacing="-0.01em"
                fontWeight="normal"
              >
                Phishing Attack Simulation
              </Heading>
            </MotionBox>

            <MotionBox variants={fadeUp(0.04)}>
              <Text
                mt={4}
                fontSize={leadSize}
                color="whiteAlpha.850"
                maxW={{ base: "100%", sm: "36rem", md: "3xl" }}
              >
                Empower organizations to identify and defend against phishing
                attacks with intelligent, realistic simulations and
                cybersecurity awareness training.
              </Text>
            </MotionBox>

            <MotionBox variants={scaleReveal(0.96, 1, 0.08)}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                spacing={{ base: 3.5, sm: 4 }}
                mt={{ base: 6, md: 8 }}
                w="full"
              >
                <Button
                  size={{ base: "md", md: "lg" }}
                  colorScheme="whiteAlpha"
                  bg="white"
                  color="#0B1420"
                  w={{ base: "100%", sm: "auto" }} // full-width button on mobile
                >
                  Try for free
                </Button>
                <Button
                  size={{ base: "md", md: "lg" }}
                  variant="outline"
                  color="white"
                  borderColor="whiteAlpha.700"
                  _hover={{ bg: "whiteAlpha.200" }}
                  w={{ base: "100%", sm: "auto" }}
                >
                  Contact sales
                </Button>
              </Stack>
            </MotionBox>
          </MotionBox>

          {/* RIGHT: device frame with video placeholder & gentle entrance */}
          <MotionBox
            variants={scaleReveal(0.9, 1, 0.12)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.45 }}
            position="relative"
            zIndex={1}
          >
            {/* glow base under the device (hidden on very small screens) */}
            <Box
              display={{ base: "none", sm: "block" }}
              position="absolute"
              left="10%"
              right="10%"
              bottom="-24px"
              h="28px"
              borderRadius="full"
              bgGradient="linear(to-r, rgba(41,168,225,.7), rgba(255,255,255,0), rgba(41,168,225,.7))"
              filter="blur(14px)"
              opacity={0.95}
              pointerEvents="none"
            />

            {/* Outer silver/ice frame */}
            <Box
              position="relative"
              p={{ base: 2, md: 3 }}
              borderRadius="24px"
              bgGradient="linear(to-b, rgba(255,255,255,.58), rgba(255,255,255,.18))"
              boxShadow="0 26px 70px rgba(0,0,0,.45)"
              w="100%"
            >
              {/* Inner dark bezel */}
              <Box
                borderRadius="20px"
                bg="#1A1F27"
                p={{ base: 1.5, md: 2 }}
                boxShadow="inset 0 0 0 1px rgba(255,255,255,.07)"
              >
                {/* 16:9 area – replace with your video when ready */}
                <AspectRatio ratio={16 / 9}>
                  <Box
                    position="relative"
                    borderRadius="16px"
                    overflow="hidden"
                    bgGradient="linear(to-b, #2B3240, #171A21)"
                  >
                    {/* inner screen vignette */}
                    <Box
                      position="absolute"
                      inset={0}
                      bg="radial-gradient(120% 100% at 50% 0%, rgba(255,255,255,.09) 0%, rgba(0,0,0,0) 45%, rgba(0,0,0,.35) 100%)"
                      pointerEvents="none"
                    />
                    {/* play button */}
                    <Box
                      position="absolute"
                      inset="0"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Box
                        as="button"
                        w={{ base: "56px", md: "64px" }}
                        h={{ base: "56px", md: "64px" }}
                        borderRadius="full"
                        bg="white"
                        boxShadow="0 6px 28px rgba(0,0,0,.35)"
                        _hover={{ transform: "scale(1.05)" }}
                        transition="transform .15s ease"
                        aria-label="Play video"
                      >
                        <Icon
                          as={FiPlay}
                          color="#0B1420"
                          boxSize={{ base: "24px", md: "28px" }}
                          ml="6px"
                        />
                      </Box>
                    </Box>
                  </Box>
                </AspectRatio>
              </Box>

              {/* thin highlight across the frame */}
              <Box
                pointerEvents="none"
                position="absolute"
                inset={0}
                borderRadius="24px"
                bgGradient="linear(to-tr, rgba(255,255,255,.18), transparent 45%)"
              />
            </Box>
          </MotionBox>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
