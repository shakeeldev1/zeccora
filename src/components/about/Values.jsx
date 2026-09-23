import React from "react";
import {
  BadgeCheck,
  Award,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";

const values = [
  {
    icon: BadgeCheck,
    title: "Authenticity",
    description:
      "Every piece is chosen with a close eye on finish, materials, and the details that make it feel special.",
  },
  {
    icon: Award,
    title: "Quality",
    description:
      "We curate silhouettes that balance elevated design with the comfort and usefulness of everyday carry.",
  },
  {
    icon: HeartHandshake,
    title: "Responsibility",
    description:
      "We create a considered edit instead of endless choice, making every collection feel intentional.",
  },
  {
    icon: ShieldCheck,
    title: "Trust",
    description:
      "From discovery to delivery, we make every interaction clear, dependable, and personal.",
  },
];

const Values = () => {
  return (
    <section className="w-full bg-[#f7f2ec] py-10 text-[#1a120c] sm:py-10 lg:py-10">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#A46A2A]">
            What We Stand For
          </p>

          <h2 className="display-font text-4xl sm:text-5xl lg:text-6xl">
            Our <span className="italic text-[#9F6324]">Values</span>
          </h2>

          {/* Decorative Line */}
          <div className="mx-auto mt-5 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-[#A46A2A]" />
            <div className="h-2.5 w-2.5 rotate-45 border border-[#A46A2A]" />
            <div className="h-px w-12 bg-[#A46A2A]" />
          </div>

          <p className="mt-6 text-sm leading-7 text-[#6b5b4e] sm:text-base">
            The details that guide our edit
          </p>
        </div>

        {/* Values Cards */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          
          {values.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-[28px] bg-white p-7 transition hover:-translate-y-1"
              >
                
                {/* Golden Top Line */}
                <div className="absolute left-0 top-0 h-[2px] w-0 bg-[#A46A2A] transition-all duration-500 group-hover:w-full" />

                {/* Icon */}
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#efe6dc]">
                  <Icon
                    size={26}
                    strokeWidth={1.7}
                    className="
                      text-[#A46A2A]
                      transition-transform duration-300
                      group-hover:scale-110
                    "
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm leading-7 text-[#6b5b4e]">
                  {item.description}
                </p>

                {/* Bottom Decoration */}
                <div className="mt-6 h-px w-10 bg-[#A46A2A]/40 transition-all duration-300 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;