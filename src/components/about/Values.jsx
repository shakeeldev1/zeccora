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
    <section className="w-full bg-[#1a1a1a] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#d6af35]">
            What We Stand For
          </p>

          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Our <span className="text-[#d6af35]">Values</span>
          </h2>

          {/* Decorative Line */}
          <div className="mx-auto mt-5 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-[#d6af35]" />
            <div className="h-2.5 w-2.5 rotate-45 border border-[#d6af35]" />
            <div className="h-px w-12 bg-[#d6af35]" />
          </div>

          <p className="mt-6 text-sm leading-7 text-gray-400 sm:text-base">
            The details that guide our edit
          </p>
        </div>

        {/* Values Cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          
          {values.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  group relative overflow-hidden
                  border border-[#d6af35]/20
                  bg-[#151515]
                  p-7
                  transition-all duration-500
                  hover:-translate-y-2
                  hover:border-[#d6af35]/70
                "
              >
                
                {/* Golden Top Line */}
                <div className="absolute left-0 top-0 h-[2px] w-0 bg-[#d6af35] transition-all duration-500 group-hover:w-full" />

                {/* Icon */}
                <div
                  className="
                    mb-6 flex h-14 w-14 items-center justify-center
                    border border-[#d6af35]/40
                    bg-[#292716]
                    transition-all duration-300
                    group-hover:bg-[#342d15]
                    group-hover:border-[#d6af35]
                  "
                >
                  <Icon
                    size={26}
                    strokeWidth={1.7}
                    className="
                      text-[#d6af35]
                      transition-transform duration-300
                      group-hover:scale-110
                    "
                  />
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-semibold text-white">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-sm leading-7 text-gray-400">
                  {item.description}
                </p>

                {/* Bottom Decoration */}
                <div className="mt-6 h-px w-10 bg-[#d6af35]/40 transition-all duration-300 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;