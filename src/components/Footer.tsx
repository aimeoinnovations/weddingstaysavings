import { Link } from "react-router-dom";
import { Heart, Instagram, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-2">
            <span className="font-display text-2xl font-bold">
              Shaadi<span className="text-gold">stays</span>
            </span>
            <p className="mt-4 text-primary-foreground/70 font-body text-sm leading-relaxed max-w-md">
              India's specialist wedding hospitality consultant. We negotiate better hotel rates for your wedding guests so you can focus on celebrating.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="https://instagram.com/shaadistays" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                <Instagram size={18} />
              </a>
              <a href="mailto:hello@shaadistays.com" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                <Mail size={18} />
              </a>
              <a href="tel:+919999999999" className="p-2 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors">
                <Phone size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-gold">Quick Links</h4>
            <div className="space-y-3">
              {["About", "Services", "Pricing", "FAQs", "Contact"].map((item) => (
                <Link key={item} to={`/${item.toLowerCase()}`} className="block text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors font-body">
                  {item}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm uppercase tracking-wider mb-4 text-gold">Services</h4>
            <div className="space-y-3 text-sm text-primary-foreground/70 font-body">
              <p>Wedding Room Blocks</p>
              <p>Banquet F&B Packages</p>
              <p>Destination Weddings</p>
              <p>Hotel Contracting</p>
              <p>Booking Coordination</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-primary-foreground/50 font-body">
            © {new Date().getFullYear()} Shaadistays. All rights reserved.
          </p>
          <p className="text-xs text-primary-foreground/50 font-body flex items-center gap-1">
            Made with <Heart size={12} className="text-gold" /> for Indian weddings
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
