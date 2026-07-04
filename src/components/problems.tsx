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
    <div className="flex flex-col items-center justify-center mx-auto px-4 md:px-8 lg:px-16 py-16">
      <div className="w-fit border border-blue-200 bg-blue-100 text-blue-600 rounded-2xl px-4 py-1">
        Problems
      </div>
      <h1 className="mt-6 text-center font-bold text-3xl md:text-5xl">
        The Hidden Drain on Healthcare Teams
      </h1>
      <p className="mt-4 text-black-200  text-center max-w-2xl px-2">
        Healthcare should be focused on the patient, but outdated system turn
        coordination into a massive administrative burden.
      </p>
<<<<<<< HEAD
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full max-w-6xl">
        <Card className="flex size-16px w-80 h-auto  bg-blue-100 border-blue-800">
=======
      <div className="flex gap-6 mx-auto mt-10">
        <Card className="flex size-16px w-80 h-auto  bg-blue-100 text-blue-100">
>>>>>>> 79b9b03 (update for mobile)
          <Clock className="border-6 border-white rounded-lg bg-white w-8 h-8 text-blue-400 ml-6 mt-5" />
          <CardHeader>
            <CardTitle className="font-bold text-xl text-black">Lack of Insight</CardTitle>
            <CardDescription className="text-xs text-left  text-black">
              Disconnected data and siloed systems prevent you from seeing where
              the workflow breaks down, stifling operational growth.
            </CardDescription>
          </CardHeader>
        </Card>
<<<<<<< HEAD
        <Card className="flex size-16px w-80 h-auto  bg-gradient-to-b from-blue-200 to-blue-500 border-blue-800 text-white">
=======
        <Card className="flex size-16px w-80 h-auto  bg-gradient-to-b from-blue-200 to-blue-500 text-white">
>>>>>>> 79b9b03 (update for mobile)
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
<<<<<<< HEAD
        <Card className="flex size-16px w-80 h-auto bg-blue-100 border-blue-100">
=======
        <Card className="flex size-16px w-80 h-auto  bg-blue-100 text-blue-100">
>>>>>>> 79b9b03 (update for mobile)
          <Link className="border-6 border-white rounded-lg bg-white w-8 h-8 text-blue-400 ml-6 mt-5" />
          <CardHeader>
            <CardTitle className="font-bold text-xl text-black">Lack of Insight</CardTitle>
            <CardDescription className="text-xs text-left  text-black">
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
