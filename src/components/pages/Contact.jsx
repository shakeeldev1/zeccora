import React, { useState } from "react";
import { Clock3, Mail, MapPin, Phone, Send } from "lucide-react";
import Contacthero from "../Contactcomponent/Contacthero";
import { SITE, mailtoUrl, whatsappUrl } from "../../lib/site";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = [
      "New Zeccora enquiry",
      "",
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Subject: ${formData.subject}`,
      "",
      formData.message,
    ].join("\n");

    window.open(whatsappUrl(text), "_blank", "noopener,noreferrer");
    setStatus("success");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const inputClass = "w-full rounded-2xl bg-[#f7f2ec] px-4 py-3.5 text-base text-[#1a120c] placeholder:text-[#8a7b70] focus:outline-none focus:ring-1 focus:ring-[#9F6324]";

  return (
    <>
      <Contacthero />

      <section className="bg-[#f7f2ec] px-4 py-8 text-[#1a120c] sm:px-6 sm:py-12 lg:px-8">
        <div className="mx-auto grid max-w-[1400px] gap-6 md:gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl bg-white p-5 sm:rounded-[28px] sm:p-7 md:p-8 lg:p-10">
            <h2 className="display-font text-3xl sm:text-4xl md:text-5xl">Get in Touch</h2>
            <div className="mt-8 space-y-6 sm:mt-10 sm:space-y-7">
              <div className="flex items-start gap-4">
                <div className="mt-1 text-[#9F6324]"><Phone size={22} /></div>
                <div className="min-w-0">
                  <p className="text-base sm:text-lg">Phone / WhatsApp</p>
                  <a href={whatsappUrl("Hello Zeccora, I have a question.")} className="mt-1 block text-base text-[#5c4c40] transition hover:text-[#9F6324] sm:mt-2 sm:text-lg">{SITE.phoneDisplay}</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 text-[#9F6324]"><Mail size={22} /></div>
                <div className="min-w-0">
                  <p className="text-base sm:text-lg">Email</p>
                  <a href={`mailto:${SITE.email}`} className="mt-1 block break-all text-base text-[#5c4c40] transition hover:text-[#9F6324] sm:mt-2 sm:text-lg">{SITE.email}</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 text-[#9F6324]"><MapPin size={22} /></div>
                <div className="min-w-0">
                  <p className="text-base sm:text-lg">Address</p>
                  <p className="mt-1 text-base text-[#5c4c40] sm:mt-2 sm:text-lg">{SITE.address}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 text-[#9F6324]"><Clock3 size={22} /></div>
                <div className="min-w-0">
                  <p className="text-base sm:text-lg">Hours</p>
                  <p className="mt-1 text-base text-[#5c4c40] sm:mt-2 sm:text-lg">{SITE.hours}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[24px] bg-white p-5 sm:rounded-[28px] sm:p-8 lg:p-10">
            <h2 className="display-font text-3xl sm:text-4xl md:text-5xl">Send a Message</h2>
            <p className="mt-3 text-sm text-[#6b5b4e]">This opens WhatsApp with your message so we can reply the same day.</p>
            <form onSubmit={handleSubmit} className="mt-8">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm text-[#5c4c40] sm:mb-3 sm:text-lg">Name</label>
                  <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} placeholder="Your name" required className={inputClass} />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm text-[#5c4c40] sm:mb-3 sm:text-lg">Email</label>
                  <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="your@email.com" required className={inputClass} />
                </div>
              </div>
              <div className="mt-6">
                <label htmlFor="subject" className="mb-2 block text-sm text-[#5c4c40] sm:mb-3 sm:text-lg">Subject</label>
                <input id="subject" name="subject" type="text" value={formData.subject} onChange={handleChange} placeholder="How can we help?" required className={inputClass} />
              </div>
              <div className="mt-6">
                <label htmlFor="message" className="mb-2 block text-sm text-[#5c4c40] sm:mb-3 sm:text-lg">Message</label>
                <textarea id="message" name="message" rows="6" value={formData.message} onChange={handleChange} placeholder="Your message..." required className={`${inputClass} resize-none`} />
              </div>
              {status === "success" && (
                <div className="mt-6 rounded-2xl bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
                  WhatsApp should now be open. If it did not, email us at {SITE.email}.
                </div>
              )}
              <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:flex-wrap sm:justify-end">
                <a
                  href={mailtoUrl(formData.subject || "Zeccora enquiry", `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#f7f2ec] px-6 py-3.5 text-sm font-medium text-[#5c4c40] sm:w-auto sm:py-4"
                >
                  Email instead
                </a>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-[#9F6324] px-8 py-3.5 text-base font-semibold text-white transition hover:bg-[#8a541c] sm:w-auto sm:py-4 sm:text-lg"
                >
                  <Send size={18} />
                  Send on WhatsApp
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
