import {
  Box,
  Container,
  HStack,
  Button,
  Link,
  useColorModeValue,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const tabs = ["Overview", "Impact", "Approach", "Resources", "Next steps"];

export default function TabsBar() {
  // If your top nav is taller on mobile, adjust the offset per breakpoint
  const STICKY_TOP = 0;

  const [stuck, setStuck] = useState(false);
  const bg = useColorModeValue("white", "gray.800");

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Box
      position="sticky"
      top={`${STICKY_TOP}px`} // <- sits just under your top nav
      zIndex={15} // above content, below modal
      bg={bg}
      borderBottom="1px"
      borderColor={stuck ? "neutral.100" : "transparent"}
      boxShadow={stuck ? "sm" : "none"}
      // helps on Safari/iOS for a slightly “frosted” feel (optional)
      backdropFilter="saturate(180%) blur(6px)"
    >
      <Container maxW="7xl" py={2}>
        <HStack spacing={{ base: 4, md: 8 }}>
          {tabs.map((t) => (
            <Link
              key={t}
              href={`#${t.toLowerCase().replace(/\s/g, "-")}`}
              fontWeight={600}
              color="neutral.700"
              _hover={{ color: "brand.700" }}
              whiteSpace="nowrap"
            >
              {t}
            </Link>
          ))}

          {/* push CTA to the far right */}
          <Box flex="1" />

          <Button
            size="sm"
            colorScheme="brand"
            rounded="full"
            whiteSpace="nowrap"
          >
            Try for free
          </Button>
        </HStack>
      </Container>
    </Box>
  );
}
