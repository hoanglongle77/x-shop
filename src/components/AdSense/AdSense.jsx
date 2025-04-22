"use client";
import { useEffect, useRef } from "react";

export default function Adsense() {
  const adRef = useRef(null);

  useEffect(() => {
    // Kiểm tra nếu ads đã được push thì không push nữa
    if (
      adRef.current &&
      !adRef.current.hasAttribute("data-adsbygoogle-status")
    ) {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("Adsense error:", e);
      }
    }
  }, []);

  return (
    <ins
      ref={adRef}
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
      data-ad-slot="1234567890"
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  );
}
