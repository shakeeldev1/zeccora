import React from "react";
import {
  ArrowLeft,
  Clock3,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import Contacthero from "../Contactcomponent/Contacthero";

const Contact = () => {
  return (
    <>
      <Contacthero />

      <section className="bg-[#0f0f0f] px-4 py-6 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-[1400px] gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[28px] border border-white/10 bg-[#070707] p-7 shadow-[0_0_30px_rgba(0,0,0,0.35)] sm:p-8 lg:p-10">
            <h2 className="font-serif text-4xl font-bold tracking-[-0.03em] text-white">Get in Touch</h2>

          <div className="mt-10 space-y-7">
            <div className="flex items-start gap-4">
              <div className="mt-1 text-[#d4af37]">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-lg text-white">Phone</p>
                <p className="mt-2 text-lg text-white/90">+923207521951</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 text-[#d4af37]">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-lg text-white">Email</p>
                <p className="mt-2 break-all text-lg text-white/90">info@zeccora.store</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 text-[#d4af37]">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-lg text-white">Address</p>
                <p className="mt-2 text-lg text-white/90">Bahawalpur, Pakistan</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="mt-1 text-[#d4af37]">
                <Clock3 size={24} />
              </div>
              <div>
                <p className="text-lg text-white">Hours</p>
                <p className="mt-2 text-lg text-white/90">Monday - Friday: 10AM - 6PM</p>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-8">
            <p className="mb-4 text-xl font-medium text-white">Follow Us</p>
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

          <button
            type="button"
            className="mt-10 inline-flex items-center gap-3 text-lg font-medium text-[#d4af37] transition hover:text-[#f0c84b]"
          >
            <ArrowLeft size={22} />
            Back
          </button>
        </div>

        <div className="rounded-[28px] border border-white/10 bg-[#1b1b1b] p-7 shadow-[0_0_30px_rgba(0,0,0,0.3)] sm:p-8 lg:p-10">
          <h2 className="font-serif text-4xl font-bold tracking-[-0.04em] text-white">Send a Message</h2>

          <form className="mt-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-3 block text-lg text-white/80">Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-white/10 bg-[#0e0e0e] px-4 py-4 text-base text-white placeholder:text-white/45 focus:border-[#d4af37] focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-3 block text-lg text-white/80">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  className="w-full rounded-2xl border border-white/10 bg-[#0e0e0e] px-4 py-4 text-base text-white placeholder:text-white/45 focus:border-[#d4af37] focus:outline-none"
                />
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="subject" className="mb-3 block text-lg text-white/80">Subject</label>
              <input
                id="subject"
                type="text"
                placeholder="How can we help?"
                className="w-full rounded-2xl border border-white/10 bg-[#0e0e0e] px-4 py-4 text-base text-white placeholder:text-white/45 focus:border-[#d4af37] focus:outline-none"
              />
            </div>

            <div className="mt-6">
              <label htmlFor="message" className="mb-3 block text-lg text-white/80">Message</label>
              <textarea
                id="message"
                rows="6"
                placeholder="Your message..."
                className="w-full resize-none rounded-2xl border border-white/10 bg-[#0e0e0e] px-4 py-4 text-base text-white placeholder:text-white/45 focus:border-[#d4af37] focus:outline-none"
              />
            </div>

            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="relative inline-flex items-center justify-center gap-3 rounded-full bg-[#d4af37] px-8 py-4 text-lg font-bold text-[#111111] transition hover:bg-[#f0c84b]"
              >
                <Send size={18} />
                Send Message
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
