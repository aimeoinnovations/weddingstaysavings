import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const faqs = [
  {
    q: "What exactly does Shaadistays do?",
    a: "We are a wedding hospitality consultant specializing in negotiating better hotel rates for wedding guests. We handle room block bookings and banquet F&B package negotiations at 4★/5★ hotels across India and abroad. Think of us as your hotel commercial negotiation team.",
  },
  {
    q: "How do you guarantee savings?",
    a: "We benchmark our negotiations strictly against official hotel quotes that you provide. Our extensive network of pre-contracted rates with 2,500+ hotels allows us to secure B2B pricing that individual families cannot access. If we can't beat your existing quote, you pay nothing.",
  },
  {
    q: "What's the typical savings range?",
    a: "We typically reduce wedding hotel room quotes by 10–40%, depending on the hotel, dates, season, and inventory availability. For destination weddings with larger room blocks, savings tend to be on the higher end.",
  },
  {
    q: "How does your pricing work?",
    a: "It's 100% success-based. For rooms only or banquet only, we charge a 10% success fee. For combined rooms and banquet bookings, the fee drops to 7% of total booked value. If we don't save you money, you pay absolutely nothing.",
  },
  {
    q: "Do I need to have a hotel quote already?",
    a: "Yes, we work on verified hotel quotes. You should have already selected your hotel and received an official quote. This allows us to benchmark our negotiation and guarantee genuine savings. If you need help selecting a hotel, we can recommend properties too.",
  },
  {
    q: "How long are negotiated rates valid?",
    a: "Negotiated rates are valid for 48 hours. This ensures you get the freshest pricing based on current inventory and demand. We recommend being decision-ready when we present our rates.",
  },
  {
    q: "Do you handle the wedding event itself?",
    a: "No. We negotiate and structure commercial terms only — rooms and banquet pricing. Event execution, décor, planning, and coordination remain fully with the hotel and your wedding planner. We focus exclusively on saving you money on the hotel side.",
  },
  {
    q: "What happens after I share my quote?",
    a: "Once we start working on your booking, all hotel coordination is routed through us. We negotiate, present the better rate, and if you accept, we handle the booking process including follow-ups and confirmations until everything is finalized.",
  },
  {
    q: "Can you help with hotels not in your network?",
    a: "Absolutely! While we have contracts with 2,500+ hotels in India and 600+ abroad, we have established negotiation channels with most major hotel chains. Feel free to request any hotel — we'll negotiate on your behalf.",
  },
  {
    q: "What if the savings are very small?",
    a: "If savings are marginal, we'll tell you upfront and won't proceed. We believe in transparency — we only take on bookings where we can make a meaningful difference to your budget.",
  },
];

const FAQItem = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="border border-border rounded-xl overflow-hidden"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-secondary/50 transition-colors"
      >
        <span className="font-display font-semibold text-foreground pr-4">{q}</span>
        <ChevronDown size={20} className={`text-muted-foreground shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 font-body text-sm text-muted-foreground leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FAQs = () => {
  return (
    <Layout>
      <section className="py-20 md:py-28 bg-hero-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="FAQs"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about how Shaadistays works."
          />
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <div className="space-y-3">
            {faqs.map((faq) => (
              <FAQItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-gradient-wine text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold">Still Have Questions?</h2>
          <p className="mt-4 font-body text-primary-foreground/80 text-lg">
            Reach out to us and we'll be happy to help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-8 bg-gold text-accent-foreground px-8 py-4 rounded-lg font-body font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            Contact Us <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default FAQs;
