"use client";
import { useCart } from "../contexts/cart/CartContext";
import ProductList from "../components/ProductList";
import EmptyCart from "../components/EmptyCart";

const CartPage = () => {
  const {
    state: { cartItems },
  } = useCart();

  return (
    <div className="w-full flex flex-col items-center justify-center py-32">
      <h1 className="text-3xl font-bold mb-10">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <ProductList products={cartItems} />
      )}
    </div>
  );
};

export default CartPage;
