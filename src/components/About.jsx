import React from "react";
import aboutImg from "../assets/about.jpg";

function About() {
  return (
    <section className="bg-gradient-to-br from-[#faf9f7] via-white to-[#f7f6f3] py-20 px-[8%]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        
        {/* Left Content */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            About <span className="text-[#a67c52]">HomeDecor</span>
          </h2>

          <p className="text-lg text-gray-600 mb-5 leading-relaxed">
            At <span className="font-semibold text-gray-800">HomeDecor</span>, we
            believe your home should reflect your personality. Our collection
            brings you premium, elegant, and timeless pieces designed to
            transform your living space into a haven of comfort and beauty.
          </p>

          <p className="text-gray-600 mb-5 leading-relaxed">
            With a focus on craftsmanship and attention to detail, we deliver
            products that blend <span className="text-[#a67c52] font-medium">style</span> 
            and <span className="text-[#a67c52] font-medium">functionality</span> — helping
            you create a cozy, stylish home that feels uniquely yours.
          </p>

          <p className="text-gray-600 mb-8 leading-relaxed">
            Every piece is thoughtfully curated to enhance your interiors with a
            touch of sophistication, ensuring your home tells your story with
            elegance and charm.
          </p>

          <div className="flex gap-4">
            <button className="bg-[#a67c52] text-white py-3 px-8 rounded-full text-sm font-semibold shadow-md hover:bg-[#8b6a43] transition-all duration-300">
              Learn More
            </button>
            <button className="border-2 border-[#a67c52] text-[#a67c52] py-3 px-8 rounded-full text-sm font-semibold hover:bg-[#a67c52] hover:text-white transition-all duration-300">
              Explore Collection
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-[#a67c52]/20 rounded-3xl blur-2xl group-hover:blur-3xl transition duration-500"></div>
            <img
              src={aboutImg}
              alt="Elegant Home Interior"
              className="relative w-[90%] md:w-[85%] rounded-3xl shadow-2xl object-cover transform group-hover:scale-105 transition duration-500 ease-out"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
