"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

interface CollapsibleProps {
  label: string;
  children: React.ReactNode;
}

const Collapsible: React.FC<CollapsibleProps> = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-b border-gray-300  p-4 mb-4">
      <div
        className="flex items-center justify-between cursor-pointer text-gray-700"
        onClick={toggleOpen}
      >
        <span className="font-normal">{label}</span>
        <span className="font-semibold text-[20px]">{isOpen ? "–" : "＋"}</span>
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        {isOpen && <div className="mt-2">{children}</div>}
      </motion.div>
    </div>
  );
};

export default Collapsible;
