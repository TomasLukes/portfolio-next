import { ReactElement } from "react";
import Image from "next/image";

import { timelineData } from "@/components/Timeline/data";

const Timeline = (): ReactElement => {
  return (
    <ol id="timeline" className="h-full ml-4 md:ml-0 border-l-4 border-neutral-200 ">
      {timelineData.map((job) => {
        return (
          <li key={`${job.company}-${job.headline}`} className="pl-8 pt-4 pb-2 relative">
            {Boolean(job.image) && (
              <Image
                src={`/assets/icons/jobs/${job.image}`}
                alt=""
                className="absolute top-6 left-[-2px] w-8 h-8 rounded-full transform -translate-x-1/2"
                width={32}
                height={32}
              />
            )}
            <h5 className="text-xl font-semibold">{job.headline}</h5>
            <div className="flex items-center pb-1">
              <p>{job.company}</p>
              <span className="px-1.5"> • </span>
              <div className="flex text-sm">
                <p>{job.startsFromDate}</p>
                {Boolean(job.upToDate) && (
                  <>
                    <span className="px-0.5"> - </span>
                    <p>{job.upToDate}</p>
                  </>
                )}
              </div>
            </div>
            <p className="text-sm">{job.description}</p>
          </li>
        );
      })}
    </ol>
  );
};

export default Timeline;
