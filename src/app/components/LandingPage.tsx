import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const LandingPage = () => {
  return (
    <section className="bg-gray-100 min-h-screen">
      <div
        className="relative bg-cover bg-right bg-no-repeat  h-screen flex justify-center items-center"
        style={{
          backgroundImage:
            'url("https://qx-gluck.myshopify.com/cdn/shop/files/banner-3.jpg?v=1704873000&width=1728")',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative container flex flex-col justify-center items-center text-center text-white px-40 ">
          <h1 className="text-5xl font-bold mb-6">Welcome to My Store</h1>
          <p className="text-xl mb-8">
            Discover our wide range of products and enjoy the best shopping
            experience. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Expedita cum, neque quod, ipsum similique veritatis inventore vel
            fuga doloremque autem maxime odit labore rem perferendis, sunt quas
            dolorum blanditiis? Voluptates.
          </p>
          <Link
            href={`/products`}
            className={
              "flex justify-between items-center border rounded-full border-black bg-white hover-primary-style text-black  py-2 px-4 w-[200px] transition-colors duration-300 ease-in-out "
            }
          >
            <span> Shop Now</span>
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
