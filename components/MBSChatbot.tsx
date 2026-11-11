"use client";

import { useEffect, useRef, useState } from "react";

type Message = {
  id: number;
  role: "bot" | "user";
  text: string;
  time?: string;
};

type Quotation = {
  name: string;
  phone: string;
  location: string;
  projectType: string;
  projectSize: string;
};

const whatsappNumber = "918147826165";
const quickQuestions = [
  "Our Services",
  "PEB Buildings",
  "Roofing Solutions",
  "Our Projects",
  "Get a Quotation",
];

const initialQuotation: Quotation = {
  name: "",
  phone: "",
  location: "",
  projectType: "",
  projectSize: "",
};

function getMessageTime() {
  return new Date().toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

function getReply(question: string): string {
  const text = question.toLowerCase();

  if (/quote|quotation|price|cost|estimate/.test(text)) {
    return "We'd be happy to discuss your requirements. Select 'Get a Quotation' to share your project details with our team on WhatsApp.";
  }
  if (/\bpeb\b|pre.engineered/.test(text)) {
    return "We provide pre-engineered building solutions for industrial and commercial requirements. Learn more on our Services page: /services";
  }
  if (text.includes("roof")) {
    return "MBS Constructions offers roofing solutions for industrial and commercial projects. Contact us to discuss your requirements.";
  }
  if (/project|portfolio/.test(text)) {
    return "Explore our work on the Projects page: /projects";
  }
  if (/service|construction|building|warehouse/.test(text)) {
    return "Explore our construction services, including industrial construction, pre-engineered buildings and roofing solutions: /services";
  }
  if (/contact|phone|whatsapp/.test(text)) {
    return "Contact MBS Constructions on WhatsApp at +91 81478 26165 or visit /contact.";
  }
  if (/\b(hello|hi|hey)\b/.test(text)) {
    return "Hello! 👋 Ask about our services, projects or quotations, or choose a quick option below.";
  }
  return "Thanks for reaching out! I can help with general information about our services and projects. For specific requirements, please contact our team on WhatsApp.";
}

export default function MBSChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [showQuotation, setShowQuotation] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      role: "bot",
      text: "Welcome to MBS Constructions! 👋 How can we help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [quotation, setQuotation] = useState<Quotation>(initialQuotation);
  const [pendingReplies, setPendingReplies] = useState(0);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const nextIdRef = useRef(1);
  const timersRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    return () => timersRef.current.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    if (isOpen && !showQuotation) {
      messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [messages, pendingReplies, isOpen, showQuotation]);

  function sendMessage(question: string) {
    const cleaned = question.trim();
    if (!cleaned) return;
    setInput("");

    if (/^(get a quotation|request a quotation)$/i.test(cleaned)) {
      setShowQuotation(true);
      return;
    }

    const userMessage: Message = {
      id: nextIdRef.current++,
      role: "user",
      text: cleaned,
      time: getMessageTime(),
    };
    setMessages((previous) => [...previous, userMessage]);
    setPendingReplies((count) => count + 1);

    const timer = setTimeout(() => {
      const botMessage: Message = {
        id: nextIdRef.current++,
        role: "bot",
        text: getReply(cleaned),
        time: getMessageTime(),
      };
      setMessages((previous) => [...previous, botMessage]);
      setPendingReplies((count) => Math.max(0, count - 1));
      timersRef.current = timersRef.current.filter((item) => item !== timer);
    }, 850);
    timersRef.current.push(timer);
  }

  function updateQuotation(field: keyof Quotation, value: string) {
    setQuotation((previous) => ({ ...previous, [field]: value }));
  }

  function submitQuotation(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = [
      "Hello MBS Constructions,",
      "I would like to request a quotation.",
      "",
      `Name: ${quotation.name.trim()}`,
      `Phone: ${quotation.phone.trim()}`,
      `Project Location: ${quotation.location.trim()}`,
      `Project Type: ${quotation.projectType}`,
      `Approximate Project Size: ${quotation.projectSize.trim() || "Not specified"}`,
    ].join("\n");

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hello MBS Constructions, I would like to enquire about your construction services."
  )}`;

  return (
    <>
      {/* Floating button stays above the existing WhatsApp button. */}
      <button
        type="button"
        onClick={() => setIsOpen((previous) => !previous)}
        aria-label={isOpen ? "Close chatbot" : "Open chatbot"}
        aria-expanded={isOpen}
        aria-controls="mbs-chat-window"
        className="fixed bottom-24 right-5 z-[110] flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-xl transition hover:scale-105 hover:bg-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600 md:bottom-28 md:right-7"
      >
        {isOpen ? (
          <span aria-hidden="true" className="text-3xl">×</span>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7" aria-hidden="true">
            <rect x="3" y="7" width="18" height="13" rx="4" />
            <path d="M12 3v4M9 3h6M8 13h.01M16 13h.01M8 17h8" />
          </svg>
        )}
      </button>

      {isOpen && (
        <section
          id="mbs-chat-window"
          role="dialog"
          aria-label="MBS Constructions virtual assistant"
          className="fixed bottom-44 right-3 z-[110] flex h-[min(540px,calc(100dvh-195px))] min-h-0 w-[calc(100vw-24px)] max-w-[390px] flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white text-gray-900 shadow-2xl sm:right-5 md:bottom-48 md:right-7"
        >
          <header className="flex shrink-0 items-center justify-between bg-red-600 px-4 py-4 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 text-xl" aria-hidden="true">✦</div>
              <div>
                <h2 className="text-sm font-bold sm:text-base">MBS Virtual Assistant</h2>
                <p className="text-xs text-white/85">Automated assistance available</p>
              </div>
            </div>
            <button type="button" onClick={() => setIsOpen(false)} aria-label="Close chat window" className="rounded-full px-2 py-1 text-2xl hover:bg-white/20">×</button>
          </header>

          {showQuotation ? (
            <form onSubmit={submitQuotation} className="flex min-h-0 flex-1 flex-col">
              <div className="min-h-0 flex-1 space-y-3 overflow-y-auto bg-gray-50 p-4">
                <div>
                  <h3 className="text-base font-bold">Request a Quotation</h3>
                  <p className="mt-1 text-xs leading-5 text-gray-600">Fill in your project details. WhatsApp will open with your enquiry ready to send.</p>
                </div>
                <label className="block text-xs font-semibold text-gray-700">Full name
                  <input required maxLength={100} autoComplete="name" value={quotation.name} onChange={(event) => updateQuotation("name", event.target.value)} placeholder="Your full name" className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-3 text-sm font-normal outline-none focus:border-red-500" />
                </label>
                <label className="block text-xs font-semibold text-gray-700">Mobile number
                  <input required type="tel" inputMode="tel" maxLength={20} autoComplete="tel" value={quotation.phone} onChange={(event) => updateQuotation("phone", event.target.value)} placeholder="Your mobile number" className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-3 text-sm font-normal outline-none focus:border-red-500" />
                </label>
                <label className="block text-xs font-semibold text-gray-700">Project location
                  <input required maxLength={120} value={quotation.location} onChange={(event) => updateQuotation("location", event.target.value)} placeholder="City or site location" className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-3 text-sm font-normal outline-none focus:border-red-500" />
                </label>
                <label className="block text-xs font-semibold text-gray-700">Project type
                  <select required value={quotation.projectType} onChange={(event) => updateQuotation("projectType", event.target.value)} className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-3 text-sm font-normal outline-none focus:border-red-500">
                    <option value="">Select project type</option>
                    <option>Industrial Construction</option>
                    <option>Pre-Engineered Building</option>
                    <option>Warehouse Construction</option>
                    <option>Roofing Solutions</option>
                    <option>Commercial Construction</option>
                    <option>Other</option>
                  </select>
                </label>
                <label className="block text-xs font-semibold text-gray-700">Approximate project size (optional)
                  <input maxLength={100} value={quotation.projectSize} onChange={(event) => updateQuotation("projectSize", event.target.value)} placeholder="e.g. 10,000 sq.ft" className="mt-1 w-full rounded-lg border border-gray-300 bg-white p-3 text-sm font-normal outline-none focus:border-red-500" />
                </label>
              </div>
              <div className="shrink-0 space-y-2 border-t border-gray-200 bg-white p-3">
                <button type="submit" className="w-full rounded-lg bg-[#25D366] px-4 py-3 text-sm font-bold text-white hover:bg-[#1ebe5b]">Send Enquiry via WhatsApp</button>
                <button type="button" onClick={() => setShowQuotation(false)} className="w-full rounded-lg px-4 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-100">← Back to Chat</button>
              </div>
            </form>
          ) : (
            <>
              <div className="min-h-0 flex-1 space-y-3 overflow-y-auto bg-gray-50 p-4" aria-live="polite" aria-relevant="additions text">
                {messages.map((message) => (
                  <div key={message.id} className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}>
                    <div className={`max-w-[85%] whitespace-pre-wrap break-words rounded-2xl px-4 py-3 text-sm leading-6 ${message.role === "user" ? "rounded-br-sm bg-red-600 text-white" : "rounded-bl-sm bg-white text-gray-800 shadow-sm"}`}>
                      <p>{message.text}</p>
                      {message.time && <p className="mt-1 text-right text-[10px] opacity-65">{message.time}</p>}
                    </div>
                  </div>
                ))}
                {pendingReplies > 0 && (
                  <div className="flex justify-start" role="status" aria-label="Assistant is preparing a reply">
                    <div className="flex items-center gap-1 rounded-2xl bg-white px-4 py-3 shadow-sm">
                      {[0, 1, 2].map((dot) => (
                        <span key={dot} className="h-2 w-2 animate-bounce rounded-full bg-red-500" style={{ animationDelay: `${dot * 150}ms` }} />
                      ))}
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
              <div className="flex shrink-0 gap-2 overflow-x-auto border-t border-gray-100 bg-white px-3 py-3">
                {quickQuestions.map((question) => (
                  <button key={question} type="button" onClick={() => sendMessage(question)} className="shrink-0 rounded-full border border-red-200 bg-red-50 px-3 py-2 text-xs font-semibold text-red-700 hover:bg-red-100">{question}</button>
                ))}
              </div>
              <form onSubmit={(event) => { event.preventDefault(); sendMessage(input); }} className="flex shrink-0 items-center gap-2 border-t border-gray-200 bg-white p-3">
                <input type="text" value={input} onChange={(event) => setInput(event.target.value)} placeholder="Type your message..." aria-label="Your message" maxLength={500} className="min-w-0 flex-1 rounded-full border border-gray-200 px-4 py-3 text-sm outline-none focus:border-red-500" />
                <button type="submit" disabled={!input.trim()} aria-label="Send message" className="rounded-full bg-red-600 px-4 py-3 text-sm font-bold text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50">Send</button>
              </form>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="shrink-0 bg-[#25D366] px-4 py-3 text-center text-sm font-bold text-white hover:bg-[#1ebe5b]">Continue on WhatsApp</a>
            </>
          )}
        </section>
      )}
    </>
  );
}
