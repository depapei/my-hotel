import HeadingText from "@/components/Atom/Heading";
import ParagraphText from "@/components/Atom/Paragraph";
import Card from "@/components/Card";
import { Star, Smile, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="w-full bg-white flex flex-col justify-center font-bold gap-32">
      <ContactParagraph />
    </div>
  );
};

export const ContactParagraph = () => {
  return (
    <motion.div className="space-y-32 mb-32 w-full">
      <HeadingText
        size="text-2xl"
        className="text-2xl md:text-3xl lg:text-4xl group text-center w-full"
      >
        Bukan hanya sekedar hotel{" "}
        <span className="hover:cursor-pointer group-hover:text-[#8EC5FF] group-hover:underline transition-all duration-500">
          namun memberikan kenyamanan
        </span>
      </HeadingText>
      <div className="flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-evenly">
        <div className="w-[50%] flex flex-col justify-center">
          <HeadingText size="text-lg" className="mb-4">
            Informasi
          </HeadingText>
          <HeadingText size="text-2xl" className="mb-4">
            Jl. Trikora Maripi, Distrik Manowari Selatan, Kabupaten Manokwari,
            Papua Barat.
          </HeadingText>
          <div className="flex gap-16 w-full">
            <div className="group mb-2 gap-6">
              <HeadingText
                size="text-lg"
                className="mb-2 flex gap-3 text-green-600"
              >
                Whatsapp <MessageCircle />
              </HeadingText>
              <Link href={"https://wa.me/+6282155353122"}>
                <ParagraphText
                  size="text-xl"
                  className="hover:text-green-600 transition-all"
                >
                  +62 821 5535 3122
                </ParagraphText>
              </Link>
              <Link href={"https://wa.me/+6281380624766"}>
                <ParagraphText
                  size="text-xl"
                  className="hover:text-green-600 transition-all"
                >
                  +62 0813 8062 4766
                </ParagraphText>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[50%] flex flex-col items-center justify-center hover:scale-105  group transition-all duration-500">
          <EmbedMap />
        </div>
      </div>
    </motion.div>
  );
};

const EmbedMap = () => {
  return (
    <div className="embed-map-fixed">
      <div className="embed-map-container">
        <iframe
          className="embed-map-frame"
          src="https://maps.google.com/maps?width=600&height=400&hl=en&q=hotel%20sinar%20pelangi&t=&z=14&ie=UTF8&iwloc=B&output=embed"
          title="Sanjaya Lighting Location"
        ></iframe>
        <a
          href="https://classicjoy.games"
          style={{
            fontSize: "2px",
            color: "gray",
            position: "absolute",
            bottom: 0,
            left: 0,
            zIndex: 1,
            maxHeight: "1px",
            overflow: "hidden",
          }}
        >
          Retro Games Online
        </a>
      </div>
      <style jsx>{`
        .embed-map-fixed {
          position: relative;
          text-align: right;
          width: 450px;
          height: 250px;
        }
        .embed-map-container {
          overflow: hidden;
          background: none !important;
          width: 450px;
          height: 250px;
        }
        .embed-map-frame {
          width: 450px !important;
          height: 250px !important;
        }
      `}</style>
    </div>
  );
};

export default Contact;
