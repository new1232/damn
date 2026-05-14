import { Instagram, Mail, MapPin } from "lucide-react";

export default function Contact() {
  const whatsappUrl = "https://wa.me/9770000000000?text=Yo%20DAMN%20CUSTOMS!%20I%20have%20a%20question.";

  return (
    <div className="bg-primary min-h-screen pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-display leading-none mb-6">HOLLA AT <span className="text-cta">US</span></h1>
          <p className="font-sans text-xl text-gray-600 max-w-2xl mx-auto">
            Got questions about pricing, shipping, or looking to collaborate? Drop us a line.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div className="space-y-12">
            <div>
              <h2 className="font-display text-4xl mb-6">GET IN TOUCH</h2>
              <div className="space-y-6">
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center group">
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center mr-4 group-hover:bg-cta transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                  </div>
                  <div>
                    <h3 className="font-display text-xl">WhatsApp</h3>
                    <p className="font-sans text-gray-500">Fastest response time.</p>
                  </div>
                </a>
                
                <a href="https://instagram.com/damncustoms.np" target="_blank" rel="noopener noreferrer" className="flex items-center group">
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center mr-4 group-hover:bg-cta transition-colors">
                    <Instagram />
                  </div>
                  <div>
                    <h3 className="font-display text-xl">Instagram</h3>
                    <p className="font-sans text-gray-500">@damncustoms.np</p>
                  </div>
                </a>

                <a href="mailto:contact@damncustoms.np" className="flex items-center group">
                  <div className="w-12 h-12 bg-black text-white flex items-center justify-center mr-4 group-hover:bg-cta transition-colors">
                    <Mail />
                  </div>
                  <div>
                    <h3 className="font-display text-xl">Email</h3>
                    <p className="font-sans text-gray-500">contact@damncustoms.np</p>
                  </div>
                </a>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 text-black flex items-center justify-center mr-4">
                    <MapPin />
                  </div>
                  <div>
                    <h3 className="font-display text-xl">Location</h3>
                    <p className="font-sans text-gray-500">Kathmandu, Nepal 🇳🇵</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-8 bg-secondary border border-gray-100">
              <h3 className="font-display text-3xl mb-4">FAQ: HOW MUCH DOES IT COST?</h3>
              <p className="font-sans text-gray-700">
                Because every sneaker is hand-painted uniquely to your specifications, we cannot give a flat price. 
                All projects are <strong>Quoted on Request</strong> depending on the details, time, and whether you are supplying the base shoe or if we need to source it.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="bg-black p-8 md:p-12 text-white">
            <h2 className="font-display text-4xl mb-6">SEND A DIRECT MESSAGE</h2>
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); window.open(whatsappUrl, "_blank"); }}>
              <div>
                <label className="block font-display text-xl mb-2">NAME</label>
                <input type="text" required className="w-full bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-white transition-colors font-sans" />
              </div>
              <div>
                <label className="block font-display text-xl mb-2">EMAIL</label>
                <input type="email" required className="w-full bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-white transition-colors font-sans" />
              </div>
              <div>
                <label className="block font-display text-xl mb-2">MESSAGE</label>
                <textarea required rows={4} className="w-full bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-white transition-colors font-sans resize-none"></textarea>
              </div>
              <button type="submit" className="bg-white text-black font-display text-2xl px-8 py-4 hover:bg-cta hover:text-white transition-colors w-full mt-4">
                SEND MESSAGE
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
