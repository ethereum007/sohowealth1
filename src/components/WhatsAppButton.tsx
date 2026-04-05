"use client";

import { trackEvent } from "@/lib/gtag";

const WhatsAppButton = () => {
  const handleClick = () => {
    trackEvent("whatsapp_click", { location: "floating_button" });
  };

  return (
    <a
      href="https://wa.me/919032999466"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Kiran on WhatsApp"
      title="Chat with Kiran"
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-[9999] flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform duration-200 hover:scale-110"
      style={{ backgroundColor: "#25D366" }}
    >
      <svg viewBox="0 0 32 32" width="28" height="28" fill="white">
        <path d="M16.004 3.2C9.054 3.2 3.4 8.854 3.4 15.804c0 2.222.58 4.39 1.683 6.303L3.2 28.8l6.89-1.808A12.56 12.56 0 0 0 16.004 28.4c6.95 0 12.596-5.654 12.596-12.596S22.954 3.2 16.004 3.2Zm0 22.996a10.36 10.36 0 0 1-5.292-1.45l-.38-.225-3.94 1.034 1.052-3.844-.247-.393A10.35 10.35 0 0 1 5.6 15.804c0-5.736 4.668-10.404 10.404-10.404 5.736 0 10.396 4.668 10.396 10.404 0 5.736-4.66 10.396-10.396 10.396Zm5.705-7.79c-.313-.157-1.852-.914-2.14-1.018-.287-.105-.496-.157-.705.156-.21.313-.81 1.018-.993 1.228-.183.209-.366.235-.679.078-.313-.156-1.322-.487-2.518-1.554-.931-.83-1.56-1.856-1.742-2.17-.183-.312-.02-.481.137-.637.141-.14.313-.366.47-.549.156-.183.208-.313.313-.522.104-.21.052-.392-.026-.549-.078-.156-.705-1.7-.966-2.327-.254-.61-.513-.528-.705-.538l-.601-.01c-.21 0-.549.078-.836.392-.287.313-1.097 1.07-1.097 2.612 0 1.54 1.123 3.028 1.28 3.237.156.21 2.21 3.374 5.355 4.731.748.323 1.333.516 1.789.66.751.24 1.435.206 1.975.125.602-.09 1.852-.757 2.114-1.488.261-.731.261-1.358.183-1.488-.078-.13-.287-.21-.6-.366Z" />
      </svg>
      <span className="absolute inset-0 rounded-full animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite] opacity-30" style={{ backgroundColor: "#25D366" }} />
    </a>
  );
};

export default WhatsAppButton;
