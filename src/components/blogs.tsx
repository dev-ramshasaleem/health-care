import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Astroid, Diamond, X } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {};

const Blogs = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto">
      <div className="w-fit border border-blue-200 bg-blue-100 text-blue-600 rounded-2xl px-4 py-1">
        Testimonial
      </div>

      <h1 className="mt-6 text-center font-bold text-2xl md:text-4xl text-black">
        Building Trust with Real Results
      </h1>
      <p className="mt-4 text-black-200  text-center">
        Our partners' success is the clearest metric of our commitment to
        secure, human- <br /> centered workflow innovation.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div className="flex flex-col gap-6">
          <Card className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 text-white">
            <div className="flex items-center gap-3 px-6 pt-6">
              <Diamond className="w-8 h-8 text-white" />
              <CardTitle className="text-2xl font-bold">FrameFlow</CardTitle>
            </div>

            <CardContent className="flex-1 pt-30">
              <p className="font-semibold">
                The AI-powered tools in CarePlus save us countless hours by
                summarizing tasks and prioritizing what matters most. It's a
                must have for any team looking to streamline workflows.
              </p>
            </CardContent>

            <div className="flex items-center justify-between px-5 pb-5">
              <Image
                src="/frameflow.png"
                alt="David"
                width={200}
                height={80}
                className="h-auto"
              />

              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white bg-blue-50">
                <X className="h-6 w-6 text-blue-500 stroke-[2.5]" />
              </div>
            </div>
          </Card>
          <Card className="flex flex-col  bg-white text-gray-200">
            <CardHeader>
              <CardDescription className="text text-left font-semibold text-black">
                CarePlus transformed our project management process. Its
                intuitive features make organizing tasks incredinly easy.
              </CardDescription>
            </CardHeader>
            <div className="flex items-center justify-between mt-10 px-4">
              <Image
                src="/mahfuz.png"
                alt="Mahfuz"
                width={200}
                height={80}
                className="h-auto"
              />
              <div className="ml-auto flex h-10 w-10 items-center justify-center rounded-lg border border-blue-100 bg-white">
                <X className="h-6 w-6 text-blue-500 stroke-[2.5]" />
              </div>
            </div>
          </Card>
        </div>

        <div className="flex flex-col gap-6">
          <Card className="flex flex-col  bg-white text-gray-200">
            <CardHeader>
              <CardDescription className="text text-left font-semibold text-black">
                The collaboration tools in CarePlus have significantly improved
                our team's productivity across all projects.
              </CardDescription>
            </CardHeader>
            <div className="flex items-center justify-between mt-10 px-4">
              <Image
                src="/james.png"
                alt="James"
                width={200}
                height={80}
                className="h-auto"
              />
              <div className="ml-auto flex h-10 w-10 items-center justify-center rounded-lg border border-blue-100 bg-white">
                <X className="h-6 w-6 text-blue-500 stroke-[2.5]" />
              </div>
            </div>
          </Card>
          <Card className="flex flex-col  bg-white text-gray-200">
            <CardHeader>
              <CardDescription className="text text-left font-semibold text-black">
                I love how CarePlus's AI Summary saves time by giving instant
                insights from our complex workflows.
              </CardDescription>
            </CardHeader>
            <div className="flex items-center justify-between mt-10 px-4">
              <Image
                src="/ethan.png"
                alt="Ethan"
                width={200}
                height={80}
                className="h-auto"
              />
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-blue-100 bg-white">
                <X className="h-6 w-6 text-blue-500 stroke-[2.5]" />
              </div>
            </div>
          </Card>
          <Card className="flex flex-col bg-white text-gray-200">
            <CardHeader>
              <CardDescription className="text text-left font-semibold text-black">
                CarePlus's 2-way translation has been a game-changer for our
                global team's seamless communication.
              </CardDescription>
            </CardHeader>
            <div className="flex items-center justify-between mt-10 px-4">
              <Image
                src="/carlos.png"
                alt="Carlos"
                width={200}
                height={80}
                className="h-auto"
              />
              <div className="ml-auto flex h-10 w-10 items-center justify-center rounded-lg border border-blue-100 bg-white">
                <X className="h-6 w-6 text-blue-500 stroke-[2.5]" />
              </div>
            </div>
          </Card>
        </div>
        <div className="flex flex-col gap-6">
          <Card className="flex flex-col  bg-white text-gray-200">
            <CardHeader>
              <CardDescription className="text text-left font-semibold text-black">
                Bulk actions in CarePlus have simplified task management for our
                team, boosting overall efficiency.
              </CardDescription>
            </CardHeader>
            <div className="flex items-center justify-between mt-10 px-4">
              <Image
                src="/liam.png"
                alt="Liam"
                width={200}
                height={80}
                className="h-auto"
              />
              <div className="ml-auto flex h-10 w-10 items-center justify-center rounded-lg border border-blue-100 bg-white">
                <X className="h-6 w-6 text-blue-500 stroke-[2.5]" />
              </div>
            </div>
          </Card>
          <Card className="flex-1 bg-gradient-to-t from-blue-500 to-blue-400 text-white">
            <div className="flex items-center gap-3 px-6 pt-6">
              <Astroid className="w-8 h-8 text-white" />
              <CardTitle className="text-2xl font-bold">IntelliSpark</CardTitle>
            </div>

            <CardContent className="flex-1 pt-30">
              <p className="font-semibold">
                CarePlus has revolutionized how our team manages projects. Its
                intuitive features and seamless collaboration tools have
                enhanced our efficiency and ensured we never miss a deadline.
              </p>
            </CardContent>

            <div className="flex items-center justify-between px-5 pb-5">
              <Image
                src="/intellispark.png"
                alt="Liam"
                width={200}
                height={80}
                className="h-auto"
              />

              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white bg-blue-50">
                <X className="h-6 w-6 text-blue-500 stroke-[2.5]" />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
