import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="grid grid-cols-3 px-30">
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <Image src="/Plus.png" alt="icon" width={25} height={25} />

          <h1 className="text-3xl font-bold">
            <span className="text-blue-400">Care</span>
            <span className="text-black">Plus</span>
          </h1>
        </div>

        <h1 className="mt-3 text-black">
          The Intelligent Platform for Streamlined <br />
          Healthcare Workflows.
        </h1>
      </div>
    </div>
  );
};

export default About;
