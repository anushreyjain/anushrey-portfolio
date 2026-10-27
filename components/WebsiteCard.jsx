"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BsArrowUpRight } from "react-icons/bs";

const WebsiteCard = ({ site }) => {
  const host = site.url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <motion.a
      href={site.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${site.title}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group flex flex-col gap-5 rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 hover:border-zinc-600 transition"
    >
      <div className="flex items-start justify-between">
        <div className="relative h-16 w-16 overflow-hidden rounded-2xl bg-zinc-800">
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
        <BsArrowUpRight
          size={20}
          className="text-zinc-500 group-hover:text-zinc-100 group-hover:-translate-y-1 group-hover:translate-x-1 transition"
        />
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="text-xl lg:text-2xl font-semibold text-zinc-100">{site.title}</h3>
        <p className="text-xs text-zinc-500">{host}</p>
        <p className="text-sm text-zinc-400 mt-2">{site.summary}</p>
      </div>

      <div className="flex flex-wrap items-center gap-2 mt-auto">
        <span className="rounded-full border border-zinc-700 px-3 py-1 text-xs text-zinc-300">
          {site.cms}
        </span>
        {site.tags?.map((tag) => (
          <span key={tag} className="rounded-full bg-zinc-800 px-2.5 py-1 text-xs text-zinc-400">
            {tag}
          </span>
        ))}
      </div>
    </motion.a>
  );
};

export default WebsiteCard;
