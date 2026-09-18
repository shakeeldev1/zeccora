import React from "react";

const teamMembers = [
  {
    name: "Ahmed Ali",
    role: "Founder & CEO",
    image:
      "https://i.pinimg.com/736x/98/d4/e3/98d4e3c28316349f3f7ccc976929e986.jpg",
  },
  {
    name: "Fatima Hassan",
    role: "Head of Customer Service",
    image:
      "https://i.pinimg.com/736x/ff/43/ac/ff43ac9a9638df9019a13c54bfa3c82e.jpg",
  },
  {
    name: "Mohammad Rashid",
    role: "Quality Assurance Director",
    image:
      "https://i.pinimg.com/736x/18/7d/36/187d36b81bd4427fdf01554ec09621b4.jpg",
  },
];

const Team = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#000000] via-[#120805] to-[#000000] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-10">
        
        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#A46A2A]">
            The People Behind
          </p>

          <h2 className=" text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Our <span className="text-[#A46A2A]">Team</span>
          </h2>

          {/* Decorative Line */}
          <div className="mx-auto mt-5 flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-[#A46A2A]" />
            <div className="h-2.5 w-2.5 rotate-45 border border-[#A46A2A]" />
            <div className="h-px w-12 bg-[#A46A2A]" />
          </div>

          <p className="mt-6 text-sm leading-7 text-gray-400 sm:text-base">
            Meet the people shaping a more thoughtful way to discover and
            carry everyday luxury.
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
              <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-full sm:h-52 sm:w-52">
                
                {/* Image */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#000000] via-[#120805] to-[#000000]/20 transition-all duration-500 group-hover:bg-gradient-to-b from-[#000000] via-[#120805] to-[#000000]/0" />
              </div>

              {/* Name */}
              <h3 className="mt-6  text-xl font-semibold text-white sm:text-2xl">
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