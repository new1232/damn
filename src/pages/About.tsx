export default function About() {
  return (
    <div className="bg-primary min-h-screen pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          <div className="order-2 md:order-1">
            <h1 className="text-6xl md:text-8xl font-display leading-none mb-8">THE <br/><span className="text-cta">DAMN</span> STORY</h1>
            
            <div className="space-y-6 font-sans text-lg text-gray-700 leading-relaxed">
              <p>
                Born in the streets of Kathmandu, DAMN CUSTOMS NP started as a passion project to bring premium, 1-of-1 wearable art to sneakerheads in Nepal.
              </p>
              <p>
                We believed that footwear should be as unique as the individual wearing it. Off-the-shelf heat is cool, but a custom painted sneaker that tells your story? That's legendary.
              </p>
              <p>
                Every stroke, every blend, and every finish we apply is done meticulously by hand using the highest quality leather paints and sealers available globally. 
              </p>
              <p className="font-bold text-black border-l-4 border-cta pl-4">
                "Our mission is simple: to make sure you never walk into a room with the same shoes as someone else."
              </p>
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            <div className="aspect-[4/5] bg-secondary relative overflow-hidden">
              <img 
                src="https://placehold.co/800x1000/000000/FFFFFF/png?text=WORKSHOP" 
                alt="Behind the scenes" 
                className="w-full h-full object-cover grayscale"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-cta -z-10 hidden md:block"></div>
            <div className="absolute -top-8 -right-8 w-32 h-32 border-4 border-black -z-10 hidden md:block"></div>
          </div>

        </div>

        {/* Studio Section */}
        <div className="mt-32">
          <h2 className="text-5xl md:text-7xl font-display leading-none mb-12 text-center">THE STUDIO</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <img 
                key={i} 
                src="https://placehold.co/600x600/000000/FFFFFF/png?text=STUDIO" 
                alt="Studio" 
                className="w-full aspect-square object-cover"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
