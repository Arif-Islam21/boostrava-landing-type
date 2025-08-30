import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Facebook,
  Youtube,
} from "lucide-react";
import { Button } from "../../components/ui/button";

export const Footer = () => {
  const footerLinks = {
    Platform: [
      "For Advertisers",
      "For Publishers",
      "API Documentation",
      "Integrations",
      "Pricing",
    ],
    Resources: [
      "Case Studies",
      "Blog",
      "Webinars",
      "Documentation",
      "Help Center",
    ],
    Company: ["About Us", "Careers", "Press", "Contact", "Partners"],
    Legal: [
      "Privacy Policy",
      "Terms of Service",
      "Cookie Policy",
      "GDPR Compliance",
      "Security",
    ],
  };

  return (
    <footer className="bg-gradient-hero text-white">
      <div className="container mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">BR</span>
              </div>
              <span className="text-3xl font-bold">Boost RAVA</span>
            </div>
            <p className="text-white/80 text-lg mb-6 leading-relaxed">
              The worlds most advanced programmatic advertising network. Powered
              by machine learning and built for performance.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-white/80">hello@boostrava.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-white/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-white/80">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xl font-bold mb-6">{category}</h4>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-white/70 hover:text-white transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/20 mt-16 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
              <p className="text-white/80 text-lg">
                Get the latest insights on programmatic advertising, industry
                trends, and platform updates.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <Button
                variant="gradient"
                size="lg"
                className="whitespace-nowrap"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Copyright */}
            <div className="text-white/60">
              <p>&copy; 2024 Boost RAVA. All rights reserved.</p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors duration-300"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors duration-300"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-white/60 hover:text-white transition-colors duration-300"
              >
                <Youtube className="w-6 h-6" />
              </a>
            </div>

            {/* Compliance Badges */}
            <div className="flex items-center space-x-4">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2">
                <span className="text-sm font-medium">GDPR Compliant</span>
              </div>
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg px-4 py-2">
                <span className="text-sm font-medium">IAB Certified</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
