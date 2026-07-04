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

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen w-full mx-auto">
        <div className="absolute inset-0 flex flex-col items-center justify-start pt-24 md:pt-36 lg:pt-48 px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            The Future of Healthcare
            <br /> Workflow is Here
          </h1>
          <p className="mt-4 text-black-200 text-xl">
            Immeidately reduce administrative workload, boost staff
            satisfaction, and enhance patient <br /> communication with our
            intuitive, all-in-one coordination assistant.
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
          <br />
          <br />
          <Image
            src="/care.png"
            alt="care"
            width={1200}
            height={600}
            className="w-full max-w-6xl h-auto mt-10"
          />
          <LogoCloud />
        </div>
        <div className="pt-50 min-h-screen">
          <Problems />
        </div>
        <div id="features" className="pt-20 min-h-screen">
          <Features />
        </div>
        <div id="blogs" className="pt-10 min-h-screen">
          <Blogs />
        </div>
        <div id="price" className="pt-10 min-h-screen">
          <Price />
          <br />
          <Faq />
        </div>
        <div className="pt-10 ">
          <Demo />
        </div>
        <div id="about" className="pt-30 min-h-screen">
          <About />
        </div>
      </main>
    </div>
  );
}
