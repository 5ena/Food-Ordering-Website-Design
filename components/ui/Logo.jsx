import React from "react";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <span className="text-[3rem] text-black  font-dancing font-bold cursor-pointer">
        Yemek
      </span>
    </Link>
  );
};

export default Logo;