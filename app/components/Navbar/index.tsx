"use client"

import { ReactElement, useState } from "react"
import Link from "next/link"

const Navbar = (): ReactElement => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleClick = (): void => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  return (
    <nav className="text-xl font-medium">
      <div className="container mx-auto flex items-center justify-end py-6 md:py-9">
        <div className="hidden lg:flex space-x-16 text-lg md:text-xl">
          <Link href="#about" className="hover:text-yellow-500 drop-shadow-sm">About</Link>
          <Link href="#projects" className="hover:text-yellow-500 drop-shadow-sm">Projects</Link>
          <Link href="#contacts" className="hover:text-yellow-500 drop-shadow-sm">Contact me</Link>        
        </div>
        <button 
          id="menu-btn" aria-label="Mobile hamburger icon" 
          type="button"
          className="flex items-center p-3 md:p-6"
          onClick={handleClick}>
          <div 
            className={`${mobileMenuOpen ? 'open' : ''} block hamburger lg:hidden focus:outline-none`}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </div>
        </button>
      </div>

      <div className="lg:hidden">
        <div id="menu" className={`${!mobileMenuOpen && 'hidden'} absolute flex flex-col gap-4 items-center self-end py-8 font-bold rounded-lg
         bg-neutral-200 text-neutral-900 sm:w-auto sm:self-center left-6 right-6 drop-shadow-md mx-auto md:mx-8`}>
          <Link href="#about">About</Link>            
            <span className="w-4/5 mx-auto border border-solid border-b-1 border-gray-300 drop-shadow-sm"></span>
          <Link href="#projects">Projects</Link>
            <span className="w-4/5 mx-auto border border-solid border-b-1 border-gray-300 drop-shadow-sm"></span>
          <Link href="#contacts">Contact me</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar