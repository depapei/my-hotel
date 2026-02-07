export const ParagraphText = (props: {
  children: React.ReactNode;
  size?:
    | "text-xs"
    | "text-sm"
    | "text-xl"
    | "text-2xl"
    | "text-3xl"
    | "text-4xl"
    | "text-5xl"
    | "text-6xl"
    | "text-7xl"
    | "text-8xl"
    | "text-9xl";
  className?: string;
}) => {
  const { children, size, className } = props;
  return (
    <p className={`font-normal ${size} text-[#6C6C6C] ${className}`}>
      {children}
    </p>
  );
};

export default ParagraphText;
