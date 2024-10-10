"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "@/app/contexts/cart/CartContext";
import Button from "../common/Button";
import { clearCart } from "@/app/contexts/cart/cartActions";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const {
    state: { cartItems },
    dispatch,
  } = useCart();

  const clearCartItems = () => {
    dispatch(clearCart());
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <nav
      className={
        "fixed w-full p-4 z-10 transition duration-300 bg-white shadow-md"
      }
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="nav-item text-black font-bold hover:text-primary-50 transition duration-300"
        >
          My Store
        </Link>
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="nav-item font-semibold text-black hover:text-primary-50 transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/products"
            className="nav-item font-semibold text-black hover:text-primary-50 transition duration-300"
          >
            Shop
          </Link>
          <Link href="/cart" className="relative nav-item">
            <FontAwesomeIcon icon={faShoppingCart} className="text-black" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                {cartItems.length}
              </span>
            )}
          </Link>
          <Button label="Clear Cart" onClick={clearCartItems} />
        </div>
      </div>
    </nav>
  );
};

export default Header;
