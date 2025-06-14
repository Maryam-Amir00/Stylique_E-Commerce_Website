import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (form.name && form.email && form.message) {
      toast.success(
        <div>
          <strong className="block text-lg text-slate-800">Stylique</strong>
          <span>Thanks {form.name}! Your message was sent successfully.</span>
        </div>,
        {
          position: 'top-right',
          autoClose: 3000,
          className: 'bg-white text-slate-800 border border-slate-300 shadow-lg',
        }
      );
      setForm({ name: '', email: '', message: '' });
    } else {
      toast.error(
        <div>
          <strong className="block text-lg text-red-700">Stylique</strong>
          <span>Please fill in all fields before sending.</span>
        </div>,
        {
          position: 'top-right',
          autoClose: 3000,
          className: 'bg-white text-red-700 border border-red-300 shadow-lg',
        }
      );
    }
  };

  return (
    <section className="bg-white text-slate-800 py-20 px-6 md:px-10 lg:px-28 font-serif">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 tracking-tight">
          Contact-Us
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Whether you're curious about features, a free trial, or even press, we're ready to answer any and all questions.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <FaEnvelope className="text-slate-700 mt-1" />
              <div>
                <p className="font-medium">Email</p>
                <p className="text-sm text-gray-600">support@stylique.com</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaPhone className="text-slate-700 mt-1" />
              <div>
                <p className="font-medium">Phone</p>
                <p className="text-sm text-gray-600">+92 300 1234567</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-slate-700 mt-1" />
              <div>
                <p className="font-medium">Address</p>
                <p className="text-sm text-gray-600">123 Stylique Street</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-8 rounded-xl shadow-md border border-gray-200">
            <div>
              <label className="block mb-1 font-medium text-slate-700">Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-700"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-slate-700">Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-slate-700"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-slate-700">Message</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-slate-700"
              />
            </div>
            <button
              type="submit"
              className="bg-slate-700 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      <ToastContainer />
    </section>
  );
};

export default Contact;
