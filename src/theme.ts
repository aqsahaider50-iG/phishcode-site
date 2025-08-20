/*import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
 fonts: {
  heading: `"Segoe UI", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`,
  body: `"Segoe UI", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`,
},

  colors: {
    brand: {
      50:"#eef6ff",100:"#dbeafe",200:"#c0dbff",300:"#99c0ff",400:"#6ea1ff",
      500:"#3a7cff",600:"#2f66d0",700:"#234ea3",800:"#163870",900:"#0e274d",
    },
  },
  radii: { xl: "18px", "2xl": "24px" },
  shadows: {
    card: "0 8px 24px rgba(16,24,40,.08)",
    insetSoft: "inset 0 1px 0 rgba(255,255,255,.4), 0 8px 24px rgba(2,6,23,.08)",
  },
   styles: {
    global: {
      "*, *::before, *::after": { boxSizing: "border-box" },
      html: { height: "100%", overflowX: "hidden" },
      body: { minHeight: "100%", overflowX: "hidden", bg: "#f7fafc" },
      "#root": { minHeight: "100%", overflowX: "hidden" },
    },
  },
});
export default theme;*/
// src/theme.ts
import { extendTheme } from "@chakra-ui/react";
import type { ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = { initialColorMode: "light", useSystemColorMode: false };

const theme = extendTheme({
  config,
  fonts: {
    heading: `"Segoe UI", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`,
    body: `"Segoe UI", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif`,
  },
  colors: {
    brand: {
      50:"#e6f2fb",100:"#cfe5f8",200:"#a2cdf1",300:"#72b2ea",400:"#4599e2",
      500:"#1a86e3", // accent
      600:"#0f6cbd", // Microsoft blue
      700:"#0d5b9d",800:"#0a487c",900:"#08365c",
    },
    neutral: {
      25:"#fafafa",50:"#f3f2f1",100:"#e1dfdd",200:"#c8c6c4",
      300:"#b3b0ad",400:"#8a8886",500:"#605e5c",600:"#3b3a39",
      700:"#323130",800:"#252423",900:"#1b1a19",
    },
  },
  radii: { md: "8px", lg: "12px", xl: "16px", "2xl": "20px", full: "9999px" },
  shadows: {
    sm: "0 1px 3px rgba(0,0,0,.1)",
    md: "0 4px 14px rgba(0,0,0,.12)",
    card: "0 12px 32px rgba(0,0,0,.14)",
  },
  styles: {
    global: {
      "*,*::before,*::after": { boxSizing: "border-box" },
      html: { height: "100%", overflowX: "hidden" },
      body: { minHeight: "100%", overflowX: "hidden", bg: "neutral.50", color: "neutral.800" },
      a: { textDecoration: "none" },
    },
  },
  components: {
    Button: {
      baseStyle: { 
        fontWeight: "normal" , borderRadius: "full" },
      sizes: { lg: { h: 12, px: 6 }, md: { h: 10, px: 5 }, sm: { h: 9, px: 4 } },
      variants: {
        solid: { bg: "brand.600", _hover: { bg: "brand.700" }, _active: { bg: "brand.800" } },
        outline: { borderColor: "neutral.200", color: "neutral.800", _hover: { bg: "neutral.50" } },
        ghost: { color: "brand.700", _hover: { bg: "neutral.50" } },
      },
      defaultProps: { colorScheme: "brand" },
    },
    Container: { baseStyle: { maxW: "7xl" } },
    Card: {
      baseStyle: { container: { bg: "white", borderWidth: "1px", borderColor: "neutral.100", borderRadius: "lg", boxShadow: "sm" } },
    },
    Heading: { baseStyle: { letterSpacing: "-0.01em" } },
  },
});

export default theme;

