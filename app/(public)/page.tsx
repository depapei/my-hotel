"use client";
import About from "@/components/Sections/About";
import Contact from "@/components/Sections/Contact";
import Rooms from "@/components/Sections/Rooms";

const Home = () => {
  return (
    <>
      <section className="mt-16">
        <About />
      </section>
      <section className="mt-16">
        <Rooms />
      </section>
      <section className="mt-16">
        <Contact />
      </section>
    </>
  );
};

export default Home;
