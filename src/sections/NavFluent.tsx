import logo from "../assets/logo/phishcode logoo 1.png";
import feedbackIcon from "../assets/icons/icon feedback-01 1.png";
import {
  Box,
  Container,
  HStack,
  Spacer,
  Button,
  Link,
  Show,
  IconButton,
  Image,
  Flex,
} from "@chakra-ui/react";

export default function NavFluent() {
  return (
    <Box
      as="nav"
      bg="white"
      borderBottom="1px"
      borderColor="neutral.100"
      top={0}
      zIndex={20}
    >
      <Container
        maxW={{ base: "100%", md: "7xl" }}
        px={{ base: 3, md: 6 }} // tighter gutters on mobile
        py={{ base: 2, md: 2 }}
      >
        {/* Use Flex so we can shrink nicely without wrapping the brand/actions apart */}
        <Flex align="center" minW={0}>
          {/* Brand (never wraps) */}
          <HStack spacing={2} minW="max-content">
            <Link href="/" display="inline-flex" alignItems="center">
              <Image
                src={logo}
                alt="PhishCode"
                h={{ base: 7, md: 8 }} // a bit smaller on mobile
                objectFit="contain"
              />
            </Link>
          </HStack>

          <Spacer />

          {/* Actions (compact on mobile) */}
          <HStack
            spacing={{ base: 2, md: 3 }}
            minW="max-content"
            // prevent accidental horizontal scroll on very small screens
            overflow="hidden"
          >
            {/* Feedback icon only on all sizes */}
            <IconButton
              as={Link}
              href="#feedback"
              aria-label="Feedback"
              variant="ghost"
              icon={
                <Image
                  src={feedbackIcon}
                  alt="Feedback"
                  h={{ base: 5, md: 6 }}
                />
              }
              _hover={{ bg: "neutral.50" }}
              size="sm"
            />

            <Button
              size="sm"
              variant="outline"
              borderColor="neutral.300"
              borderRadius="full"
              px={{ base: 3, md: 4 }}
              whiteSpace="nowrap"
            >
              Get a demo
            </Button>

            {/* Primary action stays visible but compact on xs */}
            <Button
              size="sm"
              colorScheme="brand"
              borderRadius="full"
              px={{ base: 3, md: 4 }}
              whiteSpace="nowrap"
            >
              Sign in
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
}
