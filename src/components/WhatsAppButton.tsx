import React from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/971565568571"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Green Books on WhatsApp"
      className="fixed bottom-6 left-6 z-40 bg-[#00A82B] hover:bg-[#25D366] text-white p-3.5 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 flex items-center justify-center group"
    >
      <MessageCircle className="w-7 h-7" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 ease-in-out group-hover:pl-2 text-xs font-semibold">
        WhatsApp Us
      </span>
    </a>
  );
}
