"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";
import RollText from "./RollText";

const WebsiteCard = ({ site, index }) => {
  const host = site.url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

  return (
    <motion.a
      href={site.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${site.title}`}
      data-cursor="Visit"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="cell-hover group flex lg:min-h-[26rem] flex-col p-7 lg:p-10"
    >
      <div className="flex items-start justify-between">
        <span className="eyebrow">{String(index + 1).padStart(2, "0")}</span>
        <span className="arrow-circle">
          <BsArrowUpRight size={14} />
        </span>
      </div>

      <div className="mt-10 relative h-16 w-16 overflow-hidden rounded-full border border-line bg-surface-2 transition-transform duration-700 ease-out-expo group-hover:scale-110 group-hover:-rotate-6">
        {site.logo && (
          <Image
            src={site.logo}
            alt={`${site.title} logo`}
            fill
            sizes="64px"
            className="object-cover"
          />
        )}
      </div>

      <div className="mt-8 flex flex-col gap-2">
        <h3 className="text-2xl lg:text-[2rem] text-ink-bright"><RollText>{site.title}</RollText></h3>
        <p className="font-mono text-xs tracking-wide text-ink-faint">{host}</p>
        <p className="mt-3 text-sm lg:text-base text-ink-muted leading-relaxed max-w-sm">
          {site.summary}
        </p>
      </div>

      <div className="mt-auto pt-10 flex flex-wrap items-center gap-2">
        <span className="pill !text-ink">
          <span className="dot !h-[5px] !w-[5px]" />
          {site.cms}
        </span>
        {site.tags?.map((tag) => (
          <span key={tag} className="pill group-hover:border-[color:rgba(255,255,255,0.24)]">
            {tag}
          </span>
        ))}
      </div>
    </motion.a>
  );
};

export default WebsiteCard;
