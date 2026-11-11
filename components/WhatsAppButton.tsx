
"use client";

export default function WhatsAppButton() {
  const whatsappNumber = "918147826165";

  const message =
    "Hello MBS Constructions, I would like to enquire about your construction services.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with MBS Constructions on WhatsApp"
      title="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-[100] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform duration-300 hover:scale-110 md:bottom-7 md:right-7"
    >
      <svg
        viewBox="0 0 32 32"
        fill="currentColor"
        className="h-8 w-8"
        aria-hidden="true"
      >
        <path d="M16 .8A15.1 15.1 0 0 0 3 23.6L.9 31l7.6-2A15.2 15.2 0 1 0 16 .8Zm0 27.5a12.2 12.2 0 0 1-6.2-1.7l-.4-.2-4.5 1.2 1.2-4.4-.3-.5A12.3 12.3 0 1 1 16 28.3Zm6.7-9.2c-.4-.2-2.2-1.1-2.5-1.2-.3-.1-.5-.2-.7.2-.2.4-1 1.2-1.2 1.5-.2.2-.4.3-.8.1a10 10 0 0 1-3-1.9 11.3 11.3 0 0 1-2.1-2.6c-.2-.4 0-.6.2-.8l.6-.7.4-.6c.1-.2 0-.5 0-.7l-1.1-2.7c-.3-.7-.6-.6-.8-.6h-.7c-.3 0-.7.1-1 .5-.4.4-1.3 1.3-1.3 3.1s1.3 3.5 1.5 3.7c.2.2 2.6 4 6.3 5.6.9.4 1.6.6 2.1.8.9.3 1.7.3 2.3.2.7-.1 2.2-.9 2.5-1.8.3-.9.3-1.7.2-1.8-.1-.2-.3-.3-.7-.5Z"/>
      </svg>
    </a>
  );
}
