import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <FontAwesomeIcon
        icon={faShoppingCart}
        className="text-6xl text-gray-300 mb-4"
      />
      <p className="text-lg text-gray-500 mb-4">Your cart is empty.</p>
      <Link
        href={`/products`}
        className={
          "flex justify-center items-center border rounded-full border-black bg-white hover-primary-style text-black  py-2 px-4 w-[200px] transition-colors duration-300 ease-in-out "
        }
      >
        <span> Go to Shop</span>
      </Link>
    </div>
  );
};

export default EmptyCart;
