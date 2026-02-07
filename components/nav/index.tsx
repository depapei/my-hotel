"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Button from "../Atom/Button";

type MenuType = {
  title: string;
  href: string;
};

export const Navigation = () => {
  const pathName = usePathname();

  useEffect(() => {
    console.log(pathName);
  }, [pathName]);

  const Menus: MenuType[] = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Tentang Kami",
      href: "/about",
    },
    {
      title: "Kamar",
      href: "/rooms",
    },
    {
      title: "Informasi & Kontak",
      href: "/contact",
    },
  ];

  return (
    <nav className="flex flex-row justify-center items-center bg-gradient-to-t bg-black bg-opacity-75 w-fit opacity-95 mt-4  rounded-lg shadow-2xl">
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
              className={`hover:animate-pulse text-white font-medium ${pathName === href && "animate-pulse"} flex justify-center items-center`}
            >
              <li>{title}</li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
