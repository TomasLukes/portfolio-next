import { ReactElement } from "react"

import TechStackItem from "@/components/TechStack/TechStackItem";

import { techstackData } from "@/components/TechStack/data";

const TechStack = (): ReactElement => {
  return (
    <div className="w-full pt-12 md:mt-36  max-w-[900px] mx-auto">
      <h3 className="text-xl md:text-2xl font-medium mb-3 md:mb-6">
        Techstack
      </h3>
      <ul className="flex flex-wrap gap-4 text-sm md:text-base items-center justify-center md:justify-start">
        {techstackData.map(item => {
          return (
            <TechStackItem 
              key={item.name}
              name={item.name}
              iconSvg={item.iconSvg}
              iconUrl={item.iconUrl}
            />)
        })}
      </ul>
    </div>
  )
}

export default TechStack