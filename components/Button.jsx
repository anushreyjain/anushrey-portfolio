import Link from 'next/link';
import React from 'react'
import { BsArrowRight } from 'react-icons/bs';

const Button = ({ label, link, onClick }) => {
  return (
    <Link
      href={link}
      onClick={onClick}
      className="border border-zinc-600 lg:border-zinc-800 outline-none text-gray-50 py-3 px-7 flex items-center 
    gap-2 rounded-full lg:hover:scale-[1.05] lg:hover:border-zinc-500 active:scale-105 
    transition group"
    >
      {label}
      <BsArrowRight className="opacity-70 -rotate-45 lg:group-hover:translate-x-0.5 
      lg:group-hover:-translate-y-0.5 transition" />
    </Link>
  )
}

export default Button