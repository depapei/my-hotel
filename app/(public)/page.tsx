"use client";
import Button, { DetailButtonText } from "@/components/Atom/Button";
import About from "@/components/Sections/About";
import Contact from "@/components/Sections/Contact";
import Rooms from "@/components/Sections/Rooms";
import { Download } from "lucide-react";

const Home = () => {
  return (
    <>
      <section className="mt-12">
        <Rooms />
      </section>
      <section className="mt-12">
        <About />
      </section>
      <section className="mt-12">
        <Contact />
      </section>
    </>
  );
};

export default Home;
