// src/pages/demo/DemoTrial.tsx
import {
  Box,
  Container,
  Heading,
  Text,
  Image,
  SimpleGrid,
  GridItem,
  FormControl,
  FormLabel,
  Input,
  Select,
  Checkbox,
  Link,
  Button,
  HStack,
  VStack,
  Flex,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";
import logo from "../../assets/logo/phishcode-logo-1.png";

/* ===== visual tokens (match Step 1 look) ===== */
const PAGE_BG = "#F3F6F8";
const CARD_BG = "#ECEFF1";
const CARD_MAXW = { base: "100%", sm: "640px", md: "760px" };
const CARD_RADIUS = "8px";
const CARD_PX = { base: 6, md: 8 };
const CARD_PY = { base: 6, md: 8 };
const CARD_SHADOW = "0 26px 65px rgba(0,0,0,.12), 0 1px 8px rgba(0,0,0,.06)";

const BORDER_CLR = "#AEB9C2";
const FOCUS_CLR = "#0F6CBD";
const LABEL_CLR = "#1B1A19";
const SUB_CLR = "#3B3A39";

const INPUT_H = "36px";
const INPUT_RADIUS = "4px";
const GAP_ROW = 2.5;
/* ============================================ */

type StepIndex = 1 | 2 | 3;

type Form1 = {
  first: string;
  middle: string;
  last: string;
  email: string;
  title: string;
  phone: string;
  company: string;
  size: string;
  website: string;
  websiteUrl: string;
  country: string;
  contactOk: boolean;
  marketingOk: boolean;
};

export default function DemoTrial() {
  //const [hasWebsite, setWebsite] = useState<string>("");
  const [step, setStep] = useState<StepIndex>(1);

  // ---------- Step 1 form state ----------
  const [form1, setForm1] = useState<Form1>({
    first: "",
    middle: "",
    last: "",
    email: "",
    title: "",
    phone: "",
    company: "",
    size: "",
    website: "",
    websiteUrl: "",
    country: "United States",
    contactOk: false,
    marketingOk: false,
  });

  const update1 = (k: keyof Form1) => (e: any) =>
    setForm1((f) => ({
      ...f,
      [k]: e?.target?.type === "checkbox" ? e.target.checked : e.target.value,
    }));

  // ---------- Step 2 form state ----------
  const [email2, setEmail2] = useState("");
  const [pwd, setPwd] = useState("");
  const [pwd2, setPwd2] = useState("");
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const goStep1 = () => setStep(1);

  // Unconditional advance to Step 2 (keeps demo flow smooth)
  const goStep2 = () => {
    setStep(2);
    if (!email2) setEmail2(form1.email);
  };

  // Advance to Step 3 and compose the confirmation details
  const finish = () => {
    // build display values for step 3
    const companySlug = (form1.company || "loremipsum")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "")
      .slice(0, 24);

    const trialUsername = `${companySlug}.phishcode.com`;
    const confirmEmail = email2 || form1.email || "loremipsum@gmail.com";

    (window as any).__trialConfirm = { trialUsername, confirmEmail };

    setStep(3); // <- always advance
  };

  return (
    <Box bg={PAGE_BG} minH="calc(100vh - 64px)" py={{ base: 6, md: 10 }}>
      {/* Header */}
      <Container maxW="7xl" mb={{ base: 3, md: 5 }}>
        <Flex
          direction={{ base: "column", md: "row" }}
          align={{ base: "center", md: "flex-start" }}
          justify="flex-start"
          gap={{ base: 3, md: 6 }}
        >
          {/* Logo on the far left */}
          <Image
            src={logo}
            alt="PHISHCODE"
            h={{ base: "28px", md: "32px" }} // bigger logo
            objectFit="contain"
          />

          {/* Title + Subtitle stacked and centered */}
          <Box flex="1" textAlign="center">
            <Heading size="md" letterSpacing="0.2px" color={LABEL_CLR}>
              PHISHCODE Phishing Attack Simulation – Preview Trial
            </Heading>
            <Text color={SUB_CLR} fontSize="sm">
              Start your free 1-month trial today
            </Text>
          </Box>
        </Flex>
      </Container>

      {/* Card */}
      <Container maxW={CARD_MAXW}>
        <Box
          bg={CARD_BG}
          borderRadius={CARD_RADIUS}
          boxShadow={CARD_SHADOW}
          border="1px solid rgba(0,0,0,.10)"
          px={CARD_PX}
          py={CARD_PY}
        >
          <Stepper currentStep={step} />

          {step === 1 && (
            <Step1 form={form1} update={update1} onNext={goStep2} />
          )}

          {step === 2 && (
            <Step2
              email={email2}
              setEmail={setEmail2}
              pwd={pwd}
              setPwd={setPwd}
              pwd2={pwd2}
              setPwd2={setPwd2}
              show1={show1}
              setShow1={setShow1}
              show2={show2}
              setShow2={setShow2}
              onBack={goStep1}
              onNext={finish}
            />
          )}

          {step === 3 && (
            <Step3
              username={
                (window as any).__trialConfirm?.trialUsername ??
                "loremipsum.phishcode.com"
              }
              email={
                (window as any).__trialConfirm?.confirmEmail ??
                "loremipsum@gmail.com"
              }
              onGetStarted={() => {
                // TODO: navigate to your dashboard/app route if needed
                // e.g., using React Router's useNavigate()
                console.log("Get Started clicked");
              }}
            />
          )}
        </Box>
      </Container>
    </Box>
  );
}

/* -------------------- Step 1 -------------------- */
function Step1({
  form,
  update,
  onNext,
}: {
  form: Form1;
  update: (k: keyof Form1) => (e: any) => void;
  onNext: () => void;
}) {
  return (
    <>
      <Heading size="md" color={LABEL_CLR} mt={1} mb={4}>
        Tell us about yourself
      </Heading>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacingX={4} rowGap={GAP_ROW}>
        <Field label="First name *">
          <TextInput value={form.first} onChange={update("first")} />
        </Field>
        <Field label="Middle name (Optional)">
          <TextInput value={form.middle} onChange={update("middle")} />
        </Field>

        <GridItem colSpan={{ base: 1, md: 2 }}>
          <Field label="Last name *">
            <TextInput value={form.last} onChange={update("last")} />
          </Field>
        </GridItem>

        <GridItem colSpan={{ base: 1, md: 2 }}>
          <Field label="Email *">
            <TextInput
              type="email"
              value={form.email}
              onChange={update("email")}
            />
          </Field>
        </GridItem>

        <GridItem colSpan={{ base: 1, md: 2 }}>
          <Field label="Job title *">
            <TextInput value={form.title} onChange={update("title")} />
          </Field>
        </GridItem>

        <GridItem colSpan={{ base: 1, md: 2 }}>
          <Field label="Business phone number *">
            <TextInput value={form.phone} onChange={update("phone")} />
          </Field>
        </GridItem>

        <Field label="Company name *">
          <TextInput value={form.company} onChange={update("company")} />
        </Field>
        <Field label="Company size *">
          <SelectBox
            placeholder="Select one from below"
            value={form.size}
            onChange={update("size")}
          >
            <option value="1-10">1–10</option>
            <option value="11-50">11–50</option>
            <option value="51-200">51–200</option>
            <option value="201-500">201–500</option>
            <option value="501-1000">501–1000</option>
            <option value="1000+">1000+</option>
          </SelectBox>
        </Field>

        {/* Website select + conditional URL field */}
        {form.website === "yes" ? (
          <>
            <Field label="Does your company have a website? *">
              <SelectBox
                placeholder="Select one from below"
                value={form.website}
                onChange={update("website")}
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </SelectBox>
            </Field>

            <Field label="Company website URL *">
              <TextInput
                placeholder="Enter company website URL"
                value={form.websiteUrl}
                onChange={update("websiteUrl")}
              />
            </Field>
          </>
        ) : (
          <GridItem colSpan={{ base: 1, md: 2 }}>
            <Field label="Does your company have a website? *">
              <SelectBox
                placeholder="Select one from below"
                value={form.website}
                onChange={update("website")}
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </SelectBox>
            </Field>
          </GridItem>
        )}

        <GridItem colSpan={{ base: 1, md: 2 }}>
          <Field label="Country or Region *">
            <SelectBox value={form.country} onChange={update("country")}>
              <option>United States</option>
              <option>United Kingdom</option>
              <option>Canada</option>
              <option>Australia</option>
              <option>India</option>
            </SelectBox>
          </Field>
        </GridItem>
      </SimpleGrid>

      <Box mt={3} fontSize="sm" color={SUB_CLR}>
        <Checkbox colorScheme="brand">
          I understand that Phishcode may contact me about my trial.
        </Checkbox>
        <Checkbox mt={2.5} colorScheme="brand">
          I will receive information, tips, and offers about solutions for
          businesses and organizations, and other Phishcode products and
          services.{" "}
          <Link color={FOCUS_CLR} fontWeight={600}>
            Privacy Statement
          </Link>
          .
        </Checkbox>
      </Box>

      <Button
        onClick={onNext}
        mt={4}
        size="sm"
        bg="#0E1C2B"
        color="white"
        _hover={{ bg: "#0B1622" }}
        _active={{ bg: "#0B1622" }}
        borderRadius="6px"
        px={5}
      >
        Next
      </Button>
    </>
  );
}

/* -------------------- Step 2 (Sign-in details) -------------------- */
function Step2({
  email,
  setEmail,
  pwd,
  setPwd,
  pwd2,
  setPwd2,
  show1,
  setShow1,
  show2,
  setShow2,
  onBack,
  onNext,
}: any) {
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <Heading size="lg" color={LABEL_CLR} mt={2} mb={6}>
        How you’ll sign in
      </Heading>

      <Text color={SUB_CLR} mb={6} maxW="3xl">
        This email is what you’ll use to sign in each time you use your apps.
      </Text>

      <VStack align="stretch" spacing={GAP_ROW}>
        <Field label="Email *">
          <TextInput
            type="email"
            value={email}
            onChange={(e: any) => setEmail(e.target.value)}
          />
        </Field>

        <Field label="Password *">
          <Box position="relative">
            <TextInput
              type={show1 ? "text" : "password"}
              placeholder="Enter your password"
              value={pwd}
              onChange={(e: any) => setPwd(e.target.value)}
              pr="56px"
            />
            {/* simple text toggle (no external icons) */}
            <Button
              variant="ghost"
              size="xs"
              position="absolute"
              right="6px"
              top="50%"
              transform="translateY(-50%)"
              onClick={() => setShow1((v: boolean) => !v)}
            >
              {show1 ? "Hide" : "Show"}
            </Button>
          </Box>
        </Field>

        <Field label="Confirm password *">
          <Box position="relative">
            <TextInput
              type={show2 ? "text" : "password"}
              placeholder="Confirm your password"
              value={pwd2}
              onChange={(e: any) => setPwd2(e.target.value)}
              pr="56px"
            />
            <Button
              variant="ghost"
              size="xs"
              position="absolute"
              right="6px"
              top="50%"
              transform="translateY(-50%)"
              onClick={() => setShow2((v: boolean) => !v)}
            >
              {show2 ? "Hide" : "Show"}
            </Button>
          </Box>
        </Field>
      </VStack>

      <Text color={SUB_CLR} fontSize="sm" mt={4}>
        By selecting <b>Next</b>, you agree to our{" "}
        <Link color={FOCUS_CLR}>terms and conditions</Link>.
      </Text>

      <HStack mt={4} spacing={3}>
        {!isMobile && (
          <Button
            variant="outline"
            onClick={onBack}
            size="sm"
            borderRadius="6px"
          >
            Back
          </Button>
        )}
        <Button
          onClick={onNext}
          size="sm"
          bg="#0E1C2B"
          color="white"
          _hover={{ bg: "#0B1622" }}
          _active={{ bg: "#0B1622" }}
          borderRadius="6px"
          px={5}
        >
          Next
        </Button>
      </HStack>
    </>
  );
}

/* -------------------- Step 3 (Confirmation details) -------------------- */
function Step3({
  username,
  email,
  onGetStarted,
}: {
  username: string;
  email: string;
  onGetStarted: () => void;
}) {
  return (
    <>
      <Heading size="lg" color={LABEL_CLR} mt={2} mb={6}>
        Confirmation details
      </Heading>

      <VStack align="start" spacing={5}>
        <Text color={LABEL_CLR} fontWeight="semibold">
          Thanks for signing up for PHISHCODE Attack Simulation Trial
        </Text>

        <Text color={SUB_CLR}>
          Your username is{" "}
          <Text as="span" fontWeight="semibold" color={LABEL_CLR}>
            {username}
          </Text>
        </Text>

        <Text color={SUB_CLR}>
          We’ve sent a confirmation email to{" "}
          <Text as="span" fontWeight="semibold" color={LABEL_CLR}>
            {email}
          </Text>
        </Text>

        <Button
          onClick={onGetStarted}
          mt={2}
          size="sm"
          bg="#0E1C2B"
          color="white"
          _hover={{ bg: "#0B1622" }}
          _active={{ bg: "#0B1622" }}
          borderRadius="6px"
          px={5}
        >
          Get Started
        </Button>
      </VStack>
    </>
  );
}

/* ---------------- shared parts (inputs, select, stepper) ---------------- */

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <FormControl>
      <FormLabel fontSize="sm" color={LABEL_CLR} mb={1}>
        {label}
      </FormLabel>
      {children}
    </FormControl>
  );
}

function TextInput(props: any) {
  return (
    <Input
      h={INPUT_H}
      bg="white"
      borderColor={BORDER_CLR}
      _hover={{ borderColor: BORDER_CLR }}
      _focus={{ borderColor: FOCUS_CLR, boxShadow: `0 0 0 1px ${FOCUS_CLR}` }}
      borderRadius={INPUT_RADIUS}
      fontSize="14px"
      {...props}
    />
  );
}

function SelectBox(props: any) {
  return (
    <Select
      h={INPUT_H}
      bg="white"
      borderColor={BORDER_CLR}
      _hover={{ borderColor: BORDER_CLR }}
      _focus={{ borderColor: FOCUS_CLR, boxShadow: `0 0 0 1px ${FOCUS_CLR}` }}
      borderRadius={INPUT_RADIUS}
      fontSize="14px"
      {...props}
    />
  );
}

/* ---------- Responsive Stepper (desktop full, mobile only current) ---------- */
function Stepper({ currentStep }: { currentStep: 1 | 2 | 3 }) {
  const isMobile = useBreakpointValue({ base: true, md: false });
  return isMobile ? (
    <StepperMobile currentStep={currentStep} />
  ) : (
    <StepperDesktop currentStep={currentStep} />
  );
}

function StepperDesktop({ currentStep }: { currentStep: StepIndex }) {
  return (
    <Flex align="center" gap={6} wrap="nowrap" w="100%" mb={6}>
      <Step label="About you" active={currentStep === 1} />
      <Bar />
      <Step label="Sign-in details" active={currentStep === 2} />
      <Bar />
      <Step label="Complete & get started" active={currentStep === 3} />
    </Flex>
  );
}

function StepperMobile({ currentStep }: { currentStep: StepIndex }) {
  const labels = ["About you", "Sign-in details", "Complete & get started"];
  return (
    <VStack spacing={1} mb={5}>
      <Box
        w="10px"
        h="10px"
        borderRadius="full"
        borderWidth="2px"
        borderColor={FOCUS_CLR}
        bg={FOCUS_CLR}
      />
      <Text fontSize="sm" textAlign="center">
        {labels[currentStep - 1]}
      </Text>
    </VStack>
  );
}

function Step({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <VStack spacing={1} minW="max-content" align="center">
      <Box
        w="8px"
        h="8px"
        borderRadius="full"
        borderWidth="2px"
        borderColor={active ? FOCUS_CLR : "#9CA6AF"}
        bg={active ? FOCUS_CLR : "transparent"}
      />
      <Text fontSize="sm" color={LABEL_CLR} noOfLines={1} whiteSpace="nowrap">
        {label}
      </Text>
    </VStack>
  );
}
function Bar() {
  return <Box flex="1" h="2px" bg="#C8D1D9" borderRadius="2px" />;
}
