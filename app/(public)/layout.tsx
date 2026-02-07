import Navigation from "@/components/nav";

const PublicLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div className="fixed flex justify-center items-center w-full">
        <Navigation />
      </div>
      <div className="mx-auto container">
        <div className="mt-24 mb-8">{children}</div>
      </div>
    </div>
  );
};

export default PublicLayout;
