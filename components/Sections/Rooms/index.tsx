import Button from "@/components/Atom/Button";
import HeadingText from "@/components/Atom/Heading";
import ParagraphText from "@/components/Atom/Paragraph";
import Card, { RoomCardLoading } from "@/components/Card/room";
import fnConvertToRupiah from "@/lib/helper/converter";
import { deobfuscateId } from "@/lib/helper/idObfuscator";
import { useRooms } from "@/lib/httpCall/hooks/getRooms";
import { motion } from "framer-motion";
import { Bed, Check, CheckCircle, CheckSquare, Heading } from "lucide-react";
import Image from "next/image";
import { useMemo } from "react";

interface IResponseRooms {
  facilities: string[];
  capacity: number;
  id: string;
  description: string;
  name: string;
  price: number;
  discountPrice: number;
  img: string;
}

const Rooms = () => {
  const { data, isLoading, isError } = useRooms();
  const rooms: IResponseRooms[] = useMemo(() => {
    if (data) {
      return data;
    }
    return [];
  }, [data]);

  return (
    <div className="w-full flex flex-col gap-8 lg:gap-12 xl:gap-16 items-center justify-center text-white text-3xl font-bold">
      <HeadingText size="text-2xl" className=" md:text-3xl lg:text-4xl group">
        Halo, silahkan jelajahi{" "}
        <span className="hover:cursor-pointer group-hover:text-[#8EC5FF] group-hover:underline transition-all duration-500">
          Kamar Kami
        </span>
      </HeadingText>

      {isError && <div className="text-red-600">Error</div>}
      {isLoading && (
        <div className="grid grid-cols-2 sm:gap-4 md:gap-8 lg:gap-12 xl:gap-16">
          <RoomCardLoading />
          <RoomCardLoading />
        </div>
      )}
      <div className="grid grid-cols-2 sm:gap-4 md:gap-8 lg:gap-12 xl:gap-16">
        {rooms.length > 0 &&
          rooms.map((room: IResponseRooms, idx: React.Key) => {
            const imgPath = deobfuscateId(room.img);
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card
                  title={room.name}
                  image={
                    <Image
                      width={1080}
                      height={24}
                      src={imgPath.success && imgPath.id ? imgPath.id : ""}
                      alt={`${room.name}.png`}
                      // className="xl:scale-105"
                      className="object-cover h-24 lg:h-48 w-full rounded-2xl"
                      loading={"lazy"}
                    />
                  }
                  onClick={() => {}}
                >
                  <div className="lg:flex lg:flex-grid lg:gap-24">
                    <div className="flex flex-col items-start w-full">
                      {room.facilities.length > 0 &&
                        room.facilities.map(
                          (facility: string, index: React.Key) => {
                            return (
                              <div
                                className="flex justify-start m-0 gap-2 scale-75 md:scale-90 lg:scale-95 xl:scale-100 min-w-full"
                                key={index}
                              >
                                <CheckCircle
                                  width={16}
                                  height={16}
                                  color="#8EC5FF"
                                  className="group-hover:stroke-white transition-colors"
                                />
                                <span className="text-base align-center text-start break-words w-full">
                                  {facility}
                                </span>
                              </div>
                            );
                          },
                        )}
                      {room.description && (
                        <p className="mt-6">{room.description}</p>
                      )}
                    </div>
                    <div className="flex flex-col justify-between mt-4">
                      <div className="bg-[#fff] p-4 rounded-xl h-fit group-hover:shadow-2xl transition-all gap-4 flex flex-col mt-4 lg:mt-0">
                        {/* Header */}
                        <div className="flex flex-col gap-2">
                          <HeadingText
                            size="text-xl"
                            className="lg:text-2xl text-red-600 group-hover:animate-pulse"
                          >
                            {fnConvertToRupiah(room.discountPrice)}
                          </HeadingText>
                          <HeadingText className="lg:text-lg line-through">
                            {fnConvertToRupiah(room.price)}
                          </HeadingText>
                        </div>
                        <ParagraphText
                          className="h-0 opacity-0 group-hover:opacity-100 group-hover:h-fit transition-all max-w-full"
                          size="text-sm"
                        >
                          Tunggu apalagi? booking sekarang!
                        </ParagraphText>
                        <Button label="Booking Sekarang" onClick={() => {}} />
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
      </div>
    </div>
  );
};

export default Rooms;
