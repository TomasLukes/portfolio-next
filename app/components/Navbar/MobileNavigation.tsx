"use client";

import { ReactElement, useState } from "react";
import Link from "next/link";
import clsx from "clsx";

import { navigationConfig } from "@/components/Navbar/config";

const MobileNavigation = (): ReactElement => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClick = (): void => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="lg:hidden">
      <button
        id="menu-btn"
        aria-label="Mobile hamburger icon"
        type="button"
        className="ml-auto lg:hidden flex items-center p-3 md:p-6"
        onClick={handleClick}
      >
        <div
          className={clsx("block hamburger lg:hidden focus:outline-none", {
            open: mobileMenuOpen,
          })}
        >
          <span className="hamburger-top" />
          <span className="hamburger-middle" />
          <span className="hamburger-bottom" />
        </div>
      </button>

      <div
        id="menu"
        className={clsx(
          "absolute flex flex-col gap-4 items-center self-end py-8 font-bold rounded-lg bg-neutral-200 text-neutral-900 sm:w-auto sm:self-center left-4 right-4 drop-shadow-md mx-auto md:mx-8",
          { hidden: !mobileMenuOpen },
        )}
      >
        {navigationConfig.map((item, index) => {
          const isLastItem: boolean = index === navigationConfig.length - 1;

          return (
            <>
              <Link
                key={item.label}
                href="#about"
                className="hover:text-yellow-500 drop-shadow-sm"
              >
                {item.label}
              </Link>
              {!isLastItem && (
                <span className="w-4/5 mx-auto border border-solid border-b-1 border-gray-300 drop-shadow-sm" />
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNavigation;
