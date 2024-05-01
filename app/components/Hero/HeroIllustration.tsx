import { ReactElement } from "react";
import Image from "next/image";

const HeroIllustration = (): ReactElement => {
  return (
    <div className="w-1/2">
      <Image
        src="/assets/images/profile-photo/profile-photo.jpg"
        alt=""
        className="w-28 md:w-60 lg:w-80 rounded-full object-cover ml-auto md:mr-20 border-solid border-2 border-neutral-300 border-opacity-50"
        width={320}
        height={320}
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
