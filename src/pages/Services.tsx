import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Hotel, UtensilsCrossed, MapPin, Headphones, Search, ArrowRight, CheckCircle2 } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    icon: Hotel,
    title: "Wedding Room Block Booking",
    desc: "Bulk booking of hotel rooms for your wedding guests at negotiated B2B rates. Whether it's 10 rooms or 200+, we contract rates that are significantly below what hotels quote directly to families.",
    features: ["Pre-contracted rates at 2,500+ hotels", "Bulk discount negotiations", "Flexible cancellation terms", "Room allocation management"],
  },
  {
    icon: UtensilsCrossed,
    title: "Banquet & F&B Packages",
    desc: "We optimize banquet meal and catering package pricing. Whether it's a Sangeet dinner for 200 or a reception for 1,000, we negotiate every line item of the F&B quote.",
    features: ["Per-plate cost optimization", "Menu customization support", "Minimum guarantee negotiations", "Beverage package deals"],
  },
  {
    icon: MapPin,
    title: "Destination Wedding Booking",
    desc: "Planning a destination wedding? We handle the entire hotel commercial package — rooms, banquets, and special requests — across India's best wedding destinations and 600+ hotels abroad.",
    features: ["Rajasthan, Goa, Kerala & more", "International destinations", "Complete property buyouts", "Multi-day package deals"],
  },
  {
    icon: Search,
    title: "Hotel Contracting as a Service",
    desc: "Don't have a hotel in mind? We recommend properties based on your budget, guest count, location, and requirements — then negotiate the best possible deal.",
    features: ["Curated property shortlists", "Budget-aligned recommendations", "Site visit coordination", "Comparative quote analysis"],
  },
  {
    icon: Headphones,
    title: "Booking Coordination & Support",
    desc: "From initial inquiry to final checkout — we manage all hotel communication, follow-ups, and booking confirmations so you can focus on your celebration.",
    features: ["Dedicated booking coordinator", "Regular status updates", "Guest list management", "Day-of hotel liaison"],
  },
];

const Services = () => {
  return (
    <Layout>
      <section className="py-20 md:py-28 bg-hero-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Services"
            title="Everything Your Wedding Needs from Hotels"
            subtitle="We handle the commercial side of your wedding hotel arrangements — rooms, banquets, and coordination — so you save money and time."
          />
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
              >
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                    <svc.icon size={28} className="text-gold-dark" />
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">{svc.title}</h3>
                  <p className="mt-4 text-muted-foreground font-body leading-relaxed">{svc.desc}</p>
                  <ul className="mt-6 space-y-3">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-center gap-3 font-body text-sm text-foreground">
                        <CheckCircle2 size={16} className="text-gold shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-card rounded-2xl border border-border p-8 flex items-center justify-center min-h-[250px] ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                  <svc.icon size={80} className="text-gold/20" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 bg-gradient-wine text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold">Ready to Save on Your Wedding Hotels?</h2>
          <p className="mt-4 font-body text-primary-foreground/80 text-lg max-w-xl mx-auto">
            Share your hotel quote and let us show you how much you can save.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 mt-8 bg-gold text-accent-foreground px-8 py-4 rounded-lg font-body font-semibold text-lg hover:opacity-90 transition-opacity"
          >
            Get Your Free Quote <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
