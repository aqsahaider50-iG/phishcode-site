import { Box } from "@chakra-ui/react";
import NavFluent from "./sections/NavFluent";
//import Header from "./sections/Header";
import Home from "./pages/Home";

export default function App() {
  return (
    <Box>
      <NavFluent />

      <Home />
    </Box>
  );
}
