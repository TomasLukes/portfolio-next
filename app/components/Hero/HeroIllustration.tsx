import { ReactElement } from "react";
import Image from "next/image";

import ProfileImage from "@/public/assets/images/profile-photo/profile-photo.jpg";

const HeroIllustration = (): ReactElement => {
  return (
    <div className="w-1/2">
      <Image
        src={ProfileImage}
        alt="Tomas Lukes profile picture"
        placeholder="blur"
        priority
        className="w-28 md:w-60 lg:w-80 rounded-full object-cover ml-auto md:mr-20 border-solid border-2 border-neutral-300 border-opacity-50"
      />
      <div className="container blob-container">
        <span className="blob-1 blob"></span>
        <span className="blob-2 blob"></span>
        <span className="blob-3 blob"></span>
      </div>
    </div>
  );
};

export default HeroIllustration;
