import Image from "next/image"
import { ReactElement } from "react"

const Timeline = (): ReactElement => {
  return (
    <ol id="timeline" className="h-full border-l-4 border-neutral-200 ">
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
        Vývoj strategických fintech projektů za pomoci moderních technologií (React, Next.js, TS, tailwindcss a další.)
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
        <h5 className="text-lg font-semibold">Učitel IT</h5>
        <div className="pb-2 text-sm">
          <span>ZŠ Hostýnská</span><span> • </span><span>09/2019-06/2023</span>
        </div>
        <p className="text-xs">
          Výuka informatiky, zavedení programování do učebního plánu. Podpora při přechodu školy k digitalizaci.
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
        <h5 className="text-lg font-semibold">Koordinátor postprodukce</h5>
        <div className="text-sm pb-2">
          <span>Česká televize</span><span> • </span><span>07/2018-07/2020</span>
        </div>
        <p className="text-xs">
          Plánování a řízení audiovizuální postprodukce filmů, seriálů a dokumentů. Koordinace spolupráce různých oddělení napříč organizací.
        </p>
      </li>

      <li className="pl-8 pb-8 relative">
        <h5 className="text-lg font-semibold">Technik zvuku</h5>
        <div className="text-sm pb-2">
          <span>Česká televize</span><span> • </span><span>09/2013-06/2018</span>
        </div>
        <p className="text-xs">
          Správa a obsluha zvukových zařízení (HW / SW), spolupráce na dodání požadovaného technického řešení pro daný projekt.
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
        <h5 className="text-lg font-semibold">Audiovizuální technika</h5>
        <div className="text-sm pb-2">
          <span>SPŠST Panská</span><span> • </span><span>09/2009-06/2013</span>
        </div>
        <p className="text-xs">
          Středoškolské vzdělání technického směru s maturitou, zaměřeno na audiovizuální techniku.
        </p>
      </li>

    </ol>
  )
}

export default Timeline