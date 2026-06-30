import { Button } from "@/components/ui/button";
import Navbar from "@/src/components/navbar";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main>
        <Navbar />
        <div className="relative w-full"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center  px-4">
          <h1 className="text-black text-5xl md:text-6xl font-bold">
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
              className="w-35 h-12 text-black border-black bg-white hover:bg-black/10"
            >
              <Link href="/price">View Pricing</Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
