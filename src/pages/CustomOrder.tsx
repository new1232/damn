import { useState, FormEvent } from "react";
import { ArrowRight } from "lucide-react";

export default function CustomOrder() {
  const [formData, setFormData] = useState({
    name: "",
    shoeModel: "",
    idea: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const text = `Yo DAMN CUSTOMS! I am ${formData.name}. I want a custom on ${formData.shoeModel}. My idea is: ${formData.idea}`;
    const whatsappUrl = `https://wa.me/9770000000000?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-primary min-h-screen pt-12 pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-6xl md:text-8xl font-display leading-none mb-6 text-center">BUILD YOUR <span className="text-cta">GRAIL</span></h1>
        <p className="font-sans text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
          Every pair is a 1-of-1 wearable art piece. Fill out the details below and we'll take this conversation to WhatsApp.
        </p>

        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 border-2 border-black shadow-[8px_8px_0_0_#000] relative">
          <div className="absolute -top-6 -right-6 w-12 h-12 bg-cta rounded-full animate-bounce"></div>
          
          <div className="space-y-8">
            <div>
              <label htmlFor="name" className="block font-display text-2xl mb-2">YOUR NAME</label>
              <input 
                type="text" 
                id="name"
                required
                className="w-full bg-secondary border border-gray-300 p-4 font-sans focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div>
              <label htmlFor="shoeModel" className="block font-display text-2xl mb-2">BASE SNEAKER MODEL</label>
              <input 
                type="text" 
                id="shoeModel"
                required
                className="w-full bg-secondary border border-gray-300 p-4 font-sans focus:outline-none focus:border-black focus:ring-1 focus:ring-black"
                placeholder="Air Force 1, Jordan 1 Low, etc."
                value={formData.shoeModel}
                onChange={(e) => setFormData({...formData, shoeModel: e.target.value})}
              />
              <p className="text-sm font-sans text-gray-500 mt-2">*Note: We can supply the base shoe or you can send us yours.</p>
            </div>

            <div>
              <label htmlFor="idea" className="block font-display text-2xl mb-2">THE VISION (BE DETAILED)</label>
              <textarea 
                id="idea"
                required
                rows={5}
                className="w-full bg-secondary border border-gray-300 p-4 font-sans focus:outline-none focus:border-black focus:ring-1 focus:ring-black resize-none"
                placeholder="Describe your theme, colors, characters, or specific vibe..."
                value={formData.idea}
                onChange={(e) => setFormData({...formData, idea: e.target.value})}
              ></textarea>
            </div>

            <button 
              type="submit"
              className="w-full bg-black text-white font-display text-3xl py-6 hover:bg-cta transition-colors flex items-center justify-center group"
            >
              CONTINUE TO WHATSAPP 
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" size={28} />
            </button>
          </div>
        </form>

        <div className="mt-16 text-center font-sans text-gray-500 max-w-lg mx-auto">
          <p>By proceeding, you understand that all prices are quoted on request and depend on the complexity of the art.</p>
        </div>
      </div>
    </div>
  );
}
