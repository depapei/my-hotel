const Button = (props: {
  label: String;
  icon?: React.ReactNode;
  detail?: React.ReactNode;
  onClick: () => void;
}) => {
  const { label, icon, onClick, detail } = props;
  return (
    <>
      <button
        className="cursor-pointer group relative flex gap-1.5 px-8 py-4 bg-[#FFE07C] bg-opacity-80 text-[#000000] rounded-md hover:bg-opacity-70 transition font-semibold shadow-md"
        onClick={onClick}
      >
        {icon}
        {label}
        {detail && (
          <div className="absolute opacity-0 top-full mt-4 rounded-md bg-[#FFE07C] bg-opacity-100 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg calc(100%+25px) break-words">
            {detail}
          </div>
        )}
      </button>
    </>
  );
};

export const DetailButtonText = (props: { children: React.ReactNode }) => {
  return <div className="px-2 py-2">{props.children}</div>;
};

export default Button;
