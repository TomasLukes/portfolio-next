import { ReactElement } from "react"

const AboutIntro = (): ReactElement => {
  return (
    <>
        <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-6 border-solid border-l-8 pl-2 border-yellow-500">
          About me
        </h2>
        <p className="md:w-3/5 pb-2 md:pb-4">
          {`For over a year now, I've been deeply immersed in web development. I have experience with a wide range of technologies, 
            including React, Tailwind CSS, Sass, and many others. Currently, I'm learning Next.js and TypeScript while working on my latest project.
          `}
        </p>
        <p className="md:w-3/5 pb-8 md:pb-12">
          {`Do I know everything? Far from it. However, I bring over 10 years of experience from various technical positions. 
            If you're in search of a team member with the potential for rapid growth and a constant willingness to learn, feel free to reach out to me.
          `}
        </p>
    </>
  )
}

export default AboutIntro