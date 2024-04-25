import Image from "next/image"
import { ReactElement } from "react"

const Timeline = (): ReactElement => {
  return (
    <ol id="timeline" className="h-full ml-4 md:ml-0 border-l-4 border-neutral-200 ">
      <li className="pl-8 pb-4 pt-6 relative">
        <Image
          src="/assets/icons/jobs/akcenta.png"
          alt=""
          className="absolute top-6 left-[-2px] w-8 h-8 rounded-full transform -translate-x-1/2" 
          width={32}
          height={32}
        />
        <h5 className="text-xl font-semibold">Frontend developer</h5>
        <div className="pb-2">
          <span>akcenta.digital</span><span> • </span><span>07/2023</span>
        </div>
        <p className="text-sm">
          Developing strategic projects for fintech using modern technologies (React, Next.js, TypeScript, Tailwind CSS, and others).
        </p>
      </li>
      <li className="pl-8 pb-8 pt-6 relative">
        <Image
          src="/assets/icons/jobs/hostynska.png"
          alt=""
          className="absolute top-6 left-[-2px] w-8 h-8 rounded-full transform -translate-x-1/2"
          width={32}
          height={32}
        />
        <h5 className="text-lg font-semibold">ICT teacher</h5>
        <div className="pb-2 text-sm">
          <span>ZS Hostynska</span><span> • </span><span>09/2019-06/2023</span>
        </div>
        <p className="text-xs">
          {`Teaching computer science, implementing programming into the curriculum, supporting the school's transition to digitalization.`}
        </p>
      </li>

      <li className="pl-8 pb-8 relative">
        <Image
          src="/assets/icons/jobs/CT.png" 
          alt=""
          className="absolute left-[-2px] w-8 h-8 rounded-full transform -translate-x-1/2"
          width={32}
          height={32}
        />
        <h5 className="text-lg font-semibold">Post Production Coordinator</h5>
        <div className="text-sm pb-2">
          <span>Czech public TV</span><span> • </span><span>07/2018-07/2020</span>
        </div>
        <p className="text-xs">
          Managing post-production of movies, TV series and documentaries. Ensuring smooth collaboration with departments across the organization.
        </p>
      </li>

      <li className="pl-8 pb-8 relative">
        <h5 className="text-lg font-semibold">Audio Engineer</h5>
        <div className="text-sm pb-2">
          <span>Czech public TV</span><span> • </span><span>09/2013-06/2018</span>
        </div>
        <p className="text-xs">
          Working with audio equipment (hardware/software), collaboration in delivering the required technical solutions for a given project.
        </p>
      </li>

      <li className="pl-8 pb-8 relative">
        <Image
          src="/assets/icons/jobs/Panska.png" 
          alt=""
          className="absolute left-[-2px] w-8 h-8 rounded-full transform -translate-x-1/2"
          width={32}
          height={32}
        />
        <h5 className="text-lg font-semibold">Audiovisual technology</h5>
        <div className="text-sm pb-2">
          <span>SPSST Panska</span><span> • </span><span>09/2009-06/2013</span>
        </div>
        <p className="text-xs">
          High school education in a technical field with a diploma, focused on audiovisual technology.
        </p>
      </li>

    </ol>
  )
}

export default Timeline