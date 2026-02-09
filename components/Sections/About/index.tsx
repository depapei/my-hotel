import HeadingText from "@/components/Atom/Heading";
import ParagraphText from "@/components/Atom/Paragraph";
import Card from "@/components/Card";
import { Star, Smile } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-center font-bold gap-32">
      <AboutData />
      <AboutParagraph />
    </div>
  );
};

export const AboutData = () => {
  return (
    <div className="space-y-32">
      <HeadingText size="text-7xl" className="group text-center w-full">
        Testi
        <span className="hover:cursor-pointer group-hover:text-[#8EC5FF] group-hover:underline transition-all duration-500">
          moni
        </span>
      </HeadingText>
      <div className="grid grid-cols-2 gap-8 lg:grid-cols-3">
        <Card
          onClick={() => {}}
          cta="Lihat Rating Positif"
          description="Dengan bintang 4,9 membuktikan bahwa hotel kami melayani dengan hati."
          icon={
            <div className="flex gap-1 justify-center items-center">
              <p className="text-white text-2xl">4.9</p>
              <Star color="white" strokeWidth={4} />
            </div>
          }
        />
        <Card
          onClick={() => {}}
          cta="Lihat pengalaman"
          description="Pengalaman 4 tahun, membuat kita ingin terus berkembang dan selalu hati pelanggan."
          icon={
            <div className="flex gap-1 justify-center items-center">
              <p className="text-white text-xl">4</p>
              <p className="text-white text-lg">Tahun</p>
            </div>
          }
        />
        <Card
          onClick={() => {}}
          cta="Kepuasan"
          description="Semua pelanggan kami selalu puas ketika menginap di hotel kami."
          icon={
            <div className="flex gap-1 justify-center items-center">
              <Smile color="white" strokeWidth={2} size={50} />
            </div>
          }
        />
      </div>
    </div>
  );
};

export const AboutParagraph = () => {
  return (
    <div className="space-y-32">
      <HeadingText
        size="text-3xl"
        className="lg:text-5xl xl:text-7xl group text-center w-full"
      >
        Tentang{" "}
        <span className="hover:cursor-pointer group-hover:text-[#8EC5FF] group-hover:underline transition-all duration-500">
          Kami
        </span>
      </HeadingText>
      <div className="flex flex-col items-center lg:flex-row lg:justify-around">
        <div className="w-[50%] flex flex-col items-center justify-center hover:scale-105  group transition-all duration-500">
          <Image
            src={"/asset/about.png"}
            width={500}
            height={100}
            alt="wajah depan sinar pelangi"
            className={
              "rounded-2xl group-hover:shadow-2xl scale-75 md:scale-90 lg:scale-95 xl:scale-100"
            }
          />
          <HeadingText className="my-4 hidden lg:block">
            Potret Hotel Sinar Pelangi dari depan
          </HeadingText>
        </div>
        <div className="w-[50%] mt-4 lg:mt-0 flex flex-col justify-center">
          <HeadingText size="text-lg" className="mb-4">
            Yuk, kenalan dengan hotel kami!
          </HeadingText>
          <HeadingText size="text-2xl" className="mb-4">
            Hotel Sinar Pelangi mulai beroperasi pada tahun 2022.
          </HeadingText>
          <ParagraphText size="text-xl">
            Kami selalu ingin memberikan kenyamanan kepada pelanggan kami,
            dengan harga yang terjangkau bukan berati pelayanan kami tidak
            terjangkau, kami selalu mendengar masukan dari pelanggan kami, Sinar
            Pelangi menunggu kedatangan kalian.
          </ParagraphText>
        </div>
      </div>
    </div>
  );
};

export default About;
