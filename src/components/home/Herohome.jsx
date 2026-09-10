
import React from "react";
import { ArrowUpRight, Sparkles } from "lucide-react";
import heroImage from "../../assets/image2.png";

const Herohome = () => {
  return (
    <section className="relative min-h-[420px] w-full overflow-hidden sm:min-h-[500px] lg:min-h-[560px]">

      {/* Background Image */}
      <img
        src={heroImage}
        alt="Luxury Ladies Bag Collection"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
    </section>
  );
};

export default Herohome;

