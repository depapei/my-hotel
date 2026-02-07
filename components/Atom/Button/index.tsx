const Button = (props: {
  label: String;
  icon?: React.ReactNode;
  onClick: () => void;
}) => {
  const { label, icon, onClick } = props;
  return (
    <>
      <button
        className="cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-[#FFE07C] bg-opacity-80 text-[#000000] rounded-3xl hover:bg-opacity-70 transition font-semibold shadow-md"
        onClick={onClick}
      >
        {icon}
        {label}
        <div className="absolute opacity-0 -bottom-full rounded-md py-2 px-2 bg-[#FFE07C] bg-opacity-70 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg">
          {label}
        </div>
      </button>
      ;
    </>
  );
};
