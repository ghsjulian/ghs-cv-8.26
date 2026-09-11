import { useEffect } from "react";

const TrackVisitor = () => {
  useEffect(() => {
    const trackVisitor = async () => {
      const LAST_SENT_KEY = "visitor_email_sent_time";
      const COOLDOWN_MS = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

      const lastSent = localStorage.getItem(LAST_SENT_KEY);
      const now = Date.now();

      // Skip tracking if sent within the last 24 hours
      if (lastSent && now - parseInt(lastSent, 10) < COOLDOWN_MS) {
        return;
      }

      try {
        const ipRes = await fetch("https://ipwho.is/");

        if (!ipRes.ok) throw new Error("IP API request failed");

        const ipData = await ipRes.json();

        if (!ipData.success) {
          throw new Error(ipData.message || "Failed to fetch IP details");
        }

        const payload = {
          // access_key: "7bbfa1fb-5d6a-4077-9250-9e53c694215a",
          // subject: "🚀 New Visitor on ghsresume.netlify.app!",
          // from_name: "Visitor Tracker",
          location: `${ipData.city || "Unknown"}, ${ipData.country || "Unknown"}`,
          ip_address: ipData.ip || "Unknown",
          isp_org: ipData.connection?.isp || "Unknown ISP",
          referrer: document.referrer || "Direct Visit / Bookmarked",
          screen_resolution: `${window.screen.width}x${window.screen.height}`,
          device_info: navigator.userAgent,
          time: new Date().toLocaleString("en-BD", { timeZone: "Asia/Dhaka" }),
          developer: "Ghs Julian",
        };

        const formApi = "https://api.web3forms.com/submit";
        const api = "https://ghs-cv-8-26.onrender.com/api/v1/send-visitor"; // "http://localhost:3000/api/v1/send-visitor";
        const response = await fetch(api, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(payload),
        });

        const responseData = await response.json();
        // console.log(responseData);

        if (response.ok) {
          // Save current timestamp to localStorage
          localStorage.setItem(LAST_SENT_KEY, now.toString());
          localStorage.setItem("total-visitor", responseData?.data?.total);
        }
      } catch (error) {
        console.error("Tracker error:", error);
      }
    };

    trackVisitor();
  }, []);

  return null;
};

export default TrackVisitor;
