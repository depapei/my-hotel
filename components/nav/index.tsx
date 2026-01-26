"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

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
      title: "Rooms",
      href: "/rooms",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Contact",
      href: "/contact",
    },
  ];

  return (
    <nav className="flex flex-row justify-center items-center bg-gray-200 w-fit opacity-95 mt-3  rounded-lg shadow-2xl">
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
              className={`hover:animate-pulse text-blue-500 font-medium ${pathName === href && "text-blue-400 animate-pulse"}`}
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
