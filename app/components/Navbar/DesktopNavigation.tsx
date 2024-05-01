import { ReactElement } from "react";
import Link from "next/link";

import { navigationConfig } from "@/components/Navbar/config";

const DesktopNavigation = (): ReactElement => {
  return (
    <div className="container mx-auto flex items-center justify-end py-6 md:py-9">
      <div className="hidden lg:flex space-x-16 text-lg md:text-xl">
        {navigationConfig.map((item) => {
          return (
            <Link
              key={item.label}
              href="#about"
              className="hover:text-yellow-500 drop-shadow-sm"
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DesktopNavigation;
