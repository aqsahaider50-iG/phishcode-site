// src/sections/NavFluent.tsx
import { Link as RouterLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo/phishcode-logo-1.png";
import feedbackIcon from "../assets/icons/icon-feedback-01.png";
import {
  Box,
  Container,
  HStack,
  Spacer,
  Button,
  Link,
  IconButton,
  Image,
  Flex,
} from "@chakra-ui/react";
const NAV_H = { base: 56, md: 64 };
export default function NavFluent() {
  const navigate = useNavigate();
  return (
    <>
      <Box
        as="nav"
        bg="white"
        borderBottom="1px"
        borderColor="neutral.100"
        top={0}
        left={0}
        right={0}
        zIndex={2000}
        h={{ base: `${NAV_H.base}px`, md: `${NAV_H.md}px` }}
        display="flex"
        alignItems="center"
        pointerEvents="auto"
      >
        <Container
          maxW={{ base: "100%", md: "7xl" }}
          px={{ base: 3, md: 6 }}
          py={{ base: 2, md: 2 }}
        >
          <Flex align="center" minW={0}>
            {/* Brand */}
            <HStack spacing={2} minW="max-content">
              <Link
                as={RouterLink}
                to="/"
                display="inline-flex"
                alignItems="center"
                aria-label="Go to home"
              >
                <Image
                  src={logo}
                  alt="PhishCode"
                  h={{ base: 7, md: 8 }}
                  objectFit="contain"
                />
              </Link>
            </HStack>

            <Spacer />

            {/* Actions */}
            <HStack
              spacing={{ base: 2, md: 3 }}
              minW="max-content"
              overflow="hidden"
            >
              <IconButton
                as={Link}
                href="#feedback"
                aria-label="Open feedback"
                variant="ghost"
                icon={
                  <Image src={feedbackIcon} alt="" h={{ base: 5, md: 6 }} />
                }
                _hover={{ bg: "neutral.50" }}
                size="sm"
              />

              <Button
                as={RouterLink}
                to="/demo"
                size="sm"
                variant="outline"
                borderColor="neutral.300"
                borderRadius="full"
                px={{ base: 3, md: 4 }}
                whiteSpace="nowrap"
              >
                Get a demo
              </Button>

              <Button
                onClick={() => navigate("/signin")} // ← programmatic navigation
                colorScheme="brand"
                borderRadius="full"
                size="sm"
                px={{ base: 3, md: 4 }}
                whiteSpace="nowrap"
              >
                Sign in
              </Button>
            </HStack>
          </Flex>
        </Container>
      </Box>
    </>
  );
}
