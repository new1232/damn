import { Link } from "react-router-dom";
import { ArrowLeft, Filter } from "lucide-react";

export default function Shop() {
  const whatsappUrl = "https://wa.me/9770000000000?text=Yo%20DAMN%20CUSTOMS!%20I%20saw%20a%20pair%20in%20the%20shop%20and%20want%20a%20quote.";

  return (
    <div className="bg-primary min-h-screen pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-black pb-6 gap-6">
          <div>
            <h1 className="text-6xl md:text-8xl font-display leading-none">ALL <span className="text-gray-400">KICKS</span></h1>
            <p className="font-sans text-gray-500 mt-2">Browse past customs for inspiration. Everything is made-to-order.</p>
          </div>
          <div className="flex gap-4">
            <button className="flex items-center font-display text-xl text-black border border-black px-4 py-2 hover:bg-black hover:text-white transition-colors">
              <Filter className="mr-2" size={20} />
              FILTER
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-12">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="group flex flex-col">
              <div className="aspect-square bg-secondary mb-4 overflow-hidden relative cursor-pointer">
                <img 
                  src="https://placehold.co/600x600/000000/FFFFFF/png?text=DAMN+CUSTOMS" 
                  alt="Custom Sneaker" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-black text-white text-xs font-display px-2 py-1 tracking-wider z-10">
                  {i % 3 === 0 ? 'ANIME' : i % 2 === 0 ? 'STREET' : 'MINIMAL'}
                </div>
              </div>
              <h3 className="font-display text-3xl mb-1 cursor-pointer hover:text-cta transition-colors">PROJECT #{100 + i + 1}</h3>
              <p className="font-sans text-sm text-gray-500 font-medium mb-4">Quoted on Request</p>
              
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto block w-full text-center bg-black text-white font-display text-xl py-3 hover:bg-cta transition-colors"
              >
                REQUEST SIMILAR
              </a>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-20 text-center">
          <button className="font-display text-2xl border-b-2 border-black pb-1 hover:text-cta hover:border-cta transition-all">
            LOAD MORE HEAT
          </button>
        </div>
      </div>
    </div>
  );
}
