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
        className="cursor-pointer group relative flex gap-1.5 px-16 py-4 bg-[#5278F5] bg-opacity-100 text-[#fff] rounded-md hover:bg-opacity-70 transition font-semibold shadow-md text-base"
        onClick={onClick}
      >
        {icon}
        {label}
        {detail && (
          <div className="absolute opacity-0 top-full mt-4 rounded-md bg-[#6c8efe] bg-opacity-100 left-1/2 -translate-x-1/2 group-hover:opacity-100 transition-opacity shadow-lg calc(100%+25px) break-words">
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
