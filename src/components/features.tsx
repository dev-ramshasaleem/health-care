import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import React from "react";

type Props = {};

const Features = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto px-4 md:px-8 lg:px-16 py-16">
      <div className="w-fit border border-blue-200 bg-blue-100 text-blue-600 rounded-2xl px-4 py-1">
        Features
      </div>
      <h1 className="mt-6 text-center font-bold text-2xl md:text-4xl text-black">
        Smarter Workflows, Happier Teams
      </h1>
      <p className="mt-4 text-center text-gray-600 max-w-2xl">
        CarePlus is the secure and intelligent solution built to solve these
        specific challenges.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full max-w-6xl">
        <Card className="w-full max-w-sm mx-auto size-16px w-80 h-auto flex flex-col bg-gradient-to-b from-purple-200 to-purple-90 border-blue-800">
          <div className="flex justify-center ">
            <Image
              src="/automated.png"
              alt="Booking"
              width={300}
              height={200}
              className="w-full max-w-[280px] h-auto rounded-lg border-8 border-purple-200"
            />
          </div>
          <CardHeader>
            <CardTitle className="font-bold text-xl">
              Automated, Zero-Friction Booking
            </CardTitle>
            <CardDescription className="text-xs text-left">
              Our Smart Schedulling engine manages appointments, reminders, and
              confirmations autonomously, significantly reducing no-shows and
              staff effort.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="w-full max-w-sm mx-auto size-16px w-80 h-auto flex flex-col bg-gradient-to-t from-orange-200 to-orange-90 border-blue-800">
          <div className="flex justify-center ">
            <Image
              src="/unified.png"
              alt="Booking"
              width={300}
              height={400}
              className="w-full max-w-[280px] h-auto rounded-lg border-8 border-orange-180"
            />
          </div>
          <CardHeader>
            <CardTitle className="font-bold text-xl">
              Unified Communication Hub
            </CardTitle>
            <CardDescription className=" text-left">
              A single, secure platform connects every team member and patient
              instantly, ensuring HIPAA-compliant clarity and a seamless flow of
              information.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="w-full max-w-sm mx-auto size-16px w-80 h-auto flex flex-col bg-gradient-to-b from-blue-200 to-blue-90 border-blue-800">
          <div className="flex justify-center ">
            <Image
              src="/proactive.png"
              alt="Booking"
              width={300}
              height={400}
              className="w-full max-w-[280px] h-auto rounded-lg border-8 border-blue-200"
            />
          </div>
          <CardHeader>
            <CardTitle className="font-bold text-xl">
              Proactive Workflow Assistant
            </CardTitle>
            <CardDescription className=" text-left">
              Oyr AI identifies bottlenecks and automates routine tasks,
              transforming your workflow from reactive chaos to proactive,
              efficient coordination.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default Features;
