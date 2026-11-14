"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { experiencesData } from "@/lib/data";
import CompanyLogo from "./CompanyLogo";

const MONTHS = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"];

// "Jul 2022" -> months since year 0
const parseMonth = (str) => {
  const [m, y] = str.trim().toLowerCase().split(/\s+/);
  return Number(y) * 12 + MONTHS.indexOf(m.slice(0, 3));
};

export const slugify = (str) => str.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

const ease = [0.16, 1, 0.3, 1];

const Label = ({ role }) => (
  <span
    className={`min-w-0 text-[0.8rem] leading-[1.15] transition-colors duration-500 ${
      role.current ? "text-ink-bright" : "text-ink group-hover:text-ink-bright"
    }`}
  >
    {role.profile}
  </span>
);

// Each box spans the exact dates of the role, with the designation inside it.
const Row = ({ role, index, left, width }) => (
  <li className="relative h-12">
    <motion.a
      href={`#exp-${slugify(role.company)}`}
      aria-label={`${role.profile} at ${role.company}, ${role.fromLabel} to ${role.toLabel}`}
      title={`${role.company} · ${role.fromLabel} – ${role.toLabel}`}
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.15 * index + 0.2, ease }}
      className={`group absolute inset-y-0 z-10 flex items-center gap-2 overflow-hidden rounded-md border pl-1.5 pr-2 transition-[border-color,background-color,transform] duration-500 hover:-translate-y-0.5 ${
        role.current
          ? "border-[rgba(205,189,159,0.5)] bg-[#17150f] hover:border-accent"
          : "border-line bg-surface hover:border-line-strong hover:bg-surface-2"
      }`}
      style={{ left: `${left}%`, width: `${width}%` }}
    >
      <CompanyLogo item={role} size={32} />
      <Label role={role} />
    </motion.a>
  </li>
);

const Timeline = () => {
  const { roles, years, startM, spanM, nowPct } = useMemo(() => {
    const now = new Date();
    const nowM = now.getFullYear() * 12 + now.getMonth() + 0.5;

    const parsed = experiencesData.map((item) => {
      const [from, to] = item.duration.split(/\s+-\s+/);
      const current = /present/i.test(to);
      return {
        ...item,
        current,
        from: parseMonth(from),
        to: current ? nowM : parseMonth(to) + 1,
        fromLabel: from,
        toLabel: current ? "Present" : to,
      };
    });

    const firstYear = Math.floor(Math.min(...parsed.map((r) => r.from)) / 12);
    const lastYear = Math.floor((nowM + 4) / 12);
    const startM = firstYear * 12;
    const spanM = nowM + 4 - startM;

    return {
      roles: parsed.sort((a, b) => b.from - a.from),
      years: Array.from({ length: lastYear - firstYear + 1 }, (_, i) => firstYear + i),
      startM,
      spanM,
      nowPct: ((nowM - startM) / spanM) * 100,
    };
  }, []);

  const pct = (m) => ((m - startM) / spanM) * 100;

  return (
    <div className="-mx-5 lg:mx-0 overflow-x-auto scrollbar-none">
      <div className="relative min-w-[1000px] px-5 lg:px-0">
        {/* Year columns */}
        <div className="relative h-10 border-b border-line">
          {/* Small month ticks along the axis line */}
          {Array.from({ length: Math.ceil(spanM) + 1 }, (_, i) => {
            const month = startM + i;
            if (month > startM + spanM) return null;
            const isYear = month % 12 === 0;
            const isQuarter = month % 3 === 0;
            return (
              <span
                key={month}
                aria-hidden="true"
                className={`absolute bottom-0 w-px ${
                  isYear ? "h-3 bg-ink-faint" : isQuarter ? "h-2 bg-line-strong" : "h-1 bg-line-strong"
                }`}
                style={{ left: `${pct(month)}%` }}
              />
            );
          })}
          {years.map((year, i) => (
            <span
              key={year}
              className={`eyebrow absolute top-2 tabular-nums !text-ink-faint ${i === 0 ? "" : "-translate-x-1/2"}`}
              style={{ left: `${pct(year * 12)}%` }}
            >
              {year}
            </span>
          ))}
        </div>

        <div className="relative mb-8 border-b border-line">
          {/* Gridlines */}
          {years.map((year) => (
            <span
              key={year}
              aria-hidden="true"
              className="absolute inset-y-0 w-px bg-line"
              style={{ left: `${pct(year * 12)}%` }}
            />
          ))}

          {/* Now marker */}
          <motion.span
            aria-hidden="true"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: 0.6, ease }}
            className="absolute top-0 bottom-0 z-0 w-px origin-top bg-accent"
            style={{ left: `${nowPct}%` }}
          >
            <span className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-accent" />
            <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 bg-accent" />
          </motion.span>

          <ol className="relative flex flex-col gap-4 py-8">
            {roles.map((role, i) => (
              <Row key={role.company} role={role} index={i} left={pct(role.from)} width={pct(role.to) - pct(role.from)} />
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
