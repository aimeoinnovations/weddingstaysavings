import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, ArrowRight } from "lucide-react";

const WHATSAPP_NUMBER = "919999999999";

interface Message {
  from: "bot" | "user";
  text: string;
}

const questions = [
  {
    text: "Hey! 👋 Planning a wedding? I can help you save 10–40% on hotel stays. What are you looking for?",
    options: ["Wedding room blocks", "Banquet & F&B packages", "Destination wedding", "All of the above"],
  },
  {
    text: "Great choice! How many rooms are you looking to book approximately?",
    options: ["10–30 rooms", "30–60 rooms", "60–100 rooms", "100+ rooms"],
  },
  {
    text: "And when is the wedding? 🎉",
    options: ["Within 3 months", "3–6 months", "6–12 months", "Just exploring"],
  },
];

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [showPulse, setShowPulse] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasTriggered) {
        setShowPulse(true);
        setHasTriggered(true);
        // Play a subtle notification sound
        try {
          const ctx = new AudioContext();
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          osc.connect(gain);
          gain.connect(ctx.destination);
          osc.frequency.value = 800;
          osc.type = "sine";
          gain.gain.value = 0.1;
          osc.start();
          gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.3);
          osc.stop(ctx.currentTime + 0.3);
        } catch {}
      }
    }, 10000);
    return () => clearTimeout(timer);
  }, [hasTriggered]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const openChat = () => {
    setIsOpen(true);
    setShowPulse(false);
    if (messages.length === 0) {
      setMessages([{ from: "bot", text: questions[0].text }]);
    }
  };

  const handleOption = (option: string) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);
    setMessages((prev) => [...prev, { from: "user", text: option }]);

    const nextQ = currentQ + 1;
    if (nextQ < questions.length) {
      setTimeout(() => {
        setMessages((prev) => [...prev, { from: "bot", text: questions[nextQ].text }]);
        setCurrentQ(nextQ);
      }, 500);
    } else {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            from: "bot",
            text: "Perfect! Let me connect you with our team on WhatsApp for a personalized quote. Tap below to start chatting! 💬",
          },
        ]);
        setCurrentQ(nextQ);
      }, 500);
    }
  };

  const openWhatsApp = () => {
    const text = `Hi Shaadistays! I'm looking for:\n• Service: ${answers[0] || "N/A"}\n• Rooms: ${answers[1] || "N/A"}\n• Timeline: ${answers[2] || "N/A"}\n\nPlease help me get the best rates!`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
  };

  const isDone = currentQ >= questions.length;

  return (
    <>
      {/* Chat button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            onClick={openChat}
            className="fixed bottom-6 right-6 z-50 bg-gradient-wine text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center shadow-elevated hover:opacity-90 transition-opacity"
          >
            {showPulse && (
              <span className="absolute inset-0 rounded-full bg-wine animate-ping opacity-40" />
            )}
            <MessageCircle size={24} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 w-[350px] max-w-[calc(100vw-48px)] bg-background rounded-2xl shadow-elevated border border-border overflow-hidden flex flex-col"
            style={{ maxHeight: "500px" }}
          >
            {/* Header */}
            <div className="bg-gradient-wine text-primary-foreground p-4 flex items-center justify-between">
              <div>
                <p className="font-display font-semibold text-sm">Shaadistays</p>
                <p className="text-xs opacity-80 font-body">Wedding Hotel Expert</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-primary-foreground/10 rounded-lg transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ minHeight: "200px" }}>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm font-body leading-relaxed ${
                      msg.from === "user"
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-secondary text-secondary-foreground rounded-bl-md"
                    }`}
                  >
                    {msg.text}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Options or WhatsApp CTA */}
            <div className="p-3 border-t border-border">
              {!isDone && questions[currentQ] && (
                <div className="flex flex-wrap gap-2">
                  {questions[currentQ].options.map((opt) => (
                    <button
                      key={opt}
                      onClick={() => handleOption(opt)}
                      className="px-3 py-1.5 rounded-full text-xs font-body font-medium bg-gold/10 text-gold-dark hover:bg-gold/20 border border-gold/20 transition-colors"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              )}
              {isDone && (
                <button
                  onClick={openWhatsApp}
                  className="w-full flex items-center justify-center gap-2 bg-[hsl(142,70%,40%)] text-primary-foreground py-3 rounded-xl font-body font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  <Send size={16} />
                  Continue on WhatsApp
                  <ArrowRight size={16} />
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
