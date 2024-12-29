import { ReactElement } from "react";

import { techstackData } from "@/components/TechStack/data";

import TechItem from "./TechItem";

const TechStack = (): ReactElement => {
  return (
    <div className="w-full pt-12 md:mt-36  max-w-[900px] mx-auto">
      <h3 className="text-xl md:text-2xl font-medium mb-3 md:mb-6">Techstack</h3>
      <ul className="w-fit mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 items-start gap-4">
        {techstackData.map((item) => {
          return (
            <TechItem
              key={item.name}
              name={item.name}
              iconSvg={item.iconSvg}
              iconUrl={item.iconUrl}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TechStack;
