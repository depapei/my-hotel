import About from "@/components/Sections/About";
import Contact from "@/components/Sections/Contact";
import Hero from "@/components/Sections/Hero";
import Rooms from "@/components/Sections/Rooms";

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
