import React, { useState, useEffect } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill out all fields!");
      return;
    }

    console.log("Form Data Submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  // Hide success message after few seconds
  useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => setSubmitted(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [submitted]);

  return (
    <section className="bg-white min-h-screen flex items-center justify-center py-16 px-6 md:px-20">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 bg-neutral-50 rounded-2xl shadow-lg p-8 md:p-12">
        {/* Left Side */}
        <div className="flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            Get in Touch
          </h2>
          <p className="text-neutral-600 mb-6 leading-relaxed">
            We'd love to hear from you! Whether you have questions about our
            products, need assistance, or just want to share your feedback, feel
            free to reach out to us.
          </p>
          <ul className="text-neutral-700 space-y-3">
            <li>
              <strong>Email:</strong> support@homedecor.com
            </li>
            <li>
              <strong>Phone:</strong> +92 300 1234567
            </li>
            <li>
              <strong>Address:</strong> Islamabad, Pakistan
            </li>
          </ul>
        </div>

        {/* Right Side Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-2xl p-6 md:p-8 border border-neutral-100"
        >
          <h3 className="text-2xl font-semibold text-neutral-800 mb-6 text-center">
            Contact Form
          </h3>

          <div className="mb-4">
            <label className="block text-neutral-700 font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a67c52] transition"
            />
          </div>

          <div className="mb-4">
            <label className="block text-neutral-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a67c52] transition"
            />
          </div>

          <div className="mb-6">
            <label className="block text-neutral-700 font-medium mb-2">
              Message
            </label>
            <textarea
              name="message"
              placeholder="Write your message..."
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a67c52] transition resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#a67c52] hover:bg-[#8b653f] text-white py-3 rounded-full font-medium transition-transform transform hover:-translate-y-1"
          >
            Send Message
          </button>

          {submitted && (
            <p className="text-green-600 mt-4 text-center font-medium">
              ✅ Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
