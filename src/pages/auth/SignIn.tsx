// src/pages/auth/SignIn.tsx
import {
  Box,
  Container,
  VStack,
  HStack,
  Heading,
  Text,
  Input,
  Link,
  Button,
  Image,
  useToast,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import phishLogo from "../../assets/logo/phishcode-logo-1.png";

/** === Reference-accurate constants === */
const CARD_MAX_W = 520; // smaller like the mock
const CARD_RADIUS = 14;
const PAD_X = 40; // inner horizontal padding
const PAD_Y = 32; // inner vertical padding
const TITLE_SIZE = "28px"; // “Sign in”
const PLACEHOLDER_COLOR = "#6B7280"; // light gray text on line
const UNDERLINE = "#b7d7ea"; // azure line
const BTN_H = 44;
const BTN_W = 150;
const BTN_RADIUS = 8;
const BTN_NEXT_BG = "#0E1C2B";
const BTN_NEXT_BG_H = "#0B1622";
const BTN_CANCEL_BG = "#DDDBD8";
const BTN_CANCEL_BG_H = "#D3D0CC";
/** =================================== */

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  // mobile: full-width stacked buttons
  const isMobile = useBreakpointValue({ base: true, md: false });
  const btnW = isMobile ? "100%" : `${BTN_W}px`;

  const onSubmit = async () => {
    if (!email || !pwd) {
      toast({ status: "error", title: "Enter email and password" });
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 500));
    setLoading(false);
    navigate("/");
  };

  return (
    <Box
      bg="#F6F7F8" // light background like the ref
      minH="calc(100vh - 64px)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      px={4}
      py={{ base: 8, md: 12 }}
    >
      <Container maxW={`${CARD_MAX_W}px`} p={0}>
        <Box
          bg="white"
          borderRadius={`${CARD_RADIUS}px`}
          boxShadow="0 30px 70px rgba(0,0,0,.12), 0 2px 10px rgba(0,0,0,.06)"
          borderWidth="1px"
          borderColor="rgba(0,0,0,0.06)"
          px={{ base: 6, md: `${PAD_X}px` }}
          py={{ base: 6, md: `${PAD_Y}px` }}
        >
          <VStack align="stretch" spacing={6}>
            {/* Logo row (small, left) */}
            <HStack>
              <Image
                src={phishLogo}
                alt="PHISHCODE"
                h="18px"
                objectFit="contain"
              />
            </HStack>

            {/* Title */}
            <Heading
              fontSize={TITLE_SIZE}
              fontWeight={700}
              lineHeight="1.2"
              color="#222"
            >
              Sign in
            </Heading>

            {/* Email field: light placeholder on the underline */}
            <Input
              type="email"
              variant="flushed"
              borderColor={UNDERLINE}
              focusBorderColor={UNDERLINE}
              _focus={{ borderColor: UNDERLINE }}
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              fontSize="16px"
              py="10px"
              _placeholder={{ color: PLACEHOLDER_COLOR, opacity: 1 }}
            />

            {/* Password field: same styling */}
            <Input
              type="password"
              variant="flushed"
              borderColor={UNDERLINE}
              focusBorderColor={UNDERLINE}
              _focus={{ borderColor: UNDERLINE }}
              placeholder="Password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              fontSize="16px"
              py="10px"
              _placeholder={{ color: PLACEHOLDER_COLOR, opacity: 1 }}
            />

            {/* Links block */}
            <Box fontSize="14px" mt={1}>
              <Text color="#1b1a19">
                No account?{" "}
                <Link
                  as={RouterLink}
                  to="/signup"
                  color="#0f6cbd"
                  fontWeight={600}
                >
                  Create one!
                </Link>
              </Text>
              <Link color="#0f6cbd" display="inline-block" mt={2}>
                Forgotten password?
              </Link>
            </Box>

            {/* Buttons */}
            <HStack
              justify="flex-end"
              spacing={{ base: 2, md: 3 }}
              flexDir={{ base: "column-reverse", md: "row" }}
              pt={2}
            >
              <Button
                onClick={() => navigate("/")}
                h={`${BTN_H}px`}
                w={btnW}
                bg={BTN_CANCEL_BG}
                _hover={{ bg: BTN_CANCEL_BG_H }}
                _active={{ bg: BTN_CANCEL_BG_H }}
                borderRadius={`${BTN_RADIUS}px`}
                fontSize="16px"
                fontWeight={600}
                color="#1b1a19"
              >
                Cancel
              </Button>

              <Button
                onClick={onSubmit}
                isLoading={loading}
                h={`${BTN_H}px`}
                w={btnW}
                bg={BTN_NEXT_BG}
                _hover={{ bg: BTN_NEXT_BG_H }}
                _active={{ bg: BTN_NEXT_BG_H }}
                color="white"
                borderRadius={`${BTN_RADIUS}px`}
                fontSize="16px"
                fontWeight={700}
              >
                Next
              </Button>
            </HStack>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
}
