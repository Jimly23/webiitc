import React from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "@/lib/gtag";
import TagManager from "react-gtm-module";
const AnalyticProvider = ({ children }) => {
  const router = useRouter();
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_GTM_ID !== null) {
      TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GTM_ID });
    }
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return <>{children}</>;
};

export default AnalyticProvider;
