import "@/styles/globals.css";

import { PagesProgressBar as ProgressBar } from "next-nprogress-bar";
export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ProgressBar
        height="4px"
        color="#f97316"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
}
