import React from "react";
import { Product } from "../types";
import ProductList from "../components/ProductList";
import { config } from "../config";

type Props = {};

const getProducts = async () => {
  const res = await fetch(`${config.baseUrl}/products`);
  const products = (await res.json()) as Product[];
  return products;
};

async function Products({}: Props) {
  const products = await getProducts();
  return (
    <section className="w-full flex flex-col items-center justify-center py-32">
      <ProductList products={products} />
    </section>
  );
}

export default Products;
