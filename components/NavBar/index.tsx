"use client";
import { useVisibility } from "@/lib/contexts/VisibilityContext";
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
    title: "Kamar",
    href: "#rooms",
  },
  {
    title: "Tentang Kami",
    href: "#about",
  },
  {
    title: "Informasi & Kontak",
    href: "#contact",
  },
];

const Navigation = () => {
  const [hash, setHash] = useState<string>("");
  const { isNavbarVisible } = useVisibility();

  const fnSetHash = (hash: string) => {
    setHash(hash);
  };

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        setHash("");
      }, 3250);
    }
  }, [hash]);

  return (
    <>
      <nav className="lg:hidden flex flex-row justify-center items-center w-fit mt-4 rounded-lg">
        <ul className="flex-1 flex flex-row lg:flex-cols p-3 gap-6">
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

      {/* Desktop */}
      <nav
        className={`hidden lg:flex flex-row justify-around items-center w-full ${isNavbarVisible ? "bg-blue-500 opacity-100" : "bg-opacity-0"} transition-all duration-500`}
      >
        <div
          className={` ${isNavbarVisible ? "text-white" : "text-[#BEDBFF]"}`}
        >
          <p className={`text-base font-semibold`}>Sinar Pelangi</p>
          <p className="text-sm">Hotel</p>
        </div>
        <ul className="flex flex-row lg:flex-cols p-3 gap-6">
          {Menus.map((menu: MenuType, idx: React.Key) => {
            const { href, title } = menu;
            return (
              <Link
                onClick={() => fnSetHash(href)}
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
