import { useEffect, useState } from "react";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac",
    title: "Empowering Bhutanese Youth",
    description:
      "A digital platform connecting youth with opportunities, programmes and skills development."
  },

  {
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644",
    title: "Build Your Future",
    description:
      "Discover learning opportunities, volunteering activities and career pathways."
  },

  {
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    title: "Grow. Learn. Lead.",
    description:
      "Track your achievements and become the next generation of Bhutanese leaders."
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev)=> 
        (prev + 1) % slides.length
      );
    },5000);
    return () => clearInterval(timer);
  },[]);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background */}
      <img
        src={slides[current].image}
        alt="Youth"
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white w-full">
        <div className="max-w-3xl">
          <p className="text-blue-300 font-semibold mb-4">
            Bhutan Youth Platform
          </p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            {slides[current].title}
          </h1>
          <p className="mt-6 text-lg text-gray-200">
            {slides[current].description}
          </p>
          <div className="flex gap-4 mt-8">
            <a href="#journey" className="bg-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-700 transition inline-block text-center">
              Get Started
            </a>
            <a href="#journey" className="border border-white/40 px-8 py-3 rounded-xl backdrop-blur hover:bg-white/10 transition inline-block text-center">
              Explore Programmes
            </a>
          </div>
        </div>
      </div>

      {/* NDI Card */}
      <div className="hidden md:block absolute right-10 bottom-20 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-6 text-white w-80"> 
      <h3 className="text-xl font-bold">
          Youth Digital Identity
        </h3>
        <p className="mt-3 text-gray-200">
          One secure identity to access programmes,
          certificates and youth services.
        </p>
      </div>

      {/* Dots */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
      {
        slides.map((_,index)=>(
          <button
            key={index}
            onClick={()=>setCurrent(index)}
            className={`w-3 h-3 rounded-full
              ${ current===index ? "bg-white"  : "bg-white/40"}`}/>))
      }
      </div>
    </section>
  )
}

export default Hero;