export const HeadingText = (props: {
  children: React.ReactNode;
  size?:
    | "text-xs"
    | "text-sm"
    | "text-lg"
    | "text-xl"
    | "text-2xl"
    | "text-3xl"
    | "text-4xl"
    | "text-5xl"
    | "text-6xl"
    | "text-7xl"
    | "text-8xl"
    | "text-9xl";
  color?: string;
  className?: string;
}) => {
  const { children, size='text-lg', className, color='text-[#6B6B6B]' } = props;
  return (
    <h1 className={`font-semibold ${size} ${color} ${className}`}>
      {children}
    </h1>
  );
};

export default HeadingText;
