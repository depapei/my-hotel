"use client";
import Navigation from "@/components/NavBar";
import Hero from "@/components/Sections/Hero";
import { usePathname } from "next/navigation";

const PublicLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const pathName = usePathname();
  const isHomePage = pathName === "/";
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="fixed flex justify-center items-center w-full z-50">
        <Navigation />
      </div>
      <article>
        {isHomePage && <Hero />}
        <div className={`mx-auto container ${!isHomePage && "mt-16"}`}>
          <div className="mb-8">{children}</div>
        </div>
      </article>
    </div>
  );
};

export default PublicLayout;
