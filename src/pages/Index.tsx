import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Hotel, Star, Shield, BadgePercent, Users, MapPin, CheckCircle, Clock, ThumbsUp, Handshake } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/hero-wedding.jpg";

const stats = [
  { value: "400+", label: "Happy Customers" },
  { value: "₹12.5 Cr+", label: "Total Savings Delivered" },
  { value: "2,500+", label: "Hotels in India" },
  { value: "600+", label: "Hotels Abroad" },
];

const services = [
  { icon: Hotel, title: "Room Block Booking", desc: "Bulk wedding room reservations at negotiated B2B rates across 4/5-star hotels." },
  { icon: Star, title: "Banquet & F&B Packages", desc: "Optimized commercial terms for wedding banquet meals and catering packages." },
  { icon: MapPin, title: "Destination Weddings", desc: "Complete hotel contracting for destination weddings across India and abroad." },
  { icon: Shield, title: "Guaranteed Savings", desc: "We benchmark against your hotel quote. No savings, no fee — simple as that." },
  { icon: Users, title: "Booking Coordination", desc: "End-to-end coordination with hotels until every room and package is confirmed." },
  { icon: BadgePercent, title: "Success-Based Pricing", desc: "Pay only 10% of what we save you. We earn only when you save." },
];

const howItWorks = [
  { step: "01", title: "Share Your Quote", desc: "Send us the hotel quote you've received for wedding rooms or banquets." },
  { step: "02", title: "We Negotiate", desc: "We leverage our contracts with 2,500+ hotels to get you a significantly lower rate." },
  { step: "03", title: "You Save", desc: "Accept the lower rate, save 10–40%, and pay a small success fee. That's it." },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-hero-pattern">
        <div className="absolute inset-0 z-0">
          <img src={heroImg} alt="Luxury wedding venue" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/60 to-foreground/30" />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-1.5 rounded-full bg-gold/20 text-gold text-xs font-body font-semibold uppercase tracking-wider mb-6"
            >
              Wedding Hospitality Consultant
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight"
            >
              Save 10–40% on Your{" "}
              <span className="text-gold">Wedding Hotel</span> Costs
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-primary-foreground/80 font-body text-lg leading-relaxed max-w-xl"
            >
              India's specialist wedding hospitality consultant. We negotiate better rates on 4★/5★ hotel rooms and banquet packages so your celebrations cost less.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gold text-accent-foreground px-6 py-3 rounded-lg font-body font-semibold hover:opacity-90 transition-opacity"
              >
                Get Your Free Quote <ArrowRight size={18} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 border border-primary-foreground/30 text-primary-foreground px-6 py-3 rounded-lg font-body font-semibold hover:bg-primary-foreground/10 transition-colors"
              >
                How It Works
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <p className="font-display text-3xl md:text-4xl font-bold text-gold">{stat.value}</p>
                <p className="mt-1 text-primary-foreground/70 font-body text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="What We Do"
            title="Wedding Hotel Solutions"
            subtitle="From room blocks to banquet packages — we handle the hotel side of your wedding so you save big."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:shadow-elevated transition-shadow group"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <svc.icon size={24} className="text-gold-dark" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">{svc.title}</h3>
                <p className="mt-2 text-muted-foreground font-body text-sm leading-relaxed">{svc.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Simple Process"
            title="How Shaadistays Works"
            subtitle="Three easy steps to significantly lower hotel costs for your wedding."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {howItWorks.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="relative text-center"
              >
                <span className="font-display text-6xl font-bold text-gold/20">{step.step}</span>
                <h3 className="mt-2 font-display text-xl font-semibold text-foreground">{step.title}</h3>
                <p className="mt-3 text-muted-foreground font-body text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-wine text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Already Have a Hotel Quote?
            </h2>
            <p className="mt-4 text-primary-foreground/80 font-body text-lg max-w-xl mx-auto">
              Share it with us and we'll beat it — guaranteed. No savings, no fee.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-8 bg-gold text-accent-foreground px-8 py-4 rounded-lg font-body font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              Get Started <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
