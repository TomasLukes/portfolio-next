import { ReactElement } from "react";

const AboutIntro = (): ReactElement => {
  return (
    <>
      <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-6 border-solid border-l-8 pl-2 border-yellow-500">
        About me
      </h2>
      <p className="md:w-3/5 pb-2 md:pb-4">
        {`I have experience with a wide range of technologies, 
          including front-end Next.js, React, JavaScript and TypeScript, Tailwind CSS and even full-stack like PostgreSQL, headless CMS and REST APIs.
        `}
      </p>
      <p className="md:w-3/5 pb-8 md:pb-12">
        {`Do I know everything? Far from it. However, I have more than 10 years of experience in technical positions, and if you're looking for a team member with the potential for rapid growth and the ability to learn constantly, feel free to reach me.`}
      </p>
    </>
  );
};

export default AboutIntro;
