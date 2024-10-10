"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Product } from "../types";
import { useCart } from "../contexts/cart/CartContext";
import Button from "./common/Button";
import { addItem, removeItem } from "../contexts/cart/cartActions";

type Props = {
  product: Product;
  isCartItem?: boolean;
};

function ProductItem({ product, isCartItem }: Props) {
  const { dispatch } = useCart();
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const addToCart = () => {
    dispatch(addItem({ product, quantity: 1 }));
    setIsAddedToCart(true);

    setTimeout(() => {
      setIsAddedToCart(false);
    }, 1500);
  };
  const removeFromCart = () => {
    dispatch(removeItem(product.id));
  };

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex flex-col justify-between relative bg-white p-4 rounded-md shadow-md transform transition duration-300 hover:scale-105 hover:shadow-2xl hover:translate-z-10"
    >
      {isHovered && (
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 z-10 space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {isCartItem ? (
            <Button
              label="Remove from Cart"
              onClick={removeFromCart}
              type="danger"
              className="border-none rounded-full text-black bg-white py-2 px-6"
            />
          ) : (
            <Button
              label="+ Add to Cart"
              onClick={addToCart}
              className="border-none rounded-full text-black bg-white py-2 px-6"
            />
          )}
          <Link
            href={`/products/${product.id}`}
            className={`justify-center text-center  rounded-full bg-white hover:bg-primary-50 hover:text-white hover:border-primary-50 text-black  py-2 px-4  inline-flex items-center transition-colors duration-300 ease-in-out `}
          >
            View Details
          </Link>
        </motion.div>
      )}
      {isAddedToCart && (
        <motion.div
          className="bg-green-500 border-2 p-4 rounded-md shadow-md absolute top-0 left-0 w-full h-full flex items-center justify-center z-10"
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 0, scale: 1.2 }}
          transition={{ duration: 2 }}
        >
          <p className="truncate text-white font-bold">Product Added</p>
        </motion.div>
      )}
      <div className="relative">
        <Image
          src={product.image}
          alt={product.title}
          width="0"
          height="0"
          sizes="100vw"
          className="w-full h-64 object-contain mb-2"
        />
      </div>
      <h2 className="text-lg font-semibold">
        {isCartItem && (
          <span className="text-green-600">{product.quantity} x </span>
        )}
        {product.title}
      </h2>
      <p className="text-gray-600">${product.price.toFixed(2)}</p>
    </motion.div>
  );
}

export default React.memo(ProductItem);
