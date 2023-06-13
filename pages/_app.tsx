import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    100: "#fee332",
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
