import React, { useState } from "react";
import {
  ArrowLeft,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import Contacthero from "../Contactcomponent/Contacthero";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  // ==============================
  // EMAILJS CONFIGURATION
  // Add your EmailJS keys here
  // ==============================
  const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID";
  const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
  const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY";

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,

          // Optional extra values for EmailJS template
          to_email: "info@zeccora.store",
          reply_to: formData.email,
        },
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Contacthero />

      <section className="bg-[#0f0f0f] px-4 py-6 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-[0.9fr_1.1fr]">

          {/* =========================
              CONTACT INFORMATION
          ========================== */}
          <div className="rounded-[28px] border border-white/10 bg-[#070707] p-7 shadow-[0_0_30px_rgba(0,0,0,0.35)] sm:p-8 lg:p-10">

            <h2 className="font-serif text-4xl font-bold tracking-[-0.03em] text-white">
              Get in Touch
            </h2>

            <div className="mt-10 space-y-7">

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="mt-1 text-[#d4af37]">
                  <Phone size={24} />
                </div>

                <div>
                  <p className="text-lg text-white">Phone</p>
                  <p className="mt-2 text-lg text-white/90">
                    +923207521951
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="mt-1 text-[#d4af37]">
                  <Mail size={24} />
                </div>

                <div>
                  <p className="text-lg text-white">Email</p>
                  <p className="mt-2 break-all text-lg text-white/90">
                    info@zeccora.store
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-4">
                <div className="mt-1 text-[#d4af37]">
                  <MapPin size={24} />
                </div>

                <div>
                  <p className="text-lg text-white">Address</p>
                  <p className="mt-2 text-lg text-white/90">
                    Bahawalpur, Pakistan
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="mt-1 text-[#d4af37]">
                  <Clock3 size={24} />
                </div>

                <div>
                  <p className="text-lg text-white">Hours</p>
                  <p className="mt-2 text-lg text-white/90">
                    Monday - Friday: 10AM - 6PM
                  </p>
                </div>
              </div>

            </div>

            {/* Follow Us */}
            <div className="mt-12 border-t border-white/10 pt-8">
              <p className="mb-4 text-xl font-medium text-white">
                Follow Us
              </p>

              <div className="flex flex-wrap gap-3">
                {["Instagram", "Twitter", "Facebook"].map((name) => (
                  <button
                    key={name}
                    type="button"
                    className="rounded-full border border-white/15 bg-[#1a1a1a] px-5 py-2.5 text-sm font-medium text-white/80 transition hover:border-[#d4af37]/60 hover:text-[#d4af37]"
                  >
                    {name}
                  </button>
                ))}
              </div>
            </div>

            {/* Back Button */}
            <button
              type="button"
              onClick={() => window.history.back()}
              className="mt-10 inline-flex items-center gap-3 text-lg font-medium text-[#d4af37] transition hover:text-[#f0c84b]"
            >
              <ArrowLeft size={22} />
              Back
            </button>

          </div>

          {/* =========================
              CONTACT FORM
          ========================== */}
          <div className="rounded-[28px] border border-white/10 bg-[#1b1b1b] p-7 shadow-[0_0_30px_rgba(0,0,0,0.3)] sm:p-8 lg:p-10">

  <h2 className="font-serif text-4xl font-bold tracking-[-0.04em] text-white">
    Send a Message
  </h2>

  <form onSubmit={handleSubmit} className="mt-8">

    <div className="grid gap-6 sm:grid-cols-2">

      {/* Name */}
      <div>
        <label
          htmlFor="name"
          className="mb-3 block text-lg text-white/80"
        >
          Name
        </label>

        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          required
          className="w-full rounded-2xl border border-white/10 bg-[#0e0e0e] px-4 py-4 text-base text-white placeholder:text-white/45 focus:border-[#d4af37] focus:outline-none"
        />
      </div>

      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="mb-3 block text-lg text-white/80"
        >
          Email
        </label>

        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
          required
          className="w-full rounded-2xl border border-white/10 bg-[#0e0e0e] px-4 py-4 text-base text-white placeholder:text-white/45 focus:border-[#d4af37] focus:outline-none"
        />
      </div>

    </div>

    {/* Subject */}
    <div className="mt-6">
      <label
        htmlFor="subject"
        className="mb-3 block text-lg text-white/80"
      >
        Subject
      </label>

      <input
        id="subject"
        name="subject"
        type="text"
        value={formData.subject}
        onChange={handleChange}
        placeholder="How can we help?"
        required
        className="w-full rounded-2xl border border-white/10 bg-[#0e0e0e] px-4 py-4 text-base text-white placeholder:text-white/45 focus:border-[#d4af37] focus:outline-none"
      />
    </div>

    {/* Message */}
    <div className="mt-6">
      <label
        htmlFor="message"
        className="mb-3 block text-lg text-white/80"
      >
        Message
      </label>

      <textarea
        id="message"
        name="message"
        rows="6"
        value={formData.message}
        onChange={handleChange}
        placeholder="Your message..."
        required
        className="w-full resize-none rounded-2xl border border-white/10 bg-[#0e0e0e] px-4 py-4 text-base text-white placeholder:text-white/45 focus:border-[#d4af37] focus:outline-none"
      />
    </div>

    {/* Success */}
    {status === "success" && (
      <div className="mt-6 rounded-2xl border border-green-500/20 bg-green-500/10 px-4 py-3 text-sm text-green-400">
        Your message has been sent successfully. We will get back to you soon.
      </div>
    )}

    {/* Error */}
    {status === "error" && (
      <div className="mt-6 rounded-2xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
        Failed to send message. Please try again.
      </div>
    )}

    {/* Button */}
    <div className="mt-8 flex justify-end">
      <button
        type="submit"
        disabled={loading}
        className={`inline-flex items-center justify-center gap-3 rounded-full bg-[#d4af37] px-8 py-4 text-lg font-bold text-[#111111] transition hover:bg-[#f0c84b] ${
          loading ? "cursor-not-allowed opacity-70" : ""
        }`}
      >
        <Send size={18} />

        {loading ? "Sending..." : "Send Message"}
      </button>
    </div>

  </form>
</div>

        </div>
      </section>
    </>
  );
};

export default Contact;