import { Button } from "@/components/ui/button";
import React from "react";

type Props = {};

const Demo = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center mx-auto mt-20">
      <div className="w-280 border  h-120 bg-gradient-to-t from-black via-gray-600 to-gray-400 font-bold text-white rounded-2xl px-4 text-center pt-20 text-4xl">
        Ready to Finally Focus on <br />
        Care, Not Coordination?
        <h1 className="mt-15 text-center text-xl md:text-xl text-white font-semibold">
          Start you free, no-obligation trial now and see immediate results in
          <br /> schdeuling and team coordination.
        </h1>
        <Button className="bg-white text-black border border-white mt-15 w-35 h-12 font-bold ">
          Book a Demo
        </Button>
      </div>
    </div>
  );
};

export default Demo;
