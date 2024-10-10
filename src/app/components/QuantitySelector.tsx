"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

import Button from "@/app/components/common/Button";
import { useCart } from "../contexts/cart/CartContext";
import { Product } from "../types";
import { addItem } from "../contexts/cart/cartActions";

type Props = {
  product: Product;
};

const QuantitySelectorWithAddToCart = ({ product }: Props) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrease = () => setQuantity(quantity + 1);
  const handleDecrease = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  const { dispatch } = useCart();
  const addToCart = () => {
    dispatch(addItem({ product, quantity }));
  };

  return (
    <div className="flex items-center">
      <motion.button
        className="p-2 w-10 h-10  bg-gray-100 rounded-sm mr-2 flex justify-center items-center"
        whileTap={{ scale: 0.9 }}
        onClick={handleDecrease}
      >
        –{" "}
      </motion.button>
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        className="w-16 text-center border rounded-md h-10 mr-2"
        min={0}
      />
      <motion.button
        className="p-2 w-10 h-10  bg-gray-100 rounded-sm mr-2 flex justify-center items-center"
        whileTap={{ scale: 0.9 }}
        onClick={handleIncrease}
      >
        ＋
      </motion.button>
      <Button label="Add to Cart" onClick={addToCart} />
    </div>
  );
};

export default QuantitySelectorWithAddToCart;
