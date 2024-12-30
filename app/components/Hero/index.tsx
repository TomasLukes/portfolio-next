import { ReactElement } from "react";

import HeroIcons from "@/components/Hero/HeroIcons";
import HeroIllustration from "@/components/Hero/HeroIllustration";
import HeroText from "@/components/Hero/HeroText";
import TechStack from "@/components/TechStack";

const Hero = (): ReactElement => {
  return (
    <section id="hero" className="min-h-[100vh - 72px] grid place-content-center">
      <div className="flex gap-4">
        <div className="w-1/2">
          <HeroText />
          <HeroIcons />
        </div>
        <HeroIllustration />
      </div>
      {/* TODO: Make mobile text to component */}
      <p className="md:hidden container text-sm mx-auto text-justify mt-6">
        {`Hello 👋 My name is Tomáš and I'm a frontend developer from Prague, currently working on
        brand tracking and ad tracking software solutions for Behavio Labs.`}
      </p>
      <p className="md:hidden container text-sm mx-auto text-justify mt-3">
        {`While I emphasize modern tech stacks and code quality, first and foremost I'm always searching for ways to bring value to real-life users and businesses through my digital products.`}
      </p>
      <TechStack />
    </section>
  );
};

export default Hero;
