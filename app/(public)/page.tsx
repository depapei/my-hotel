"use client";
import About from "@/components/Sections/About";
import Contact from "@/components/Sections/Contact";
import Footer from "@/components/Sections/Footer";
import Rooms from "@/components/Sections/Rooms";

const Home = () => {
  return (
    <>
      <span className="opacity-0 mt-8 lg:mt-16" id="rooms">
        -
      </span>
      <section className="mt-8 lg:mt-16">
        <Rooms />
      </section>
      <span className="opacity-0 mt-8 lg:mt-16" id="about">
        -
      </span>
      <section className="mt-8 lg:mt-16">
        <About />
      </section>
      <span className="opacity-0 mt-8 lg:mt-16" id="contact">
        -
      </span>
      <section className="mt-8 lg:mt-16">
        <Contact />
      </section>
    </>
  );
};

export default Home;
