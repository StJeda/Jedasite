import "@/styles/globals.scss";
import CustomCursor from "@/vll/utils/customCursor";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <>
      <CustomCursor />
      <Component {...pageProps} />
    </>
  );
}
