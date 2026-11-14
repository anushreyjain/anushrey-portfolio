import React from "react";
import Image from "next/image";

// Logos with their own background fill the tile; transparent ones sit on a light tile.
const CompanyLogo = ({ item, size = 36, className = "" }) => (
  <span
    className={`relative flex flex-shrink-0 items-center justify-center overflow-hidden rounded-[5px] border border-line-strong ${
      item.logoPadded ? "bg-[#f5f1ea]" : "bg-surface-3"
    } ${className}`}
    style={{ width: size, height: size }}
  >
    <Image
      src={item.logo}
      alt={`${item.company} logo`}
      width={size}
      height={size}
      unoptimized={item.logo.endsWith(".svg")}
      className={item.logoPadded ? "h-[68%] w-[68%] object-contain" : "h-full w-full object-cover"}
    />
  </span>
);

export default CompanyLogo;
