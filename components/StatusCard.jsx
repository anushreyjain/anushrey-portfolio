import React from "react";

const StatusCard = ({ title, subTitle, index, ...property }) => {
  return (
    <div className={`flex items-center gap-5 lg:gap-32 w-fit ${index !== 0 && 'ml-5 lg:ml-32'} `}>
      <div className="flex-col text-center">
        <h2 className="font-semibold text-2xl lg:text-5xl text-neutral-500">{title}</h2>
        <p className="text-xs lg:text-xl mt-1 text-neutral-400 white-gradient-text">{subTitle}</p>
      </div>
      {index !== 2 &&
        <div className="h-6 lg:h-10 w-1 border-l border-neutral-600"></div>
      }
    </div>
  );
};

export default StatusCard;
