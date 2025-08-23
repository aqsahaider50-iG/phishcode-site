import type { ReactNode } from "react";
import { Box, Container } from "@chakra-ui/react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <Box
      bg="neutral.50"
      minH="calc(100vh - 64px)"
      display="flex"
      alignItems="center"
    >
      <Container maxW={{ base: "sm", md: "md" }} px={{ base: 4, md: 0 }}>
        {children}
      </Container>
    </Box>
  );
}
