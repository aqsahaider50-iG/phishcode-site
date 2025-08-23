import {
  Box,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Button,
  VStack,
  useToast,
  useBreakpointValue,
  Checkbox,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import { MotionBox } from "../../components/animations/MotionPrimitives";
import { fadeUp } from "../../components/animations/transitions";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirm, setConfirm] = useState("");
  const [agree, setAgree] = useState(false);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const navigate = useNavigate();

  const btnW = useBreakpointValue({ base: "100%", md: "auto" });
  const btnDir = useBreakpointValue({ base: "column-reverse", md: "row" });
  const btnGap = useBreakpointValue({ base: 2, md: 3 });

  const onSubmit = async () => {
    if (!name || !email || !pwd || !confirm) {
      toast({ status: "error", title: "Please fill all fields" });
      return;
    }
    if (pwd.length < 8) {
      toast({
        status: "error",
        title: "Password must be at least 8 characters",
      });
      return;
    }
    if (pwd !== confirm) {
      toast({ status: "error", title: "Passwords do not match" });
      return;
    }
    if (!agree) {
      toast({ status: "error", title: "Please accept terms" });
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    toast({ status: "success", title: "Account created" });
    navigate("/signin");
  };

  const onCancel = () => navigate("/signin");

  return (
    <AuthLayout>
      <MotionBox
        variants={fadeUp(0)}
        initial="hidden"
        animate="show"
        bg="white"
        borderRadius="xl"
        borderWidth="1px"
        borderColor="neutral.100"
        boxShadow="card"
        p={{ base: 6, md: 10 }}
      >
        <VStack align="stretch" spacing={{ base: 5, md: 6 }}>
          <Box>
            <Heading size="lg" mb={1}>
              Create account
            </Heading>
            <Text color="neutral.500">Start your 14-day trial in minutes.</Text>
          </Box>

          <Stack spacing={4}>
            <FormControl>
              <FormLabel fontSize="sm" color="neutral.600">
                Full name
              </FormLabel>
              <Input
                variant="flushed"
                borderColor="brand.200"
                focusBorderColor="brand.500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Alex Johnson"
                autoComplete="name"
              />
            </FormControl>

            <FormControl>
              <FormLabel fontSize="sm" color="neutral.600">
                Email
              </FormLabel>
              <Input
                type="email"
                variant="flushed"
                borderColor="brand.200"
                focusBorderColor="brand.500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                autoComplete="email"
              />
            </FormControl>

            <FormControl>
              <FormLabel fontSize="sm" color="neutral.600">
                Password
              </FormLabel>
              <Input
                type="password"
                variant="flushed"
                borderColor="brand.200"
                focusBorderColor="brand.500"
                value={pwd}
                onChange={(e) => setPwd(e.target.value)}
                placeholder="At least 8 characters"
                autoComplete="new-password"
              />
            </FormControl>

            <FormControl>
              <FormLabel fontSize="sm" color="neutral.600">
                Confirm password
              </FormLabel>
              <Input
                type="password"
                variant="flushed"
                borderColor="brand.200"
                focusBorderColor="brand.500"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                placeholder="Re-enter password"
                autoComplete="new-password"
              />
            </FormControl>

            <Checkbox
              isChecked={agree}
              onChange={(e) => setAgree(e.target.checked)}
            >
              I agree to the Terms and Privacy Policy
            </Checkbox>
          </Stack>

          <HStack justify="flex-end" spacing={btnGap} flexDir={btnDir} pt={2}>
            <Button variant="outline" onClick={onCancel} w={btnW}>
              Cancel
            </Button>
            <Button
              colorScheme="brand"
              onClick={onSubmit}
              isLoading={loading}
              w={btnW}
            >
              Create account
            </Button>
          </HStack>
        </VStack>
      </MotionBox>
    </AuthLayout>
  );
}
