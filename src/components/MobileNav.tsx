// import icons
import { IoMdClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";

// import Link
import { Link } from "react-router-dom";

// import Motion
import { motion } from "framer-motion";
import { useState } from "react";

type LinkItemProps = {
  to: string;
  children: React.ReactNode;
};

const LinkItem = ({ children, to }: LinkItemProps) => {
  return (
    <Link to={to} className="">
      {children}
    </Link>
  );
};

const menuVariants = {
  hidden: {
    x: "100%",
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="text-primary xl:hidden">
      <div
        className="text-3xl cursor-pointer"
        onClick={() => setOpenMenu(!openMenu)}
      >
        <CgMenuRight />
      </div>
      <motion.div
        variants={menuVariants}
        initial="hidden"
        animate={openMenu ? "show" : ""}
        className="bg-white shadow-xl w-full absolute top-0 right-0 max-w-xs h-screen z-20"
      >
        <div
          className="text-4xl absolute z-30 left-4 top-14 text-primary cursor-pointer"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <IoMdClose />
        </div>
        <ul className="h-full flex flex-col justify-center items-center gap-y-8 text-primary font-bold text-3xl">
          <li onClick={() => setOpenMenu(!openMenu)}>
            <LinkItem to={"/"}>Home</LinkItem>
          </li>
          <li onClick={() => setOpenMenu(!openMenu)}>
            <LinkItem to={"/about"}>About</LinkItem>
          </li>
          <li onClick={() => setOpenMenu(!openMenu)}>
            <LinkItem to={"/portfolio"}>Portfolio</LinkItem>
          </li>
          <li onClick={() => setOpenMenu(!openMenu)}>
            <LinkItem to={"/contact"}>Contact</LinkItem>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default MobileNav;
