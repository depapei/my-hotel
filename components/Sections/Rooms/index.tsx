import Button from "@/components/Atom/Button";
import HeadingText from "@/components/Atom/Heading";
import ParagraphText from "@/components/Atom/Paragraph";
import Card, { RoomCardLoading } from "@/components/Card/room";
import DragCloseDrawer from "@/components/Drawer";
import fnConvertToRupiah from "@/lib/helper/converter";
import { deobfuscateId } from "@/lib/helper/idObfuscator";
import { useRooms } from "@/lib/httpCall/hooks/getRooms";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { SubmitHandler, useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import bookingValidate from "@/lib/validateForm/Booking";
import dayjs from "dayjs";

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

type inputs = yup.InferType<typeof bookingValidate>;

const Rooms = () => {
  const { data, isLoading, isError } = useRooms();
  const rooms: IResponseRooms[] = useMemo(() => {
    if (data) {
      return data;
    }
    return [];
  }, [data]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRoom, setSelected] = useState<any>();
  const {
    register,
    handleSubmit,
    reset,
    control,
    setValue,
    formState: { errors },
  } = useForm<inputs>({
    resolver: yupResolver(bookingValidate),
  });

  useEffect(() => console.log(errors), [errors]);

  const onSubmit: SubmitHandler<inputs> = (data) => {
    const message = `Halo! nama saya ${data.guestName}, saya tertarik untuk booking kamar di hotel anda dengan rincian:\n\nKamar: ${data.roomName}\nTanggal: ${data.start} s/d ${data.end}\n\nTolong infokan lebih lanjut ya, terima kasih :)`;
    const phoneNumber = process.env.NOMOR_HP || "+6281398490410";
    sendWhatsAppMessage(phoneNumber, message);
  };

  const sendWhatsAppMessage = (phoneNumber: string, message: string) => {
    const formattedPhoneNumber = phoneNumber.replace(/[\s\-()]/g, "");

    const encodedMessage = encodeURIComponent(message);

    const whatsappURL = `https://wa.me/${formattedPhoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="w-full flex flex-col gap-4 items-center justify-center text-white text-3xl font-bold">
      <div className="text-center">
        <HeadingText size="text-4xl" className="group">
          Lihat Kamar Kami
        </HeadingText>
        <HeadingText
          size="text-xl"
          className="text-center"
          color="text-blue-500"
        >
          Disinilah kenyamanan tercipta dengan harga yang terjangkau
        </HeadingText>
      </div>

      {isError && <div className="text-red-600">Error</div>}
      {isLoading && (
        <div className="flex flex-col w-full gap-6 p-6 lg:grid lg:grid-cols-2 sm:gap-4 md:gap-8 lg:gap-12 xl:gap-16">
          <RoomCardLoading />
          <RoomCardLoading />
        </div>
      )}
      <div className="flex flex-col w-full gap-6 p-6 lg:grid lg:grid-cols-2 sm:gap-4 md:gap-8 lg:gap-12 xl:gap-16">
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
                      className="object-cover h-48 w-full rounded-2xl"
                      loading={"lazy"}
                    />
                  }
                  onClick={() => {}}
                >
                  <div className="lg:flex lg:flex-grid">
                    <div className="flex flex-col items-start w-full">
                      {room.facilities.length > 0 &&
                        room.facilities.map(
                          (facility: string, index: React.Key) => {
                            return (
                              <div
                                className="flex m-0 gap-2 min-w-full"
                                key={index}
                              >
                                <CheckCircle
                                  width={16}
                                  height={16}
                                  color="#8EC5FF"
                                  className="group-hover:stroke-white transition-colors"
                                />
                                <span className="text-base align-start text-start break-words w-full">
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
                    <div className="flex flex-col justify-between mt-2 lg:mt-0">
                      <div className="bg-[#fff] p-4 rounded-xl h-fit group-hover:shadow-2xl transition-all gap-4 flex flex-col">
                        {/* Header */}
                        <div className="flex flex-col gap-2">
                          <HeadingText
                            size="text-lg"
                            className="lg:text-2xl text-red-600 group-hover:animate-pulse"
                          >
                            {fnConvertToRupiah(room.discountPrice)}
                          </HeadingText>
                          <HeadingText
                            size="text-xs"
                            className="lg:text-lg line-through"
                          >
                            {fnConvertToRupiah(room.price)}
                          </HeadingText>
                        </div>
                        <ParagraphText
                          size="text-xs"
                          className="lg:opacity-0 group-hover:opacity-100 group-hover:h-fit transition-all max-w-full"
                        >
                          Tunggu apalagi? booking sekarang!
                        </ParagraphText>
                        <Button
                          label="Booking Sekarang"
                          onClick={() => {
                            setSelected({
                              ...room,
                              imgPath: imgPath,
                            });
                            setIsOpen(true);
                            reset();
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        <DragCloseDrawer open={isOpen} setOpen={setIsOpen}>
          <HeadingText className="w-full text-center">
            Booking Sekarang!
          </HeadingText>
          <div className="flex flex-col justify-evenly lg:flex-row gap-4 py-8">
            {selectedRoom && (
              <div className="">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Card
                    title={selectedRoom.name}
                    image={
                      <Image
                        width={1080}
                        height={24}
                        src={
                          selectedRoom.imgPath.success &&
                          selectedRoom.imgPath.id
                            ? selectedRoom.imgPath.id
                            : ""
                        }
                        alt={`${selectedRoom.name}.png`}
                        // className="xl:scale-105"
                        className="object-cover h-48 w-full rounded-2xl"
                        loading={"lazy"}
                      />
                    }
                    onClick={() => {}}
                  >
                    <div className="lg:flex lg:flex-grid">
                      <div className="flex flex-col items-start w-full">
                        {selectedRoom.facilities.length > 0 &&
                          selectedRoom.facilities.map(
                            (facility: string, index: React.Key) => {
                              return (
                                <div
                                  className="flex m-0 gap-2 min-w-full"
                                  key={index}
                                >
                                  <CheckCircle
                                    width={16}
                                    height={16}
                                    color="#8EC5FF"
                                    className="group-hover:stroke-white transition-colors"
                                  />
                                  <span className="text-base align-start text-start break-words w-full">
                                    {facility}
                                  </span>
                                </div>
                              );
                            },
                          )}
                        {selectedRoom.description && (
                          <p className="mt-6">{selectedRoom.description}</p>
                        )}
                      </div>
                      <div className="flex flex-col justify-between mt-2 lg:mt-0">
                        <div className="bg-[#fff] p-4 rounded-xl h-fit group-hover:shadow-2xl transition-all gap-4 flex flex-col">
                          {/* Header */}
                          <div className="flex lg:flex-col gap-2">
                            <HeadingText
                              size="text-lg"
                              className="lg:text-2xl text-red-600 group-hover:animate-pulse"
                            >
                              {fnConvertToRupiah(selectedRoom.discountPrice)}
                            </HeadingText>
                            <HeadingText
                              size="text-xs"
                              className="lg:text-lg line-through"
                            >
                              {fnConvertToRupiah(selectedRoom.price)}
                            </HeadingText>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </div>
            )}
            <div className="text-gray-300 lg:w-1/2 mt-4 lg:mt-0">
              <form
                className="w-full space-y-4 flex flex-col"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nama Panggilan{" "}
                    <span className="text-red-600 text-sm">*</span>
                  </label>
                  <Controller
                    name="guestName"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="text"
                        placeholder={`Halo, tolong sebutkan nama kamu! :D`}
                        onChange={(e: any) => {
                          const val = e.target.value;
                          field.onChange(val);
                        }}
                        className={`placeholder:font-normal text-base border p-4 w-full rounded-2xl text-gray-600 ${errors.guestName ? "border-red-600 animate-pulse placeholder:text-red-600 focus:outline-red-600" : "border-gray-600 focus:outline-blue-600"} `}
                      />
                    )}
                  />
                  {errors.guestName && (
                    <p className="mt-1 text-sm text-red-600 font-normal">
                      {errors.guestName.message}
                    </p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tanggal Check-In{" "}
                    <span className="text-red-600 text-sm">*</span>
                  </label>
                  <Controller
                    name="startDate"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="date"
                        className={`placeholder:font-normal text-base border p-4 w-full rounded-2xl text-gray-600 ${
                          errors.startDate
                            ? "border-red-600 animate-pulse placeholder:text-red-600 focus:outline-red-600"
                            : "border-gray-600 focus:outline-blue-600"
                        }`}
                        onChange={(e: any) => {
                          const start = e.target.value;
                          field.onChange(start);
                          setValue("start", dayjs(start).format("DD MMM YYYY"));
                        }}
                        placeholder="Pilih tanggal mulai"
                      />
                    )}
                  />
                  {errors.startDate && (
                    <p className="mt-1 text-sm text-red-600 font-normal">
                      {errors.startDate.message}
                    </p>
                  )}
                </div>

                {/* End Date */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Tanggal Check-Out{" "}
                    <span className="text-red-600 text-sm">*</span>
                  </label>
                  <Controller
                    name="endDate"
                    control={control}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="date"
                        className={`placeholder:font-normal text-base border p-4 w-full rounded-2xl text-gray-600 ${
                          errors.endDate
                            ? "border-red-600 animate-pulse placeholder:text-red-600 focus:outline-red-600"
                            : "border-gray-600 focus:outline-blue-600"
                        }`}
                        onChange={(e: any) => {
                          const end = e.target.value;
                          field.onChange(end);
                          setValue("end", dayjs(end).format("DD MMM YYYY"));
                        }}
                        placeholder="Pilih tanggal selesai"
                      />
                    )}
                  />
                  {errors.endDate && (
                    <p className="mt-1 text-sm text-red-600 font-normal">
                      {errors.endDate.message}
                    </p>
                  )}
                </div>
                {selectedRoom && (
                  <>
                    <input
                      type="text"
                      {...register("roomName")}
                      className="hidden"
                      defaultValue={selectedRoom.name}
                    />
                    <input
                      type="text"
                      {...register("roomId")}
                      className="hidden"
                      defaultValue={selectedRoom.id}
                    />
                  </>
                )}
                <Controller
                  name="start"
                  control={control}
                  render={({ field }) => (
                    <input {...field} type="text" className={`hidden`} />
                  )}
                />
                <Controller
                  name="end"
                  control={control}
                  render={({ field }) => (
                    <input {...field} type="text" className={`hidden`} />
                  )}
                />
                <input
                  className="cursor-pointer group relative flex gap-1.5 p-2 bg-[#5278F5] bg-opacity-100 text-[#fff] rounded-md hover:bg-opacity-70 transition font-semibold shadow-md justify-center sm:w-full lg:w-fit lg:px-12 px-8 text-base"
                  type="submit"
                />
              </form>
            </div>
          </div>
        </DragCloseDrawer>
      </div>
    </div>
  );
};

export default Rooms;
