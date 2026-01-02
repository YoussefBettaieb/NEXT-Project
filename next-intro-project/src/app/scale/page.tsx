import ScaleImg from "public/scale.jpg";
import Hero from "@/components/hero";

export default function Scale() {
  return (
    <Hero
      imgData={ScaleImg}
      imgAlt="car factory"
      title="Professional Cloud Hosting"
    />
  );
}
