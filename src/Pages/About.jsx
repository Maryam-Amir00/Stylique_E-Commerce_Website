import React from 'react';
import { FaFeatherAlt, FaRegStar, FaLeaf } from 'react-icons/fa';
import { HashLink as NavLink } from 'react-router-hash-link';

const About = () => {
  return (
    <div className="bg-white text-slate-800 font-serif">

      {/* Elegant Intro */}
      <section className="py-28 px-6 text-center bg-slate-100">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight uppercase text-slate-800 mb-4">
          About Stylique
        </h1>
        <p className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
          Born from a passion for timeless elegance, <span className="italic font-medium">Stylique</span> curates fashion that is simple, graceful, and quietly bold. We don't follow trends, we define a look.
        </p>
      </section>

      {/* Divider */}
      <div className="h-1 w-16 bg-slate-700 rounded-full mx-auto my-12"></div>

      {/* Highlights */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10 text-center py-20">
        <div className="p-6 border rounded-xl shadow hover:shadow-lg hover:scale-[1.05] transition duration-300">
          <FaFeatherAlt className="text-4xl text-rose-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Effortless Comfort</h3>
          <p className="text-slate-600 text-sm">Soft, breathable fabrics crafted for graceful movement and everyday ease.</p>
        </div>
        <div className="p-6 border rounded-xl shadow hover:shadow-lg hover:scale-[1.05] transition duration-300">
          <FaRegStar className="text-4xl text-yellow-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Refined Details</h3>
          <p className="text-slate-600 text-sm">Clean lines. Delicate finishes. Pieces designed to elevate, not overwhelm.</p>
        </div>
        <div className="p-6 border rounded-xl shadow hover:shadow-lg hover:scale-[1.05] transition duration-300">
          <FaLeaf className="text-4xl text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Conscious Creation</h3>
          <p className="text-slate-600 text-sm">We prioritize sustainable choices that respect both style and the planet.</p>
        </div>
      </section>

      {/* Signature Line */}
      <section className="bg-slate-800 text-white py-24 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-light italic max-w-2xl mx-auto">
          “Understated elegance is the loudest kind of confidence.”
        </h2>
        <p className="mt-4 text-sm text-slate-300">— The Stylique Philosophy</p>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 text-center bg-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Craft Your Signature Look</h2>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
          Discover wardrobe essentials that speak volumes, without saying a word.
        </p>
        <NavLink
          smooth
          to="/#shop"
          className="inline-block bg-slate-800 text-white px-8 py-3 rounded-full font-medium hover:bg-slate-600 hover:scale-[1.02] transition"
        >
          Visit Shop
        </NavLink>

      </section>

    </div>
  );
};

export default About;
