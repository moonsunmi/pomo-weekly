import React from "react";
import { Bars3Icon, PlusIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  const handleClick = (e, href) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <div className="flex shadow-md w-full bg-gray-50 mb-4 justify-between">
      <Bars3Icon className="text-lime-600 h-7 m-1 mx-4" />
      <p
        onClick={() => {
          handleClick(event, "/");
        }}
        className=" cursor-pointer font-NotoSansKorea text-xl m-1 text-gray-600 mx-4 text-lime-700  font-semibold"
      >
        POMO WEEKLY
      </p>
      <p
        className=" cursor-pointer"
        onClick={() => handleClick(event, "components/Reservation")}
      >
        <PlusIcon className=" border-2 border-lime-600 bg-lime-300 rounded-full text-lime-600 h-7  content-center align-middle m-1 mx-4 shadow-md font-bold" />
      </p>
    </div>
  );
};

export default Header;
