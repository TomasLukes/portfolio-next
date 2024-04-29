import { ReactElement } from "react"

import DesktopNavigation from "@/components/Navbar/DesktopNavigation"
import MobileNavigation from "@/components/Navbar/MobileNavigation"

const Navbar = (): ReactElement => {
  return (
    <nav className="text-xl font-medium">
      <DesktopNavigation />
      <MobileNavigation />
    </nav>
  )
}

export default Navbar