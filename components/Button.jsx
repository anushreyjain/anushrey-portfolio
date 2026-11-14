import Link from "next/link";
import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Button = ({ label, link, onClick }) => {
  return (
    <Link href={link} onClick={onClick} className="btn btn-primary btn-cta">
      {label}
      <BsArrowRight className="btn-icon -rotate-45" />
    </Link>
  );
};

export default Button;
