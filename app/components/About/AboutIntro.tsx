import { ReactElement } from "react"

const AboutIntro = (): ReactElement => {
  return (
    <>
        <h2 className="text-2xl md:text-4xl font-bold mb-3 md:mb-6 border-solid border-l-8 pl-2 border-yellow-500">
            O mně
        </h2>
        <p className="md:w-3/5 text-neutral-200 pb-2 md:pb-4">
            Již přes rok se intenzivně věnuji webovému vývoji. Mám zkušenosti s celou řadou technologií, včetně Reactu, 
            Next.js, Typescriptu, Tailwind CSS, REST API, headless CMS a mnoha dalších. 
        </p>
        <p className="md:w-3/5 text-neutral-200 pb-8 md:pb-12">
            Umím všechno? Zdaleka ne. Ale neustále se snažím vzdělávat a posouvat o kus dále, tak abych vždy doručil stránky, 
            které budou zákazníci i návštěvníci rádi používat.
        </p>
    </>
  )
}

export default AboutIntro