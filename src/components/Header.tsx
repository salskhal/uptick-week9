// import components
import Socials from "./Socials";
import Logo from "../img/header/logo.svg";
import MobileNav from "./MobileNav";

// import Link
import { Link } from "react-router-dom";

type LinkItemProps = {
  to: string;
  children: React.ReactNode;
};


const LinkItem = ({ children, to }: LinkItemProps) => {
  return (
    <Link to={to} className="text-[#696c6d] hover:text-primary transition">
      {children}
    </Link>
  );
};

const Header = () => {
  return (
    <header className=" fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center">
      <div className="flex flex-col lg:flex-row lg:items-center w-full justify-between">
        {/* logo */}
        <Link to={"/"} className="max-w-[200px]">
          <img src={Logo} alt="Logo" />
        </Link>
        <nav className="hidden xl:flex gap-x-12 font-semibold">
          <LinkItem to={"/"}>Home</LinkItem>
          <LinkItem to={"/about"}>About</LinkItem>
          <LinkItem to={"/portfolio"}>Portfolio</LinkItem>
          <LinkItem to={"/contact"}>Contact</LinkItem>
        </nav>
      </div>
      {/* Socials */}
      <Socials />
      {/* Mobile Nav */}
      <MobileNav />
    </header>
  );
};

export default Header;
