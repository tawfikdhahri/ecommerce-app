"use client";
import Image from "next/image";
import React, { useState } from "react";

type Props = {
  images: string[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
};

function Gallery({ images, currentIndex, setCurrentIndex }: Props) {
  return (
    <div className="flex mt-2 justify-center">
      {images.map((src, index) => (
        <div
          key={index}
          className={`cursor-pointer box-content	 p-2 ${
            currentIndex === index ? "border-2 border-black" : ""
          }`}
          onClick={() => setCurrentIndex(index)}
        >
          <Image src={src} alt={` ${index + 1}`} width={100} height={100} />
        </div>
      ))}
    </div>
  );
}

export default Gallery;
