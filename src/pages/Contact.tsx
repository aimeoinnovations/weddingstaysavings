import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, Instagram, MapPin, MessageCircle } from "lucide-react";
import Layout from "@/components/Layout";
import SectionHeading from "@/components/SectionHeading";

const WHATSAPP_NUMBER = "919999999999";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", hotel: "", rooms: "", date: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Shaadistays! I'm looking for wedding hotel assistance.\n\nName: ${form.name}\nPhone: ${form.phone}\nHotel: ${form.hotel}\nRooms: ${form.rooms}\nDate: ${form.date}\nMessage: ${form.message}`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank");
    setSubmitted(true);
  };

  const contactInfo = [
    { icon: Phone, label: "Call Us", value: "+91 99999 99999", href: "tel:+919999999999" },
    { icon: Mail, label: "Email", value: "hello@shaadistays.com", href: "mailto:hello@shaadistays.com" },
    { icon: Instagram, label: "Instagram", value: "@shaadistays", href: "https://instagram.com/shaadistays" },
    { icon: MapPin, label: "Based In", value: "India — serving nationwide & abroad", href: "#" },
  ];

  return (
    <Layout>
      <section className="py-20 md:py-28 bg-hero-pattern">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Contact"
            title="Let's Save You Money"
            subtitle="Share your hotel quote and wedding details. We'll get back to you within 24 hours with a better rate."
          />
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
            {/* Contact info */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="font-display text-2xl font-bold text-foreground">Get in Touch</h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                Prefer WhatsApp? Most of our clients do! Tap the button below or fill out the form and we'll redirect you.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi Shaadistays! I need help with wedding hotel booking.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[hsl(142,70%,40%)] text-primary-foreground px-6 py-3 rounded-lg font-body font-semibold hover:opacity-90 transition-opacity"
              >
                <MessageCircle size={18} />
                Chat on WhatsApp
              </a>

              <div className="pt-4 space-y-4">
                {contactInfo.map((c) => (
                  <a key={c.label} href={c.href} className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                      <c.icon size={18} className="text-gold-dark" />
                    </div>
                    <div>
                      <p className="font-body text-xs text-muted-foreground">{c.label}</p>
                      <p className="font-body text-sm font-medium text-foreground">{c.value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 rounded-2xl bg-card border border-border text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                    <Send size={28} className="text-gold-dark" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground">We're on it!</h3>
                  <p className="mt-2 font-body text-muted-foreground">
                    Your details have been sent via WhatsApp. Our team will respond within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="p-6 md:p-8 rounded-2xl bg-card border border-border space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-body text-sm font-medium text-foreground mb-1.5">Your Name *</label>
                      <input
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-input bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="Full name"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-sm font-medium text-foreground mb-1.5">Phone *</label>
                      <input
                        required
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-input bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-body text-sm font-medium text-foreground mb-1.5">Email</label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-input bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-body text-sm font-medium text-foreground mb-1.5">Hotel Name</label>
                      <input
                        value={form.hotel}
                        onChange={(e) => setForm({ ...form, hotel: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-input bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="e.g., Taj Palace, Delhi"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-sm font-medium text-foreground mb-1.5">No. of Rooms</label>
                      <input
                        value={form.rooms}
                        onChange={(e) => setForm({ ...form, rooms: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-input bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="e.g., 50"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-body text-sm font-medium text-foreground mb-1.5">Wedding Date</label>
                    <input
                      type="date"
                      value={form.date}
                      onChange={(e) => setForm({ ...form, date: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-input bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm font-medium text-foreground mb-1.5">Additional Details</label>
                    <textarea
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-lg border border-input bg-background font-body text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-wine text-primary-foreground py-3 rounded-xl font-body font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                  >
                    <Send size={16} />
                    Send via WhatsApp
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
