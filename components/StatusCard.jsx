import React from "react";

const StatusCard = ({ title, subTitle, index, ...property }) => {
  return (
    <div className={`flex items-center gap-5 lg:gap-32 w-fit ${index !== 0 && 'ml-5 lg:ml-32'} `}>
      <div className="flex-col text-center">
        <h2 className="font-normal text-2xl lg:text-5xl text-ink-bright">{title}</h2>
        <p className="font-mono text-[0.65rem] lg:text-sm uppercase tracking-[0.18em] mt-2 text-ink-muted">{subTitle}</p>
      </div>
      {index !== 2 &&
        <div className="h-6 lg:h-10 w-1 border-l border-line-strong"></div>
      }
    </div>
  );
};

export default StatusCard;
