export const RoomCard = (props: {
  onClick: () => void;
  image: React.ReactNode;
  children: React.ReactNode;
  title: string;
}) => {
  const { onClick, image, children, title } = props;

  return (
    <div
      className="group relative overflow-hidden bg-white rounded-2xl px-6 pt-12 pb-10 shadow-2xl ring-1 ring-gray-900/5 transition-all duration-500 transform hover:scale-105 hover:shadow-3xl "
      onClick={onClick}
    >
      <span className="absolute top-0 left-0 z-0 h-24 w-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-75 transition-all duration-500 transform group-hover:scale-[20]"></span>
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="flex w-full justify-center items-center">{image}</div>
        <div className="mt-6 text-3xl leading-8 text-gray-700 transition-all duration-500 group-hover:text-white">
          <p>{title}</p>
        </div>
        <div className="space-y-6 pt-6 text-lg leading-8 text-gray-700 transition-all duration-500 group-hover:text-white">
          <div className="font-medium">{children}</div>
        </div>
      </div>
    </div>
  );
};

export const RoomCardLoading = () => {
  return (
    <div className="overflow-hidden bg-gray-50 rounded-2xl px-6 pt-12 pb-10 shadow-2xl ring-1 ring-gray-900/5 transition-all duration-500 transform hover:shadow-3xl min-w-[500px] min-h-[500] animate-pulse">
      <span className="absolute top-0 left-0 z-0 h-24 w-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-75 transition-all duration-500 transform group-hover:scale-[20]"></span>
      <div className="z-10 mx-auto min-w-3xl">
        <div className="flex w-full justify-center items-center">
          <div className="bg-neutral-400/50 w-full h-32 animate-pulse rounded-md"></div>
        </div>
        <div className="mt-6 text-3xl leading-8 text-gray-700 transition-all duration-500 group-hover:text-white">
          <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
        </div>
        <div className="space-y-6 pt-6 text-lg leading-8 min-w-3xl">
          <div className="font-medium flex flex-col gap-4">
            <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
            <div className="bg-neutral-400/50 w-4/5 h-4 animate-pulse rounded-md"></div>
            <div className="bg-neutral-400/50 w-full h-4 animate-pulse rounded-md"></div>
            <div className="bg-neutral-400/50 w-2/4 h-4 animate-pulse rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
