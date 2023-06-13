import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "aos/dist/aos.css";

const colors = {
  brand: {
    100: "#fe90e7",
  },
};

export const theme = extendTheme({ colors });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
