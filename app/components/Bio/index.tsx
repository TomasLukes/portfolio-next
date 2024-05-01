import { ReactElement } from "react"
import Link from "next/link"

import Icons from "@/components/Icons"

import { bioData } from "@/components/Bio/data"

const Bio = (): ReactElement => {
  return (
    <div>
      <h5 className="text-lg md:text-xl font-semibold mb-1 md:mb-3">
        Additional information:
      </h5>
      <div className="md:w-3/5 grid grid-cols-2 gap-4 pb-8 md:pb-12">
        {bioData.map(({label, value}) => {
          return (
            <div key={label} className="flex flex-col">
              <p>{label}</p>
              <p className="font-medium">{value}</p>
            </div>
          )
        })}
      </div>
      <div className="md:w-3/5 flex items-center gap-2 md:gap-4">
        <h5 className="text-lg md:text-xl font-semibold">
          Complete CV in PDF format
        </h5>
        <Link href="./assets/files/CV_Tomas_Lukes.pdf" download target="_blank">   
          <Icons.socials.downloadPDF />
        </Link>
      </div>
    </div> 
  )
}

export default Bio