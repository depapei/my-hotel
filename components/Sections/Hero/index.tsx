import Button from "@/components/Atom/Button";
import { useVisibility } from "@/lib/contexts/VisibilityContext";
import { Rooms } from "@/lib/helper/menuList";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

const Hero = () => {
  const router = useRouter();

  const { setNavbarVisibility, isNavbarVisible } = useVisibility();
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setNavbarVisibility(!entry.isIntersecting);
      },
      { threshold: 0.1 }, // Trigger saat 10% hero masih terlihat
    );

    if (heroRef.current) observer.observe(heroRef.current);
    return () => observer.disconnect();
  }, [setNavbarVisibility]);

  return (
    <section
      ref={heroRef}
      className="relative w-full min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white text-xl lg:text-3xl font-bold"
      id="home"
    >
      <Image
        width={1080}
        height={100}
        src="/asset/hero.png"
        alt="Sinar Pelangi Hero"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Main heading */}

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center max-w-4xl mx-auto flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center"
          >
            <div className="my-8">
              <p className="text-base lg:text-xl text-white">
                Google Map Rating
              </p>
              <div className="grid grid-cols-5">
                {[0, 1, 2, 3, 4].map((idx: React.Key) => (
                  <Star key={idx} strokeWidth={0} fill="#FFE07C" />
                ))}
              </div>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-16">
              Selamat Datang
              <span className="block mt-4 text-white pb-4 text-xl font-medium">
                Harga boleh hemat, tetapi kenyamanan tetap kami utamakan.
                Rasakan pengalaman menginap yang menyenangkan tanpa khawatir
                soal biaya.
              </span>
            </h1>
            <Button
              onClick={() => router.push(Rooms.href)}
              label={`Lihat Kamar`}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
