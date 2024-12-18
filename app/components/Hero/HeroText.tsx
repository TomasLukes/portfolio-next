import { ReactElement } from "react";
import Link from "next/link";

const HeroText = (): ReactElement => {
  return (
    <>
      <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold whitespace-nowrap md:whitespace-normal mb-1 md:mb-2">
        Tomas Lukes
      </h1>
      <h2 className="text-base md:text-2xl mb-3 md:mb-6 border-solid border-l-8 pl-2 border-yellow-500">
        Frontend developer
      </h2>
      <p className="hidden md:block w-full lg:w-4/5 text-justify mb-3">
        {`Hello 👋 My name is Tomáš and I'm a frontend developer from Prague, currently working on brand tracking and ad tracking software solutions for `}
        <Link
          href={"https://www.behaviolabs.com"}
          className="hover:underline hover:decoration-yellow-500"
        >
          Behavio Labs
        </Link>
        .
      </p>
      <p className="hidden md:block w-full lg:w-4/5 text-justify mb-6">
        {`Do I know everything? Far from it. However, I have more than 10 years of experience in technical positions, 
            and if you're looking for a team member with the potential for rapid growth and the ability to learn constantly, keep reading.`}
      </p>
    </>
  );
};

export default HeroText;
