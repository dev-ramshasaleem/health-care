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
        secure, human- <br /> centered workflow innovation
      </p>
      <Image
        src="/blog.png"
        alt="Blog"
        width={1200}
        height={1000}
        className="pt-10"
      />
    </div>
  );
};

export default Blogs;
