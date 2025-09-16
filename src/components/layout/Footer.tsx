/**
 * Footer Component for Nagasaki Mosque
 * Contains contact information, quick links, and Islamic elements
 */

import { Building2, MapPin, Phone, Mail, Clock, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground mt-auto">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Mosque Information */}
          <div className="space-y-4">
            <Link
              to="/"
              className="flex items-center space-x-3 transition-smooth hover:scale-105"
            >
              <div className="bg-gradient-islamic p-2 rounded-lg shadow-gold flex items-center justify-center">
                <img
                  src="https://github.com/Mazen-mo-10/imgs/blob/main/logo.png?raw=true"
                  alt="Nagasaki Mosque Logo"
                  className="h-8 w-8 object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-foreground">
                  Nagasaki Mosque
                </span>
                <span className="text-xs text-muted-foreground">
                  長崎モスク
                </span>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Serving the Muslim community in Nagasaki, Japan with Islamic
              guidance, community support, and spiritual enrichment.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-secondary">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link
                to="/about"
                className="text-sm hover:text-secondary transition-smooth"
              >
                About Us
              </Link>
              <Link
                to="/prayer-times"
                className="text-sm hover:text-secondary transition-smooth"
              >
                Prayer Times
              </Link>
              <Link
                to="/events"
                className="text-sm hover:text-secondary transition-smooth"
              >
                Events & Programs
              </Link>
              <Link
                to="/resources"
                className="text-sm hover:text-secondary transition-smooth"
              >
                Islamic Resources
              </Link>
              <Link
                to="/contact"
                className="text-sm hover:text-secondary transition-smooth"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-secondary">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-secondary mt-0.5" />
                <div>
                  <p className="text-sm">Nagasaki City</p>
                  <p className="text-sm text-primary-foreground/80">
                    Nagasaki Prefecture, Japan
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-secondary" />
                <p className="text-sm">+(81) 070-8338-4137</p>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-secondary" />
                <p className="text-sm">info@nagasakimosque.jp</p>
              </div>
            </div>
          </div>

          {/* Prayer Times Summary */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg text-secondary">
              Today's Prayers
            </h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <span>Fajr</span>
                <span className="text-secondary">5:30 AM</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span>Dhuhr</span>
                <span className="text-secondary">12:15 PM</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span>Asr</span>
                <span className="text-secondary">3:45 PM</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span>Maghrib</span>
                <span className="text-secondary">6:20 PM</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span>Isha</span>
                <span className="text-secondary">8:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-sm text-primary-foreground/80">
              <span>© {currentYear} Nagasaki Mosque. All rights reserved.</span>
            </div>

            {/* Islamic Blessing */}
            <div className="flex items-center space-x-2 text-sm">
              <Heart className="h-4 w-4 text-secondary" />
              <span className="text-primary-foreground/80">
                Built with love for the Muslim community
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
