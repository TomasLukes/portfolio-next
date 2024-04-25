import { ReactElement } from "react"
import Image from "next/image";

import { ITechStackItem } from "./prop";

const TechStackItem = ({name, iconSvg, iconUrl }: ITechStackItem): ReactElement => {
    return (
        <li className="flex items-center w-32 md:w-40 h-10 md:h-[50px] rounded-3xl border border-1 border-neutral-700">
            <div className="mx-auto flex items-center justify-center gap-2">
                {
                    iconUrl ?
                        <Image
                        src={`/assets/icons/techstack/${iconUrl}`}
                        alt={`${name} icon`}
                        className="h-5 w-5 md:w-7 md:h-7"
                        width={28}
                        height={28}
                        /> 
                    : 
                        iconSvg
                }
                <label className=" justify-self-end text-center font-medium ">
                    {name}
                </label>
            </div>
        </li>
    )
}

export default TechStackItem