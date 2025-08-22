// src/sections/ResourcesGrid.tsx
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  HStack,
  Badge,
  Button,
  Icon,
  Image,
} from "@chakra-ui/react";
import {
  MotionBox,
  MotionImg,
} from "../components/animations/MotionPrimitives";
import {
  fadeUp,
  stagger,
  slideInX,
  scaleReveal,
} from "../components/animations/transitions";
import useInViewAnimation from "../components/animations/useInViewAnimation";
import { FiPlay } from "react-icons/fi";
import resourcesBg from "../assets/png-imgs/resources section bg.png";

const items = [
  {
    tag: "Demo",
    title: "Phishing Attack Simulation demo",
    desc: "Learn how to deliver exceptional attack simulation.",
    // use Unsplash with explicit width/quality; the code below builds srcSet
    imgBase:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=70",
  },
];

export default function ResourcesGrid() {
  const { ref, controls } = useInViewAnimation({ once: true, amount: 0.45 });

  return (
    <Box
      id="resources"
      scrollMarginTop="72px"
      position="relative"
      py={{ base: 12, md: 20 }}
      overflow="hidden"
      // render heavy section only when near viewport
      style={{ contentVisibility: "auto", containIntrinsicSize: "800px" }}
    >
      {/* Background as real <Image> so it can lazy-load */}
      <Image
        src={resourcesBg}
        alt=""
        position="absolute"
        inset={0}
        w="100%"
        h="100%"
        objectFit="cover"
        loading="lazy"
        decoding="async"
        fetchPriority="low"
        aria-hidden="true"
        zIndex={0}
        style={{ willChange: "opacity, transform" }}
      />

      <Container
        maxW={{ base: "100%", sm: "92%", md: "90%", lg: "86%", xl: "7xl" }}
        px={{ base: 4, md: 6 }}
        position="relative"
        zIndex={1}
      >
        {/* Section label + title */}
        <MotionBox
          variants={stagger(0.08, 0.12)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          mb={4}
        >
          <MotionBox variants={fadeUp(0)}>
            <Text fontSize="sm" letterSpacing="0.08em" color="neutral.600">
              RESOURCES
            </Text>
          </MotionBox>

          <MotionBox variants={slideInX(-1, 0.06, 28)}>
            <Heading size={{ base: "xl", md: "xl" }} fontWeight="semibold">
              Explore reports, blogs, and demos
            </Heading>
          </MotionBox>
        </MotionBox>

        {/* Pills */}
        <MotionBox
          variants={stagger(0.06, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          mb={6}
        >
          <HStack spacing={3}>
            <MotionBox variants={fadeUp(0)}>
              <Badge
                rounded="full"
                px={3}
                py={1}
                bg="neutral.100"
                color="neutral.700"
              >
                Infographics
              </Badge>
            </MotionBox>
            <MotionBox variants={fadeUp(0.02)}>
              <Badge
                rounded="full"
                px={3}
                py={1}
                bg="neutral.100"
                color="neutral.700"
              >
                Blogs
              </Badge>
            </MotionBox>
            <MotionBox variants={fadeUp(0.04)}>
              <Badge
                rounded="full"
                px={3}
                py={1}
                bg="neutral.800"
                color="white"
              >
                Demos
              </Badge>
            </MotionBox>
          </HStack>
        </MotionBox>

        {/* Cards */}
        <MotionBox
          ref={ref}
          variants={stagger(0.12, 0.15)}
          initial="hidden"
          animate={controls}
        >
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {items.map((it, i) => {
              const src480 = `${it.imgBase}&w=480`;
              const src800 = `${it.imgBase}&w=800`;
              const src1200 = `${it.imgBase}&w=1200`;
              return (
                <MotionBox
                  key={i}
                  variants={fadeUp(0)}
                  bg="white"
                  borderRadius="xl"
                  borderWidth="1px"
                  borderColor="neutral.100"
                  boxShadow="sm"
                  overflow="hidden"
                  maxW={{ base: "100%", md: "420px" }}
                  whileHover={{
                    y: -4,
                    transition: { type: "spring", stiffness: 230, damping: 22 },
                  }}
                >
                  {/* Image with fast decode + entrance + hover zoom */}
                  <Box p={3}>
                    <MotionImg
                      as="img"
                      src={src800}
                      srcSet={`${src480} 480w, ${src800} 800w, ${src1200} 1200w`}
                      sizes="(min-width: 960px) 420px, 100vw"
                      alt=""
                      style={{
                        width: "100%",
                        height: "170px",
                        objectFit: "cover",
                        willChange: "opacity, transform",
                      }}
                      borderRadius="xl"
                      variants={scaleReveal(0.96, 1, 0.15)}
                      initial="hidden"
                      animate={controls}
                      whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.35, ease: "easeOut" },
                      }}
                      loading="lazy"
                      decoding="async"
                      fetchPriority="low"
                    />
                  </Box>

                  {/* Text & CTA */}
                  <MotionBox
                    variants={stagger(0.06, 0.1)}
                    initial="hidden"
                    animate={controls}
                    px={5}
                    pb={5}
                    pt={0}
                  >
                    <MotionBox variants={fadeUp(0)}>
                      <Badge colorScheme="brand" rounded="full" mb={2}>
                        {it.tag}
                      </Badge>
                    </MotionBox>

                    <MotionBox variants={slideInX(-1, 0.05, 20)}>
                      <Heading size="md" mb={2} fontWeight="semibold">
                        {it.title}
                      </Heading>
                    </MotionBox>

                    <MotionBox variants={fadeUp(0.04)}>
                      <Text color="neutral.600" mb={4}>
                        {it.desc}
                      </Text>
                    </MotionBox>

                    <MotionBox variants={scaleReveal(0.98, 1, 0.06)}>
                      <Button
                        variant="ghost"
                        size="sm"
                        leftIcon={<Icon as={FiPlay} />}
                        borderRadius="md"
                        _hover={{ bg: "neutral.50" }}
                        _active={{ transform: "scale(0.98)" }}
                      >
                        Watch the demo
                      </Button>
                    </MotionBox>
                  </MotionBox>
                </MotionBox>
              );
            })}
          </SimpleGrid>
        </MotionBox>
      </Container>
    </Box>
  );
}
