import Card from "@/components/cards";
import { Hero } from "@/components/hero";

export const Home = () => {
  return (
    <article>
      <Hero />
      <section className="mt-12 flex flex-col md:flex-row gap-6">
        <Card />
        <Card />
        <Card />
      </section>
      <section className="mt-12">About</section>
      <section className="mt-12">Contact</section>
    </article>
  );
};

export default Home;
