import HeadingText from "@/components/Atom/Heading";
import ParagraphText from "@/components/Atom/Paragraph";
import Card from "@/components/Card";
import { Star, Smile } from "lucide-react";

const About = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-center font-bold">
      <AboutParagraph />
      <AboutData />
    </div>
  );
};

export const AboutData = () => {
  return (
    <div>
      <HeadingText size="text-lg" className="mb-4 text-center mt-16">
        Dengan data
      </HeadingText>
      <div className="grid grid-cols-3">
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
    <div className="flex gap-16">
      <div className="w-[50%]">Mending ini jadi gambar</div>
      <div className="w-[50%]">
        <HeadingText size="text-lg" className="mb-4">
          Tentang Kami
        </HeadingText>
        <HeadingText size="text-2xl" className="mb-4">
          Hotel Sinar Pelangi mulai beroperasi pada tahun 2022.
        </HeadingText>
        <ParagraphText size="text-xl">
          Kami selalu ingin memberikan kenyamanan kepada pelanggan kami, dengan
          harga yang terjangkau bukan berati pelayanan kami tidak terjangkau,
          kami selalu mendengar masukan dari pelanggan kami, Sinar Pelangi
          menunggu kedatangan kalian.
        </ParagraphText>
      </div>
    </div>
  );
};

export default About;
