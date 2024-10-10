import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">My Store</h2>
            <p className="text-gray-400">
              Welcome to My Store. Discover our wide range of products and enjoy
              the best shopping experience.
            </p>
          </div>

          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-xl font-bold mb-4">Contact Us</h2>
            <p className="mb-2">
              <FontAwesomeIcon icon={faEnvelope} className="mr-2" />{" "}
              email@example.com
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-gray-400">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </Link>
              <Link href="#" className="hover:text-gray-400">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </Link>
              <Link href="#" className="hover:text-gray-400">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-8 py-4">
        <p className="text-center text-gray-400">
          &copy; 2024 My Store. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
