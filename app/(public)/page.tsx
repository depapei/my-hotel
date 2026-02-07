"use client";
import About from "@/components/Sections/About";
import Contact from "@/components/Sections/Contact";
import Rooms from "@/components/Sections/Rooms";
import Banner from "@/components/testkomponen";

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
      <section className="mt-16">
        <Banner />
      </section>
    </>
  );
};

export default Home;
