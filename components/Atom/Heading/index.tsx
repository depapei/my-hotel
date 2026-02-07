export const HeadingText = (props: {
  children: React.ReactNode;
  size: "xl" | "lg" | "md" | "sm";
}) => {
  const { children, size } = props;
  return <h1 className={`font-medium text-${size} `}>{children}</h1>;
};

export default HeadingText;
