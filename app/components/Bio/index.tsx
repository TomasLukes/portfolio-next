import { ReactElement } from "react"

import { bioData } from "@/components/Bio/data"

const Bio = (): ReactElement => {
  return (
    <div className="">
      <h5 className="text-lg md:text-xl font-semibold mb-1 md:mb-3">
        Další informace
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
      <div className="md:w-3/5 flex items-center gap-6 md:gap-8">
        <h5 className="text-lg md:text-xl font-semibold">
          Kompletní CV ke stažení
        </h5>
        <a href="https://github.com/TomasLukes/portfolio-page/raw/main/public/assets/CV_Tomas_Lukes.pdf" download>
          <svg className="w-6 md:w-7 fill-neutral-100 hover:fill-yellow-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
            <path d="M64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V160H256c-17.7 0-32-14.3-32-32V0H64zM256 0V128H384L256 0zM216 232V334.1l31-31c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-72 72c-9.4 9.4-24.6 9.4-33.9 0l-72-72c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l31 31V232c0-13.3 10.7-24 24-24s24 10.7 24 24z"/>
          </svg>
        </a>
      </div>
    </div> 
  )
}

export default Bio