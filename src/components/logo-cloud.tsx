import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";

const logos = [
  {
    name: "Boltshift",
    image: "/boltshift.svg",
  },
  {
    name: "FocalPoint",
    image: "/focal.png",
  },
  {
    name: "Hourglass",
    image: "/Hourglass.png",
  },
  {
    name: "Galileo",
    image: "/balileo.png",
  },
  {
    name: "Sisyphus",
    image: "/sisyphus.png",
  },
];
export default function LogoCloud() {
  return (
    <section className="py-16">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-12">
        {logos.map((logo) => (
          <div key={logo.name} className="flex items-center gap-3">
            <Image
              src={logo.image}
              alt={logo.name}
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
            />
            <span className="text-lg font-semibold text-gray-900 dark:text-white">
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
