import { Link, useLocation } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { cn } from "../lib/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Custom Order", path: "/custom-order" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* Announcement Bar */}
      <div className="bg-black text-white text-xs font-bold font-sans py-2 text-center overflow-hidden">
        <div className="animate-[marquee_20s_linear_infinite] whitespace-nowrap">
          PRE-ORDER ONLY. DM TO DISCUSS YOUR OWN DAMN PAIR. 🧿 PREMIUM CUSTOM KICKS NOW IN NEPAL 🇳🇵
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 uppercase tracking-widest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Mobile Menu Button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-black hover:text-cta focus:outline-none transition-colors"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>

            {/* Logo */}
            <div className="flex-shrink-0 flex items-center justify-center md:justify-start w-full md:w-auto">
              <Link to="/" className="flex flex-col items-center justify-center -space-y-2 group">
                <span className="font-display text-4xl leading-none font-bold text-black group-hover:text-cta transition-colors">
                  DAMNCUSTOMS
                </span>
                <span className="font-display text-4xl leading-none font-bold text-black group-hover:text-cta transition-colors">
                  DAMNCUSTOMS<span className="text-xl">.NP</span>
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex ml-10 items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    "font-display text-xl transition-colors hover:text-cta",
                    location.pathname === link.path ? "text-cta" : "text-black"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4 md:ml-6 absolute md:relative right-4">
              <button className="text-black hover:text-cta transition-colors hidden md:block font-display text-xl">
                Search
              </button>
              <button className="text-black hover:text-cta transition-colors">
                <ShoppingBag size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-b border-gray-100 absolute w-full">
            <div className="px-4 pt-2 pb-6 space-y-1 sm:px-3 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "block px-3 py-3 font-display text-3xl transition-colors",
                    location.pathname === link.path ? "text-cta" : "text-black hover:text-cta"
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
