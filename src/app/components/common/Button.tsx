"use client";
import React from "react";
import { motion } from "framer-motion";

type Props = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
  type?: "danger" | "primary";
};

function Button({
  label,
  onClick,
  disabled = false,
  className,
  type = "primary",
}: Props) {
  return (
    <button
      className={`justify-center text-center border border-black bg-white ${
        type === "danger" ? "hover:bg-red-500" : "hover:bg-primary-50"
      } hover:text-white hover:border-primary-50 text-black  py-2 px-4  inline-flex items-center transition-colors duration-300 ease-in-out ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
