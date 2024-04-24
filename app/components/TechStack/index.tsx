import { ReactElement } from "react"
import Image from "next/image"

const TechStack = (): ReactElement => {
  return (
    <div className="w-full pt-12 md:mt-36  max-w-[900px] mx-auto">
      <h3 className="text-xl md:text-2xl font-medium mb-3 md:mb-6">Techstack</h3>
      <ul className="flex flex-wrap gap-4 text-sm md:text-base items-center justify-center md:justify-start">
                <li className="w-32 md:w-40 px-5 py-2 rounded-3xl border border-1 border-neutral-700">
          <div className="mx-auto flex items-center justify-center gap-2">
            <Image
              src="/assets/icons/tech/react-colored.svg"
              alt="React icon"
              className="h-5 w-5 md:w-7 md:h-7"
              width={28}
              height={28}
            />
            <label className=" justify-self-end text-center font-medium ">
            React   
            </label>
          </div>
        </li> 
        <li className="w-32 md:w-40 px-5 py-2 rounded-3xl border border-1 border-neutral-700">
          <div className="mx-auto flex items-center justify-center gap-2">
            <Image
              src="/assets/icons/tech/nextjs-colored.svg"
              alt="Next.js icon"
              className="h-5 w-5 md:w-7 md:h-7"
              width={28}
              height={28}
            />
            <label className=" justify-self-end text-center font-medium ">
            Next.js
            </label>
          </div>
        </li>  
        <li className="w-32 md:w-40 px-5 py-2 rounded-3xl border border-1 border-neutral-700">
          <div className="mx-auto flex items-center justify-center gap-1 md:gap-2">
            <Image
              src="/assets/icons/tech/typescript-colored.svg"
              alt="Typescript icon"
              className="h-4 w-4 md:w-6 md:h-6"
              width={24}
              height={24}
            />
            <label className=" justify-self-end text-center font-medium ">
            Typescript
            </label>
          </div>
        </li>
        <li className="w-32 md:w-40 px-5 py-2 rounded-3xl border border-1 border-neutral-700">
          <div className="mx-auto flex items-center justify-center gap-1 md:gap-2 ">
            <Image
              src="/assets/icons/tech/javascript-colored.svg"
              alt="Javascript icon"
              className="h-4 w-4 md:w-6 md:h-6"
              width={24}
              height={24}
            />
            <label className="justify-self-end text-center font-medium ">
            Javascript
            </label>
          </div>
        </li>
                <li className="w-32 md:w-40 px-3 md:px-5 py-2 rounded-3xl border border-1 border-neutral-700">
          <div className="mx-auto flex items-center justify-center gap-2">
            <Image
              src="/assets/icons/tech/tailwindcss-colored.svg"
              alt="tailwindcss icon"
              className="h-5 w-5 md:w-7 md:h-7"
              width={28}
              height={28}
            />
            <label className="justify-self-end text-center font-medium ">
            Tailwind  
            </label>
          </div>
        </li>      
        <li className="w-32 md:w-40 px-5 py-2 rounded-3xl border border-1 border-neutral-700">
          <div className="mx-auto flex items-center justify-center gap-2">
            <Image
              src="/assets/icons/tech/html5-colored.svg"
              alt="HTML icon"
              className="h-5 w-5 md:w-7 md:h-7"
              width={28}
              height={28}
            />
            <label className="font-medium ">
            HTML  
            </label>
          </div>
        </li>
        <li className="w-32 md:w-40 px-5 py-2 rounded-3xl border border-1 border-neutral-700">
          <div className="mx-auto flex items-center justify-center gap-2">
            <Image
              src="/assets/icons/tech/css3-colored.svg"
              alt="CSS icon"
              className="h-5 w-5 md:w-7 md:h-7"
              width={28}
              height={28}
            />
            <label className=" justify-self-end text-center font-medium ">
            CSS  
            </label>
          </div>
        </li> 
                <li className="w-32 md:w-40 px-5 py-2 rounded-3xl border border-1 border-neutral-700">
          <div className="mx-auto flex items-center justify-center gap-2">
            <Image
              src="/assets/icons/tech/rest-api.png"
              alt="Rest API icon"
              className="h-5 w-5 md:w-7 md:h-7"
              width={28}
              height={28}
            />
            <label className=" justify-self-end text-center font-medium ">
            Rest API
            </label>
          </div>
        </li>     
        <li className="w-32 md:w-40 px-5 py-2 rounded-3xl border border-1 border-neutral-700">
          <div className="mx-auto flex items-center justify-center gap-2">
            <Image
              src="/assets/icons/tech/firebase-colored.svg"
              alt="Firebase icon"
              className="h-5 w-5 md:w-7 md:h-7"
              width={28}
              height={28}
            />
            <label className=" justify-self-end text-center font-medium ">
            Databases
            </label>
          </div>
        </li>
        <li className="w-32 md:w-40 px-5 py-2 rounded-3xl border border-1 border-neutral-700">
          <div className="mx-auto flex items-center justify-center gap-2">
            <Image
              src="/assets/icons/tech/strapi.png"
              alt="Strapi icon"
              className="h-5 w-5 md:w-7 md:h-7"
              width={28}
              height={28}
            />
            <label className=" justify-self-end text-center font-medium ">
            CMS
            </label>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default TechStack