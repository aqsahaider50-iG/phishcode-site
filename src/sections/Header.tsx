import {
  Box,
  Container,
  HStack,
  Image,
  Button,
  Icon,
  Spacer,
} from "@chakra-ui/react";
import { FiShield } from "react-icons/fi";

export default function Header() {
  return (
    <Box
      as="header"
      position="sticky"
      top="0"
      zIndex={10}
      bg="white"
      borderBottom="1px"
      borderColor="gray.200"
    >
      <Container maxW="6xl" py={3}>
        <HStack>
          <HStack spacing={2}>
            <Icon as={FiShield} boxSize={5} color="brand.700" />
            <Image
              alt="Logo"
              src="https://dummyimage.com/100x20/000/fff&text=PHISHCODE"
              h="20px"
            />
          </HStack>
          <Spacer />
          <HStack spacing={3}>
            <Button size="sm" variant="outline">
              Get a demo
            </Button>
            <Button size="sm" colorScheme="brand">
              Sign in
            </Button>
          </HStack>
        </HStack>
      </Container>
    </Box>
  );
}
