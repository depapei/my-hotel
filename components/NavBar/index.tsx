"use client";
import { useVisibility } from "@/lib/contexts/VisibilityContext";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";

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
  const [mobileMenu, setMobileMenu] = useState<boolean>(false);

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
      {/* Mobile */}
      <nav
        className={`lg:hidden flex flex-col justify-center items-left w-full ${isNavbarVisible || mobileMenu ? "bg-blue-500 opacity-100" : "bg-opacity-0"} transition-all duration-500`}
      >
        <ul className="flex-1 flex flex-row lg:flex-cols p-3 gap-6 items-center">
          <button onClick={() => setMobileMenu(!mobileMenu)}>
            <Menu color="#FFFFFF" />
          </button>
          <Logo isNavbarVisible={isNavbarVisible} />
        </ul>
        <div
          className={`${mobileMenu ? "flex flex-col gap-4 p-4" : " opacity-0 h-0"} transition-all`}
        >
          {Menus.map((menu: MenuType, idx: React.Key) => {
            const { href, title } = menu;
            return (
              <Link
                key={idx}
                href={href}
                onClick={() => {
                  fnSetHash(href);
                  setMobileMenu(!mobileMenu);
                }}
                className={`hover:animate-pulse text-white font-medium ${hash === href && "animate-pulse"} flex justify-center items-center ${mobileMenu ? "opacity-100" : "opacity-0"} transition-all`}
              >
                <span className="items-start w-full text-start justify-start">
                  {title}
                </span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Desktop */}
      <nav
        className={`hidden lg:flex flex-row justify-around items-center w-full ${isNavbarVisible ? "bg-blue-500 opacity-100" : "bg-opacity-0"} transition-all duration-500`}
      >
        <Logo isNavbarVisible={isNavbarVisible} />
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

export const Logo = (props: { isNavbarVisible: boolean }) => {
  const { isNavbarVisible } = props;
  return (
    <div className={` ${isNavbarVisible ? "text-white" : "text-[#BEDBFF]"}`}>
      <p className={`text-base font-semibold`}>Sinar Pelangi</p>
      <p className="text-sm">Hotel</p>
    </div>
  );
};

export default Navigation;
