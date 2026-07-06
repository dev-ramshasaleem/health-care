import { Button } from "@/components/ui/button";
import Navbar from "@/src/components/navbar";
import Image from "next/image";
import Link from "next/link";
import LogoCloud from "../components/logo-cloud";
import Problems from "../components/problems";
import Features from "../components/features";
import Blogs from "../components/blogs";
import Price from "../components/price";
import Faq from "../components/faq";
import Demo from "../components/demo";
import About from "../components/about";
import { Spotlight } from "../components/ui/spotlight-new";

export default function Home() {
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 right-0 h-[900px] lg:h-[1000px] -z-10 ">
        <Spotlight
          width={900}
          height={1000}
          duration={8}
          xOffset={7}
          gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(59,130,246,0.35) 0%, rgba(59,130,246,0.15) 50%, transparent 80%)"
          gradientSecond="radial-gradient(50% 50% at 50% 50%,   rgba(59,130,246,0.15) 50%, transparent 100%)"
          gradientThird="radial-gradient(50% 50% at 50% 50%, rgba(6,182,212,0.2) 0%, transparent 100%)"
        />
      </div>
      <Navbar />
      <main className="w-full">
        <section className="relative z-10 flex min-h-[90vh] flex-col items-center justify-center px-4 pt-24 text-center">
          {" "}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            The Future of Healthcare
            <br /> Workflow is Here
          </h1>
          <p className="mt-4 text-black-200 max-w-2xl text-xl">
            Immeidately reduce administrative workload, boost staff
            satisfaction, and enhance patient communication with our intuitive,
            all-in-one coordination assistant.
          </p>
          <div className="flex gap-4 mt-6">
            <Button
              variant="outline"
              className="w-35 h-12 text-white border-white bg-blue-600 hover:bg-blue-400"
            >
              <Link href="/demo">Book a Demo</Link>
            </Button>

            <Button
              variant="outline"
              className="w-35 h-12 text-black border-gray-300 bg-white hover:bg-black/10"
            >
              <Link href="#price">View Pricing</Link>
            </Button>
          </div>
          <Image
            src="/care.png"
            alt="care"
            width={1200}
            height={400}
            className="w-full max-w-6xl h-auto mt-15"
          />
        </section>
        <div className="py-12 md:py-16">
          <LogoCloud />
        </div>
        <div className="relative min-h-screen">
          <div className=" ">
            <Problems />
          </div>
          <div id="features" className="">
            <Features />
          </div>
          <div id="blogs" className="">
            <Blogs />
          </div>
          <div id="price" className="">
            <Price />
          </div>
          <div className=" ">
            <Faq />
          </div>
          <div className=" ">
            <Demo />
          </div>
          <div id="about" className="">
            <About />
          </div>
        </div>
      </main>
    </div>
  );
}
