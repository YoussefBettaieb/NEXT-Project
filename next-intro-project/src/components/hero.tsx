import type { StaticImageData } from "next/image";
import Image from "next/image";

interface HeroProps {
  imgData: StaticImageData;
  imgAlt: string;
  title: string;
}

export default function Hero(props: HeroProps) {
  return (
    <div className="relative h-screen w-full">
      <Image
        src={props.imgData}
        alt={props.imgAlt}
        fill
        style={{ objectFit: "cover" }}
      />
      <div className="absolute pt-48 flex justify-center items-center w-full h-full">
        <h1 className="text-white text-6xl">{props.title}</h1>
      </div>
    </div>
  );
}
