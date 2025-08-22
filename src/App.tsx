import { Box, Container } from "@chakra-ui/react";
import NavFluent from "./sections/NavFluent";
//import Header from "./sections/Header";
import Home from "./pages/Home";

export default function App() {
  return (
    <Container>
      <Box>
        <NavFluent />

        <Home />
      </Box>
    </Container>
  );
}
