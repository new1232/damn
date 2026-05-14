import { Link } from "react-router-dom";
import { Instagram, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white text-black pt-16 pb-8 border-t border-black font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex flex-col items-start -space-y-1 group mb-4">
              <span className="font-display text-3xl leading-none font-bold text-black group-hover:text-gray-500 transition-colors">
                DAMNCUSTOMS
              </span>
              <span className="font-display text-3xl leading-none font-bold text-black group-hover:text-gray-500 transition-colors">
                DAMNCUSTOMS<span className="text-sm">.NP</span>
              </span>
            </Link>
            <p className="text-gray-600 text-sm mb-6">
              Premium Custom Kicks, Now in Nepal 🇳🇵<br/>
              Hand-painted one-of-a-kind custom sneakers made in Kathmandu, Nepal.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/damncustoms.np" target="_blank" rel="noopener noreferrer" className="text-black hover:text-gray-500 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="mailto:contact@damncustoms.np" className="text-black hover:text-gray-500 transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="font-display text-2xl mb-4 tracking-wide text-black">Shop</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><Link to="/shop" className="hover:text-black transition-colors">All Sneakers</Link></li>
              <li><Link to="/custom-order" className="hover:text-black transition-colors">Custom Order</Link></li>
              <li><Link to="/shop" className="hover:text-black transition-colors">Collections</Link></li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-display text-2xl mb-4 tracking-wide text-black">Info</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li><Link to="/about" className="hover:text-black transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-black transition-colors">Contact</Link></li>
              <li><a href="#" className="hover:text-black transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-black transition-colors">FAQs</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display text-2xl mb-4 tracking-wide text-black">Join The Cult</h4>
            <p className="text-gray-600 text-sm mb-4">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border border-black px-4 py-2 text-black placeholder-gray-500 focus:outline-none focus:border-black transition-colors font-sans text-sm"
              />
              <button
                type="submit"
                className="bg-black text-white font-display font-bold text-xl px-4 py-2 hover:bg-gray-800 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-black mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
          <p>&copy; {new Date().getFullYear()} DAMN CUSTOMS NP. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
