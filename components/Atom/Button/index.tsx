import { ButtonHTMLAttributes } from "react";

const Button = (props: {
  label?: string;
  icon?: React.ReactNode;
  detail?: React.ReactNode;
  children?: React.ReactNode;
  disabled?: boolean;
  type?: "submit" | "reset" | "button";
  onClick: () => void;
}) => {
  const { label, icon, onClick, detail, children, disabled, type } = props;
  return (
    <>
      <button
        className="cursor-pointer group relative flex gap-1.5 p-2 bg-[#5278F5] bg-opacity-100 text-[#fff] rounded-md hover:bg-opacity-70 transition font-semibold shadow-md justify-center sm:w-full lg:w-fit lg:px-12 px-8"
        onClick={onClick}
        disabled={disabled}
        type={type}
      >
        {icon}
        {label}
        {children}
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
