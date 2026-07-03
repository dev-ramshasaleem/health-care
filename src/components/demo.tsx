import { Button } from "@/components/ui/button";
import React from "react";

const Demo = () => {
  return (
    <div className="flex justify-center px-4 md:px-8 lg:px-16 py-16">
      <div className="w-full max-w-6xl rounded-2xl bg-gradient-to-t from-black via-gray-600 to-gray-400 px-6 py-16 md:px-12 md:py-24 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
          Ready to Finally Focus on
          <br className="hidden md:block" />
          Care, Not Coordination?
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-base md:text-xl text-white">
          Start your free, no-obligation trial now and see immediate results in
          scheduling and team coordination.
        </p>

        <Button className="mt-10 w-full sm:w-auto px-8 h-12 bg-white text-black font-bold hover:bg-gray-100">
          Book a Demo
        </Button>
      </div>
    </div>
  );
};

export default Demo;
