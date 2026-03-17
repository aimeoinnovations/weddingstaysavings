import { motion } from "framer-motion";
import { Target, Eye, Users, Award, Heart, Handshake } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import aboutImg from "@/assets/about-hotel.jpg";

const values = [
  { icon: Target, title: "Transparency", desc: "We work only on verified hotel quotes. Our negotiations are benchmarked, and you see every number." },
  { icon: Heart, title: "Family First", desc: "We understand the emotional weight of a wedding. We treat every booking like it's our own family's celebration." },
  { icon: Handshake, title: "Trust", desc: "No hidden fees, no upselling. If we can't save you money, you pay absolutely nothing." },
  { icon: Award, title: "Expertise", desc: "Deep hotel industry relationships built over years of B2B contracting and volume-based negotiations." },
  { icon: Users, title: "Dedicated Support", desc: "From first call to final checkout — continuous follow-ups and virtual assistance throughout your journey." },
  { icon: Eye, title: "Specialization", desc: "We do one thing and we do it exceptionally well — wedding hotel accommodation and banquet F&B packages." },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-20 md:py-28 bg-hero-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <span className="inline-block px-4 py-1.5 rounded-full bg-gold/10 text-gold-dark text-xs font-body font-semibold uppercase tracking-wider mb-4">
                About Shaadistays
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight">
                The Wedding Hotel{" "}
                <span className="text-gradient-gold">Specialists</span>
              </h1>
              <p className="mt-6 text-muted-foreground font-body text-lg leading-relaxed">
                Shaadistays is India's specialist wedding hospitality consultant, focused exclusively on reducing hotel accommodation costs for wedding families through smart contracting and centralized booking management.
              </p>
              <p className="mt-4 text-muted-foreground font-body leading-relaxed">
                We negotiate commercial terms — rooms and banquet F&B packages — at 4★/5★ hotels across India and abroad. With contracts spanning over 2,500 wedding hotels in India and 600+ internationally, we leverage B2B rates that individual families simply cannot access.
              </p>
              <p className="mt-4 text-muted-foreground font-body leading-relaxed">
                Our model is simple: if we save you money, we charge a small success fee. If we can't beat your existing quote, you pay nothing. Event execution remains with your hotel and planner — we optimize the commercial side.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-elevated"
            >
              <img src={aboutImg} alt="Luxury hotel interior" className="w-full h-[400px] object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Values"
            title="What Drives Us"
            subtitle="Every negotiation, every follow-up, every saved rupee — driven by these core principles."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                  <v.icon size={24} className="text-gold-dark" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">{v.title}</h3>
                <p className="mt-2 text-muted-foreground font-body text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guardrails */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="How We Work"
            title="Our Commitments to You"
            subtitle="Clear boundaries, complete transparency."
          />
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              "We negotiate and structure commercial terms. Event execution remains fully with the hotel & your planner.",
              "We benchmark our negotiations strictly against official hotel quotes so we can confidently guarantee savings.",
              "We work only on verified hotel quotes — no guesswork, no inflated baselines.",
              "Negotiated rates are valid for 48 hours to ensure you get the freshest deal.",
              "Once we start, hotel coordination is routed through us for a seamless experience.",
              "If savings are marginal, we'll tell you upfront and won't proceed.",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-3 items-start p-4 bg-card rounded-xl border border-border"
              >
                <span className="mt-1 w-2 h-2 rounded-full bg-gold shrink-0" />
                <p className="font-body text-sm text-foreground leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
