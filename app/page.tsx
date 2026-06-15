"use client";

import { useState } from "react";

export default function Page() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Creative Director",
      quote: "YouWere transformed how I approach my wardrobe. Every morning feels effortless now.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop"
    },
    {
      name: "Marcus Chen",
      role: "Entrepreneur",
      quote: "Finally, a service that understands that style is about confidence, not trends.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
    },
    {
      name: "Elena Rodriguez",
      role: "Architect",
      quote: "The minimalist approach mirrors my own aesthetic. It's like they read my mind.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop"
    }
  ];

  return (
    <main className="min-h-screen bg-stone-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-100 via-stone-50 to-neutral-100"></div>
        
        {/* Subtle animated background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-stone-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-neutral-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-700"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-20">
          <div className="text-center">
            {/* Logo/Brand */}
            <div className="mb-8">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-light tracking-tight text-stone-900 mb-4">
                You<span className="font-normal">Were</span>
              </h1>
              <div className="w-24 h-0.5 bg-stone-900 mx-auto"></div>
            </div>

            {/* Main headline */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light text-stone-800 mb-6 max-w-4xl mx-auto leading-tight">
              Wear what feels like home
            </h2>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-stone-600 font-light mb-12 max-w-2xl mx-auto leading-relaxed">
              Daily clothing that adapts to your life, not the other way around. Timeless pieces, mindful choices.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
              <a
                href="#discover"
                className="px-10 py-4 bg-stone-900 text-stone-50 font-light text-lg tracking-wide transition-all duration-300 hover:bg-stone-800 hover:scale-105 hover:shadow-xl"
              >
                Discover Your Style
              </a>
              <a
                href="#learn"
                className="px-10 py-4 border border-stone-900 text-stone-900 font-light text-lg tracking-wide transition-all duration-300 hover:bg-stone-900 hover:text-stone-50 hover:scale-105"
              >
                Learn More
              </a>
            </div>

            {/* Hero Image Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
              <div className="overflow-hidden transition-all duration-500 hover:scale-105">
                <img
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=1000&fit=crop"
                  alt="Minimal wardrobe styling"
                  className="w-full h-80 md:h-96 object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="overflow-hidden transition-all duration-500 hover:scale-105 md:mt-8">
                <img
                  src="https://images.unsplash.com/photo-1558769132-cb1aea588c87?w=800&h=1000&fit=crop"
                  alt="Essential daily clothing"
                  className="w-full h-80 md:h-96 object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="overflow-hidden transition-all duration-500 hover:scale-105">
                <img
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=1000&fit=crop"
                  alt="Timeless fashion choices"
                  className="w-full h-80 md:h-96 object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-stone-400 rounded-full p-1">
            <div className="w-1.5 h-2 bg-stone-400 rounded-full mx-auto animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 sm:py-32 lg:py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <p className="text-sm tracking-widest text-stone-500 uppercase mb-4">What people say</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-stone-900 mb-6">
              Testimonials
            </h2>
            <div className="w-16 h-0.5 bg-stone-300 mx-auto"></div>
          </div>

          {/* Main testimonial display */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="relative bg-stone-50 p-10 sm:p-16 lg:p-20 transition-all duration-500">
              <div className="absolute top-8 left-8 text-8xl text-stone-200 font-serif leading-none">"</div>
              
              <div className="relative z-10">
                <p className="text-2xl sm:text-3xl lg:text-4xl font-light text-stone-800 mb-10 leading-relaxed text-center">
                  {testimonials[activeTestimonial].quote}
                </p>
                
                <div className="flex items-center justify-center gap-6">
                  <img
                    src={testimonials[activeTestimonial].image}
                    alt={testimonials[activeTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-stone-300"
                  />
                  <div>
                    <p className="font-normal text-lg text-stone-900">
                      {testimonials[activeTestimonial].name}
                    </p>
                    <p className="text-stone-500 font-light">
                      {testimonials[activeTestimonial].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonial navigation */}
          <div className="flex justify-center gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`transition-all duration-300 ${
                  activeTestimonial === index
                    ? "w-12 h-3 bg-stone-900"
                    : "w-3 h-3 bg-stone-300 hover:bg-stone-400"
                }`}
                aria-label={`View testimonial ${index + 1}`}
              ></button>
            ))}
          </div>

          {/* Additional testimonial cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className="group cursor-pointer p-8 border border-stone-200 transition-all duration-300 hover:border-stone-900 hover:shadow-lg hover:-translate-y-1"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-6 border-2 border-stone-200 group-hover:border-stone-900 transition-all duration-300"
                />
                <p className="text-stone-700 font-light text-center mb-4 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <p className="text-stone-900 font-normal text-center">{testimonial.name}</p>
                <p className="text-stone-500 text-sm text-center">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-stone-900 text-stone-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-6">
            Ready to simplify your daily style?
          </h3>
          <p className="text-lg sm:text-xl text-stone-300 font-light mb-10">
            Join thousands who've found their signature look
          </p>
          <a
            href="#start"
            className="inline-block px-12 py-5 bg-stone-50 text-stone-900 font-light text-lg tracking-wide transition-all duration-300 hover:bg-stone-200 hover:scale-105 hover:shadow-2xl"
          >
            Get Started Today
          </a>
        </div>
      </section>
    </main>
  );
}