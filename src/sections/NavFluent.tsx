import logo from "../assets/logo/phishcode logoo 1.png";
import feedbackIcon from "../assets/icons/icon feedback-01 1.png";
import {
  Box,
  Container,
  HStack,
  Text,
  Icon,
  Spacer,
  Button,
  Link,
  Show,
  Hide,
  Menu,
  IconButton,
  MenuItem,
  Image, // <-- add Image
} from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";

export default function NavFluent() {
  return (
    <Box
      as="nav"
      bg="white"
      borderBottom="1px"
      borderColor="neutral.100"
      // position="sticky"
      top={0}
      zIndex={20}
    >
      <Container maxW="7xl" py={2}>
        {/* allow wrapping so it never overflows on smaller widths */}
        <HStack spacing={6} align="center" wrap="wrap">
          {/* Left brand area */}
          <HStack spacing={3} minW="max-content">
            <Link href="/" display="inline-flex" alignItems="center">
              {/* Replace color squares with your logo */}
              <Image
                src={logo}
                alt="PhishCode Logo"
                h={8} // adjust logo height here (e.g., 8–10)
                objectFit="contain"
              />
            </Link>
          </HStack>

          {/* Middle links */}

          <Spacer />

          {/* Right actions */}
          <HStack spacing={2} minW="max-content">
            <IconButton
              as={Link}
              href="#feedback" // adjust where it should point
              aria-label="Feedback"
              variant="ghost"
              icon={<Image src={feedbackIcon} alt="Feedback" h={6} />}
              _hover={{ bg: "neutral.50" }}
            />

            <Show above="sm">
              <Button
                size="sm"
                bg="black"
                color="white"
                _hover={{ bg: "blackAlpha.800" }}
                borderRadius="md"
                whiteSpace="nowrap"
              >
                Get a demo
              </Button>
            </Show>

            <Button
              size="sm"
              variant="outline"
              borderColor="neutral.300"
              borderRadius="md"
              whiteSpace="nowrap"
            >
              Sign in
            </Button>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
}
