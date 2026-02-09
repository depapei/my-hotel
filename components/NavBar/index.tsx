"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

type MenuType = {
  title: string;
  href: string;
};

export const Menus: MenuType[] = [
  {
    title: "Home",
    href: "#home",
  },
  {
    title: "Tentang Kami",
    href: "#about",
  },
  {
    title: "Kamar",
    href: "#rooms",
  },
  {
    title: "Informasi & Kontak",
    href: "#contact",
  },
];

const Navigation = () => {
  const [hash, setHash] = useState<string>("");

  const fnSetHash = (hash: string) => {
    setHash(hash);
  };

  return (
    <>
      <nav className="opacity-95 lg:hidden flex flex-row justify-center items-center bg-gradient-to-t bg-black bg-opacity-75 w-fit mt-4  rounded-lg shadow-2xl">
        <ul className="flex flex-row lg:flex-cols p-3 gap-6">
          {Menus.map((menu: MenuType, idx: React.Key) => {
            const { href, title } = menu;
            return (
              <Link
                key={idx}
                href={href}
                onClick={() => fnSetHash(href)}
                className={`hover:animate-pulse text-white font-medium ${hash === href && "animate-pulse"} flex justify-center items-center`}
              >
                <li>{title}</li>
              </Link>
            );
          })}
        </ul>
      </nav>
      <nav className="hidden lg:flex flex-row justify-center items-center bg-gradient-to-t bg-black bg-opacity-75 w-fit lg:opacity-95 mt-4  rounded-lg shadow-2xl">
        {/* <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp2bJAndZZhiaNNogkeVbbY1Lq7aRxXx70cA&s"
            alt="logo"
            height={10}
            width={10}
            /> */}
        <ul className="flex flex-row lg:flex-cols p-3 gap-6">
          {Menus.map((menu: MenuType, idx: React.Key) => {
            const { href, title } = menu;
            return (
              <Link
                key={idx}
                href={href}
                className={`hover:animate-pulse text-white font-medium ${hash === href && "animate-pulse"} flex justify-center items-center`}
              >
                <li>{title}</li>
              </Link>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
