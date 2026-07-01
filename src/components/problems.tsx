"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Annoyed, Clock, Link } from "lucide-react";

const Problems = () => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto">
      <div className="w-fit border border-blue-200 bg-blue-100 text-blue-600 rounded-2xl px-4 py-1">
        Problems
      </div>

      <h1 className="mt-6 text-center font-bold text-2xl md:text-4xl text-black">
        The Hidden Drain on Healthcare Teams
      </h1>
      <p className="mt-4 text-black-200  text-center">
        Healthcare should be focused on the patient, but outdated system turn
        coordination into <br /> a massive administrative burden.
      </p>
      <div className="flex gap-4 mx-auto mt-10">
        <Card className="flex size-16px w-80 h-auto  bg-blue-100 border-blue-800">
          <Clock className="border-6 border-white rounded-lg bg-white w-8 h-8 text-blue-400 ml-6 mt-5" />
          <CardHeader>
            <CardTitle className="font-bold text-xl">Lack of Insight</CardTitle>
            <CardDescription className="text-xs text-left">
              Disconnected data and siloed systems prevent you from seeing where
              the workflow breaks down, stifling operational growth.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="size-16px w-80 h-auto  bg-blue-500 border-blue-800 text-white">
          <Annoyed className="border-6 border-white rounded-lg bg-white w-8 h-8 text-blue-400 ml-6 mt-5" />
          <CardHeader>
            <CardTitle className="font-bold text-xl">
              Patient Friction
            </CardTitle>
            <CardDescription className="text-xs text-left">
              Inconsistent communication, delayed responses, and missed
              appointments create frustration and damage patient trust.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card className="size-16px w-80 h-auto  bg-blue-100 border-blue-100">
          <Link className="border-6 border-white rounded-lg bg-white w-8 h-8 text-blue-400 ml-6 mt-5" />
          <CardHeader>
            <CardTitle className="font-bold text-xl">Lack of Insight</CardTitle>
            <CardDescription className="text-xs text-left">
              Disconnected data and siloed systems prevent you from seeing where
              the workflow breaks down, stifling operational growth.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default Problems;
