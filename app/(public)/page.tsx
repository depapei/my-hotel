"use client";
import About from "@/components/Sections/About";
import Contact from "@/components/Sections/Contact";
import Rooms from "@/components/Sections/Rooms";

const Home = () => {
  return (
    <>
      <section className="mt-8 lg:mt-16 xl:mt-32">
        <Rooms />
      </section>
      <section className="mt-8 lg:mt-16 xl:mt-32">
        <About />
      </section>
      <section className="mt-8 lg:mt-16 xl:mt-32">
        <Contact />
      </section>
    </>
  );
};

export default Home;
