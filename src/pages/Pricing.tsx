import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, Shield, Info } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const plans = [
  {
    title: "Rooms Only",
    fee: "10%",
    desc: "Success fee built into the net discounted price",
    features: [
      "Bulk room rate negotiation",
      "Pre-contracted hotel rates",
      "Booking coordination",
      "Guest room allocation",
      "Regular follow-ups",
    ],
    popular: false,
  },
  {
    title: "Rooms + Banquet",
    fee: "7%",
    desc: "Of total booked value — best value for comprehensive bookings",
    features: [
      "Everything in Rooms Only",
      "Banquet F&B negotiations",
      "Per-plate cost optimization",
      "Menu & beverage deals",
      "Complete hotel liaison",
      "Priority support",
    ],
    popular: true,
  },
  {
    title: "Banquet Only",
    fee: "10%",
    desc: "Success fee on banquet savings",
    features: [
      "F&B package negotiation",
      "Menu optimization",
      "Minimum guarantee deals",
      "Beverage package rates",
      "Coordination support",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <Layout>
      <section className="py-20 md:py-28 bg-hero-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Pricing"
            title="No Savings, No Fee"
            subtitle="Our pricing is 100% success-based. We charge only when we save you money. If we can't beat your hotel quote, you pay nothing."
          />
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`rounded-2xl p-6 md:p-8 border flex flex-col ${
                  plan.popular
                    ? "border-gold bg-card shadow-gold relative"
                    : "border-border bg-card"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gold text-accent-foreground text-xs font-body font-semibold">
                    Most Popular
                  </span>
                )}
                <h3 className="font-display text-xl font-bold text-foreground">{plan.title}</h3>
                <div className="mt-4">
                  <span className="font-display text-5xl font-bold text-gold-dark">{plan.fee}</span>
                  <span className="text-muted-foreground font-body text-sm ml-1">success fee</span>
                </div>
                <p className="mt-2 text-muted-foreground font-body text-sm">{plan.desc}</p>
                <ul className="mt-6 space-y-3 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 font-body text-sm text-foreground">
                      <CheckCircle2 size={16} className="text-gold shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-8 block text-center py-3 rounded-xl font-body font-semibold text-sm transition-opacity hover:opacity-90 ${
                    plan.popular
                      ? "bg-gradient-wine text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>

          {/* How it works */}
          <div className="mt-16 max-w-3xl mx-auto">
            <div className="p-6 rounded-2xl bg-gold/5 border border-gold/20">
              <div className="flex items-start gap-3">
                <Info size={20} className="text-gold-dark shrink-0 mt-1" />
                <div>
                  <h4 className="font-display font-semibold text-foreground">How the success fee works</h4>
                  <p className="mt-2 font-body text-sm text-muted-foreground leading-relaxed">
                    We anchor our negotiation against your verified hotel quote. If the hotel quoted you ₹10,000/night and we get it down to ₹7,000/night, you save ₹3,000/night. Our 10% fee is calculated on the total booking value at the discounted rate — not on the savings. The fee is built into the final price you pay, so there are no surprises.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-4 p-6 rounded-2xl bg-card border border-border">
              <div className="flex items-start gap-3">
                <Shield size={20} className="text-gold-dark shrink-0 mt-1" />
                <div>
                  <h4 className="font-display font-semibold text-foreground">Zero-risk guarantee</h4>
                  <p className="mt-2 font-body text-sm text-muted-foreground leading-relaxed">
                    If we cannot secure a rate lower than what you've already been quoted by the hotel, you pay us absolutely nothing. Based on seasonality and city, we typically save 10–40%. If savings are marginal, we'll tell you upfront and won't proceed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
