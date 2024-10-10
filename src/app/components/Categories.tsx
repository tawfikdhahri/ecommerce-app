"use client";

import React from "react";

type Props = {
  setSelectedCategory: (category: string) => void;
  selectedCategory: string;
};

const categories = [
  "all",
  "men's clothing",
  "women's clothing",
  "electronics",
  "jewelery",
];

function Categories({ selectedCategory, setSelectedCategory }: Props) {
  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };
  return (
    <div className="flex space-x-4 mb-16">
      {categories.map((category) => (
        <button
          key={category}
          className={`capitalize px-4 py-2 rounded-full border ${
            selectedCategory === category
              ? "bg-primary-50 text-white"
              : "bg-white text-black border-black"
          } hover:bg-primary-50 hover:border-none hover:text-white transition-colors duration-300`}
          onClick={() => handleCategoryClick(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default React.memo(Categories);
