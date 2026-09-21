import React from "react";

const teamMembers = [
  {
    name: "Ahmed Ali",
    role: "Founder & CEO",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Fatima Hassan",
    role: "Head of Customer Service",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Mohammad Rashid",
    role: "Quality Assurance Director",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

const Team = () => {
  return (
    <section className="w-full bg-[#efe6dc] py-16 text-[#1a120c] sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#A46A2A]">
            The People Behind
          </p>

          <h2 className="display-font text-4xl sm:text-5xl lg:text-6xl">
            Our <span className="italic text-[#9F6324]">Team</span>
          </h2>

          {/* Decorative Line */}
          <div className="mx-auto mt-5 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-[#A46A2A]" />
            <div className="h-2.5 w-2.5 rotate-45 border border-[#A46A2A]" />
            <div className="h-px w-12 bg-[#A46A2A]" />
          </div>

          <p className="mt-6 text-sm leading-7 text-[#6b5b4e] sm:text-base">
          Meet the studio team in Johar Town shaping how Zeccora is made, packed, and sent.
          </p>
        </div>

        {/* Team Members */}
        <div className="mx-auto mt-14 grid max-w-5xl gap-10 sm:grid-cols-2 md:grid-cols-3">
          
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group text-center"
            >
              
              {/* Circular Image */}
              <div className="relative mx-auto h-36 w-36 overflow-hidden rounded-full bg-[#efe6dc] sm:h-52 sm:w-52">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Name */}
              <h3 className="mt-6 text-xl font-semibold sm:text-2xl">
                {member.name}
              </h3>

              {/* Role */}
              <p className="mt-2 text-sm text-[#A46A2A]">
                {member.role}
              </p>

              <div className="mx-auto mt-5 h-px w-10 bg-[#A46A2A]/50 transition-all duration-300 group-hover:w-20" />

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Team;