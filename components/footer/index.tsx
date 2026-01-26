import Link from "next/link";

export const Footer = () => {
  return (
    <footer>
      <div className="flex flex-cols lg:flex-row justify-center bg-blue-600 px-12 py-6 text-white gap-12">
        <ol className="flex flex-col gap-3">
          <Link href="/#home" className="hover:animate-pulse">
            <li className="">Home</li>
          </Link>
          <Link href="/rooms" className="hover:animate-pulse">
            <li className="">Rooms</li>
          </Link>
          <Link href="/#about" className="hover:animate-pulse">
            <li className="">About</li>
          </Link>
          <Link href="/#contact" className="hover:animate-pulse">
            <li className="">Contact</li>
          </Link>
        </ol>
        <ol className="flex flex-col gap-3">
          <Link href="/#home" className="hover:animate-pulse">
            <li className="">Home</li>
          </Link>
          <Link href="/rooms" className="hover:animate-pulse">
            <li className="">Rooms</li>
          </Link>
          <Link href="/#about" className="hover:animate-pulse">
            <li className="">About</li>
          </Link>
          <Link href="/#contact" className="hover:animate-pulse">
            <li className="">Contact</li>
          </Link>
        </ol>
      </div>
    </footer>
  );
};

export default Footer;
