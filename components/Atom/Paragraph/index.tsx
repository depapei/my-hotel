export const ParagraphText = (props: {
  children: React.ReactNode;
  size: "xl" | "lg" | "md" | "sm";
}) => {
  const { children, size } = props;
  return <h1 className={`font-normal text-${size} `}>{children}</h1>;
};

export default ParagraphText;
