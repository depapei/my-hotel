import Button from "@/components/Atom/Button";
import { Rooms } from "@/lib/helper/menuList";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();

  return (
    <section
      className="relative w-full min-h-screen bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-white text-3xl font-bold"
      id="home"
    >
      <img
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
              <p className="text-xl text-white">Google Map Rating</p>
              <div className="grid grid-cols-5">
                {[0, 1, 2, 3, 4].map((idx: React.Key) => (
                  <Star key={idx} strokeWidth={0} fill="#FFE07C" />
                ))}
              </div>
            </div>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-16">
              Selamat Datang
              <span className="block mt-4 text-white pb-4 text-3xl font-medium">
                Memberikan kenyamanan dengan harga yang aman
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
