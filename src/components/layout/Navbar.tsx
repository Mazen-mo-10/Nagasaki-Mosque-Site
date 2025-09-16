import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Moon, Sun, Clock, Menu, X, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import PrayerTimesModal from "@/components/features/PrayerTimesModal";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPrayerModalOpen, setIsPrayerModalOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const location = useLocation();

  // Navigation links
  const navLinks = [
    { path: "/Nagasaki-Mosque-Site", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/prayer-times", label: "Prayer Times" },
    { path: "/events", label: "Events" },
    { path: "/gallery", label: "Gallery" },
    { path: "/boycott", label: "Boycott" },
    { path: "/donations", label: "Donations" },
    { path: "/resources", label: "Resources" },
    { path: "/contact", label: "Contact" },
  ];

  const isActiveLink = (path: string) => location.pathname === path;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-islamic">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Brand */}
            <Link
              to="/Nagasaki-Mosque-Site"
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

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-smooth ${
                    isActiveLink(link.path)
                      ? "bg-primary text-primary-foreground shadow-islamic"
                      : "text-foreground hover:bg-muted hover:text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-2">
              {/* Prayer Times Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsPrayerModalOpen(true)}
                className="hidden sm:flex items-center space-x-2 bg-primary/10 border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
              >
                <Clock className="h-4 w-4" />
                <span>Prayer Times</span>
              </Button>

              {/* Theme Toggle */}
              <Button
                variant="outline"
                size="sm"
                onClick={toggleTheme}
                className="hover:bg-secondary hover:text-secondary-foreground transition-smooth"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button>

              {/* Mobile Menu Button */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden"
              >
                {isMenuOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border animate-fade-in">
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-smooth ${
                      isActiveLink(link.path)
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-muted hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}

                {/* Mobile Prayer Times Button */}
                <Button
                  variant="outline"
                  onClick={() => {
                    setIsPrayerModalOpen(true);
                    setIsMenuOpen(false);
                  }}
                  className="justify-start mt-2"
                >
                  <Clock className="h-4 w-4 mr-2" />
                  Prayer Times
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Prayer Times Modal */}
      <PrayerTimesModal
        isOpen={isPrayerModalOpen}
        onClose={() => setIsPrayerModalOpen(false)}
      />
    </>
  );
};

export default Navbar;
