import Image from "next/image";
import BannerImage from "@/public/asset/Frame 68.png";

export function Banner() {
  return (
    <div>
      <p>ksksksk </p>
      <Image src={BannerImage} width={1080} height={540} alt="ss" />
    </div>
  );
}

export default Banner;
