import { Link } from "react-router-dom";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import { motion } from "framer-motion";
import { ArrowRight, Star, Instagram } from "lucide-react";

export default function Home() {
  const whatsappUrl = "https://wa.me/9770000000000?text=Yo%20DAMN%20CUSTOMS!%20I%20want%20to%20discuss%20a%20custom%20order.";

  return (
    <div className="bg-primary min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] md:h-[90vh] bg-white flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-100">
          <ReactCompareSlider
            itemOne={<ReactCompareSliderImage src="https://placehold.co/1920x1080/FFFFFF/000000/png?text=BEFORE" alt="Before" />}
            itemTwo={<ReactCompareSliderImage src="https://placehold.co/1920x1080/000000/FFFFFF/png?text=AFTER" alt="After" />}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="relative z-10 text-center px-4 md:px-0 pointer-events-none mix-blend-difference mt-auto mb-24 md:mb-32">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white font-display text-7xl md:text-9xl leading-[0.8] mb-6"
          >
            NOT YOUR <br/> AVERAGE KICKS
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="pointer-events-auto"
          >
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-black font-display text-2xl md:text-3xl px-8 py-4 hover:bg-cta hover:text-white transition-all transform hover:scale-105"
            >
              Get A Quote <ArrowRight className="ml-2" size={24} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Trust Marquee */}
      <section className="py-6 border-y border-black bg-white overflow-hidden">
        <div className="marquee-container">
          <div className="marquee-content animate-[marquee_15s_linear_infinite] items-center text-4xl md:text-5xl font-display font-medium">
            <span>HAND PAINTED</span>
            <span className="text-cta">•</span>
            <span>1 OF 1 CUSTOMS</span>
            <span className="text-cta">•</span>
            <span>PREMIUM QUALITY</span>
            <span className="text-cta">•</span>
            <span>MADE IN NEPAL 🇳🇵</span>
            <span className="text-cta">•</span>
            <span>WORLDWIDE DRIP</span>
            <span className="text-cta">•</span>
          </div>
          <div className="marquee-content animate-[marquee_15s_linear_infinite] items-center text-4xl md:text-5xl font-display font-medium" aria-hidden="true">
            <span>HAND PAINTED</span>
            <span className="text-cta">•</span>
            <span>1 OF 1 CUSTOMS</span>
            <span className="text-cta">•</span>
            <span>PREMIUM QUALITY</span>
            <span className="text-cta">•</span>
            <span>MADE IN NEPAL 🇳🇵</span>
            <span className="text-cta">•</span>
            <span>WORLDWIDE DRIP</span>
            <span className="text-cta">•</span>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <h2 className="text-5xl md:text-7xl font-display leading-none">RECENT<br/><span className="text-gray-400">HEAT</span></h2>
          <Link to="/shop" className="hidden md:inline-flex items-center font-display text-2xl hover:text-cta transition-colors border-b-2 border-black hover:border-cta">
            View All <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <Link to="/shop" key={item} className="group cursor-pointer">
              <div className="aspect-square bg-secondary mb-4 overflow-hidden relative">
                <img 
                  src="https://placehold.co/600x600/000000/FFFFFF/png?text=DAMN+CUSTOMS" 
                  alt="Custom Sneaker" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>
              <h3 className="font-display text-2xl group-hover:text-cta transition-colors">Project #{100 + item}</h3>
              <p className="font-sans text-sm text-gray-500 font-medium">Quoted on Request</p>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link to="/shop" className="inline-flex items-center font-display text-2xl hover:text-cta transition-colors border-b-2 border-black">
            View All <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      {/* Shop by Collection */}
      <section className="py-24 bg-white text-black border-y border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl md:text-7xl font-display leading-none mb-12 text-center">THE <span className="text-gray-400">ARSENAL</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {['Anime Customs', 'Streetwear', 'Minimalist'].map((cat, i) => (
              <div key={i} className="relative h-[400px] md:h-[500px] overflow-hidden group cursor-pointer">
                <img 
                  src="https://placehold.co/600x800/222222/FFFFFF/png?text=DAMN+CUSTOMS" 
                  alt={cat} 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity duration-500"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <h3 className="font-display text-5xl mb-4 group-hover:scale-110 transition-transform duration-500">{cat}</h3>
                  <div className="w-0 h-1 bg-cta group-hover:w-24 transition-all duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-display leading-none mb-4">HOW IT <span className="text-gray-400">WORKS</span></h2>
          <p className="font-sans text-gray-600 max-w-2xl mx-auto">The process of turning your imagination into reality. DM us to start.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-[2px] bg-gray-200 -z-10"></div>
          
          {[
            { step: '01', title: 'THE IDEA', desc: 'Hit us up on WhatsApp with your design idea, references, and sneaker model.' },
            { step: '02', title: 'THE QUOTE', desc: 'We review your request, discuss feasibility, and provide a custom quote & timeline.' },
            { step: '03', title: 'THE CREATION', desc: 'Once confirmed, our artists start painting. We ship the 1-of-1 kicks right to you.' }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center bg-white">
              <div className="w-24 h-24 bg-black text-white font-display text-4xl flex items-center justify-center rounded-full mb-6 border-4 border-white shadow-xl">
                {item.step}
              </div>
              <h3 className="font-display text-3xl mb-3">{item.title}</h3>
              <p className="font-sans text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Custom Order CTA */}
      <section className="py-32 bg-white border-y border-black relative overflow-hidden">
        <div className="absolute -right-20 -bottom-20 opacity-5 pointer-events-none">
          <span className="font-display text-[20rem] leading-none text-black">DAMN</span>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-8xl font-display leading-none mb-6 text-black">READY FOR YOUR<br/>OWN PAIR?</h2>
          <p className="font-sans text-xl text-gray-600 mb-10">Skip the line and DM us directly to get your quote.</p>
          <a fill="true"
             href={whatsappUrl}
             target="_blank"
             rel="noopener noreferrer"
             className="inline-flex items-center justify-center bg-black text-white font-display text-3xl px-12 py-5 hover:bg-gray-800 transition-colors border border-black"
          >
            REQUEST A QUOTE
          </a>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl md:text-7xl font-display leading-none mb-16 text-center">CULT <span className="text-gray-400">FAVORITES</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Suman T.", text: "Absolutely insane details. Looks better than factory releases. Def ordering again." },
            { name: "Rahul S.", text: "The wait was worth it. Custom anime panels came out flawless." },
            { name: "Nisha M.", text: "Premium finish and communication throughout the process was 10/10." }
          ].map((t, i) => (
            <div key={i} className="bg-secondary p-8 border border-gray-100">
              <div className="flex text-cta mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} size={20} fill="currentColor" />)}
              </div>
              <p className="font-sans italic text-gray-700 mb-6">"{t.text}"</p>
              <p className="font-display text-xl">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* IG Feed */}
      <section className="py-12 bg-white border-y border-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center mb-8">
          <h2 className="text-black font-display text-4xl mb-2">FOLLOW THE MADNESS</h2>
          <a href="https://instagram.com/damncustoms.np" target="_blank" rel="noopener noreferrer" className="text-black font-sans font-bold hover:text-gray-500 transition-colors">@damncustoms.np</a>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-2 px-2">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <a key={i} href="https://instagram.com/damncustoms.np" target="_blank" rel="noopener noreferrer" className="relative aspect-square group overflow-hidden">
              <img src="https://placehold.co/400x400/000000/FFFFFF/png?text=DAMN+IG" alt="IG Post" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Instagram className="text-white" size={32} />
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
