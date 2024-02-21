import Image from "next/image";
import React from "react";

const SectionHeading = ({ title, ...property }) => {
  return (
    <div className={`flex w-full justify-center ${property.className}`}>
      <div className="w-fit relative">
        <h2 className="text-2xl sm:text-4xl font-semibold text-zinc-100 capitalize text-center">
          {title}{" "}
        </h2>
        <div className="w-6 h-6 absolute -top-[0.8rem] -left-[1rem]">
          <Image
            src={"/decorative-lines.svg"}
            alt="decorative-lines"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionHeading;
