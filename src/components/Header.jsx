import { useState } from "react"
import HamburgerMenu from "react-hamburger-menu"
import tw, { styled } from "twin.macro"
import {BsCartFill, BsHeartFill, BsPerson, BsPersonFill, BsSearch} from 'react-icons/bs'

const StyledHeader = styled.header`
  ${tw`bg-red-600 h-12 text-white flex items-center px-4`};
  #bottomNav {
    box-shadow: var(--shadow-4);
  }
  svg {
    fill: var(--gray-7);
  }
  #searchIcon {
    fill: white;
  }
`

const Logo = () => (
  <a href="/">
    <img src="images/logo.png" className="invert w-[110px]" alt="" />
  </a>
)

const BottomNav = () => {
  const [open, setOpen] = useState(false)
  return (
  <div id="bottomNav" className="fixed bottom-5 left-5 right-5 h-16 rounded-full flex items-center px-6">
    <div className="flex w-full gap-6 justify-between">
    <div className="flex items-center">
      <HamburgerMenu isOpen={open} menuClicked={() => setOpen(!open)} className="cursor-pointer" width={27} height={15} />
    </div>
      <button>
        <BsHeartFill color="black" className="text-2xl" />
      </button>
      <button className="bg-red-500 p-2 h-12 w-12 flex items-center justify-center rounded-full">
        <BsSearch id="searchIcon" className="text-2xl" />
      </button>
      <button>
        <BsCartFill color="black" className="text-2xl" />
      </button>
      <button>
        <BsPersonFill color="black" size={27} />
      </button>
    </div>
  </div>
)
}

const Header = () => {
  return (
    <StyledHeader>
      <Logo />
      <BottomNav />
    </StyledHeader>
  )
}
export default Header
