import Link from "next/link";
import { ReactElement } from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="flex flex-wrap items-center justify-between mx-auto p-8">
        <Link href={"/"} className="text-5xl text-white font-semibold">
          RL
        </Link>
        <div className="menu"></div>
      </div>
    </nav>
  );
};

export default Navbar;
