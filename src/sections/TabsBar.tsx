import {
  Box,
  Container,
  HStack,
  Button,
  Link,
  useColorModeValue,
  Text,
  Show,
  Hide,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import DemoTrial from "../pages/demo/DemoTrial";

const items = ["Overview", "Impact", "Approach", "Resources", "Next steps"];
const ids = items.map((t) => t.toLowerCase().replace(/\s/g, "-"));

function useActiveSection(sectionIds: string[], offset = 72) {
  const [active, setActive] = useState(sectionIds[0]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(id);
          });
        },
        {
          // Trigger when the section top is this far from the viewport top
          rootMargin: `-${offset}px 0px -60% 0px`,
          threshold: [0, 0.2, 0.5, 1],
        }
      );

      io.observe(el);
      observers.push(io);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sectionIds, offset]);

  return active;
}

export default function TabsBar() {
  const bg = useColorModeValue("white", "gray.800");
  const border = useColorModeValue("neutral.100", "whiteAlpha.200");

  // Detect currently visible section (offset = sticky bar height)
  const activeId = useActiveSection(ids, 56);
  const activeLabel = useMemo(
    () => items[ids.indexOf(activeId)] ?? items[0],
    [activeId]
  );

  return (
    <Box
      position="sticky"
      top="0"
      zIndex={15}
      bg={bg}
      borderBottom="1px"
      borderColor={border}
      backdropFilter="saturate(180%) blur(6px)"
    >
      <Container
        maxW={{ base: "100%", md: "7xl" }}
        px={{ base: 3, md: 6 }}
        py={2}
      >
        {/* MOBILE: show only active label */}
        <Hide above="md">
          <HStack justify="space-between">
            <Text fontWeight={700}>{activeLabel}</Text>
            {/* Optional mobile CTA — hide if you want even cleaner */}
            <Button size="sm" colorScheme="brand" rounded="full">
              Try for free
            </Button>
          </HStack>
        </Hide>

        {/* DESKTOP: full tab row */}
        <Show above="md">
          <HStack
            spacing={8}
            // prevent any accidental horizontal overflow
            minW={0}
            overflowX="auto"
            sx={{ "::-webkit-scrollbar": { display: "none" } }}
          >
            {items.map((t) => {
              const id = t.toLowerCase().replace(/\s/g, "-");
              const isActive = id === activeId;
              return (
                <Link
                  key={id}
                  href={`#${id}`}
                  fontWeight={700}
                  color={isActive ? "neutral.900" : "neutral.700"}
                  position="relative"
                  whiteSpace="nowrap"
                  _hover={{ color: "brand.700" }}
                  aria-current={isActive ? "page" : undefined}
                  _after={{
                    content: '""',
                    position: "absolute",
                    left: 0,
                    right: 0,
                    bottom: -6,
                    height: "2px",
                    bg: isActive ? "brand.600" : "transparent",
                    transition: "background-color .2s ease",
                  }}
                >
                  {t}
                </Link>
              );
            })}

            <Box flex="1" />

            <Button
              as={RouterLink}
              to="/trial" // <- navigates to the 3-step flow
              size="sm"
              bg="#0E1C2B"
              color="white"
              borderRadius="6px"
              px={5}
              _hover={{ bg: "#0B1622" }}
            >
              Try for free
            </Button>
          </HStack>
        </Show>
      </Container>
    </Box>
  );
}
