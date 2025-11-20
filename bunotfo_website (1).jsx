import React from "react";

export default function TechSupplyWebsite() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="bg-white shadow-md p-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-700">TechSupply Digital Procurement</h1>
        <nav className="space-x-6 text-lg font-medium">
          <a href="#services" className="hover:text-blue-600">Services</a>
          <a href="#about" className="hover:text-blue-600">About</a>
          <a href="#contact" className="hover:text-blue-600">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="p-12 text-center bg-gradient-to-r from-blue-700 to-blue-500 text-white">
        <h2 className="text-4xl font-bold mb-4">Revolutionizing Procurement in Eswatini</h2>
        <p className="text-lg max-w-2xl mx-auto">
          A seamless digital platform that connects customers to quality suppliers, fast delivery, and transparent pricing.
        </p>
        <button className="mt-6 px-6 py-3 bg-white text-blue-700 rounded-xl font-semibold hover:bg-blue-100">
          Get Started
        </button>
      </section>

      {/* Services */}
      <section id="services" className="p-12">
        <h3 className="text-3xl font-bold text-center mb-8">Our Services</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h4 className="text-xl font-bold mb-3">Digital Marketplace</h4>
            <p>
              A smart online platform where customers can browse, compare, and order tools, machinery,
              building materials, and more — all with transparent pricing and real-time availability.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h4 className="text-xl font-bold mb-3">Smart Logistics & Delivery</h4>
            <p>
              Fast, efficient, and reliable delivery through integrated logistics partnerships,
              ensuring goods arrive safely at your home, office, or worksite.
            </p>
          </div>
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <h4 className="text-xl font-bold mb-3">Supplier Empowerment</h4>
            <p>
              We empower local and international suppliers by offering seamless onboarding,
              quality assurance, and digital visibility to reach more customers.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section id="mission" className="p-12 bg-white">
        <h3 className="text-3xl font-bold text-center mb-6">Our Mission</h3>
        <p className="max-w-3xl mx-auto text-center text-lg">
          To modernize procurement through digital technology, automation, and innovative supply
          solutions that promote transparency, speed, affordability, and convenience across Eswatini
          and the region.
        </p>
      </section>

      <section id="vision" className="p-12 bg-gray-100">
        <h3 className="text-3xl font-bold text-center mb-6">Our Vision</h3>
        <p className="max-w-3xl mx-auto text-center text-lg">
          To become Eswatini’s leading digital procurement and supply platform — a trusted hub where
          customers, suppliers, and logistics partners connect seamlessly through innovation,
          technology, and excellence.
        </p>
      </section>

      <section id="values" className="p-12 bg-white">
        <h3 className="text-3xl font-bold text-center mb-6">Why Choose Us</h3>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
            <h4 className="text-xl font-bold mb-3">Innovation</h4>
            <p>We embrace technology to create faster, easier, and smarter procurement systems.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
            <h4 className="text-xl font-bold mb-3">Reliability</h4>
            <p>We ensure consistent quality, dependable delivery, and trustworthy service.</p>
          </div>
          <div className="bg-gray-100 p-6 rounded-2xl shadow-md">
            <h4 className="text-xl font-bold mb-3">Empowerment</h4>
            <p>We support local businesses and suppliers by giving them digital market access.</p>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="p-12 bg-gray-200">
        <h3 className="text-3xl font-bold text-center mb-6">About TechSupply</h3>
        <p className="max-w-3xl mx-auto text-center text-lg">
          TechSupply  is a technology-driven procurement and supply company committed to transforming how businesses and individuals source materials, tools, and machinery.
        </p>
        <p className="max-w-3xl mx-auto text-center text-lg mt-4">
          We are building a digital ecosystem that enables customers to access high-quality products, transparent pricing, and fast delivery — all from the comfort of their home or office.
        </p>
        <p className="max-w-3xl mx-auto text-center text-lg mt-4">
          Our long-term vision is to contribute to Eswatini’s economic growth through innovation, digital transformation, and partnerships that support local suppliers, manufacturers, and logistics providers.
        </p>
      </section>

      {/* Contact */}
      <section id="contact" className="p-12 text-center bg-gray-200">
        <h3 className="text-3xl font-bold mb-4">Get in Touch</h3>
        <p className="text-lg mb-6">Have questions, need assistance, or want to partner with us?</p>
        <p className="text-xl font-semibold mb-4">Email: <span className="text-blue-700">techsupply@gmail.com</span></p>
        <button className="px-6 py-3 bg-blue-700 text-white rounded-xl hover:bg-blue-600">
          Send Email
        </button>
      </section>

      {/* Footer */}
      <footer className="p-6 bg-gray-900 text-white text-center mt-12">
        <p>TechSupply  © 2025. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
