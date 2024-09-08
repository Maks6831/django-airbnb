import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 border-b bg-white z-10">
      <div className="max-w-[1500px] mx-auto px-6 py-5">
        <div className="flex justify-between items-center  ">
          <Link href="/">Django airbnb</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
