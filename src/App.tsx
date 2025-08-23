import { Routes, Route, useLocation } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import NavFluent from "./sections/NavFluent";
import Home from "./pages/Home";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import DemoTrial from "./pages/demo/DemoTrial";

export default function App() {
  const { pathname } = useLocation();

  // Hide Nav on /signin, /signup, and anything under /trial
  const hideNav =
    /^\/(signin|signup)(?:\/|$)/.test(pathname) ||
    pathname.startsWith("/trial");

  return (
    <Box>
      {!hideNav && <NavFluent />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/trial" element={<DemoTrial />} />
        {/* fallback */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Box>
  );
}
