"use client";
import React, { useMemo, useState } from "react";
import { usePathname } from "next/navigation";

import ProductItem from "./ProductItem";
import { Product } from "../types";
import Categories from "./Categories";
import Pagination from "./common/Pagination";
import { usePagination } from "../hooks/usePagination";

type Props = {
  products: Product[];
};

function ProductList({ products }: Props) {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const productsPerCategory = useMemo(() => {
    if (selectedCategory === "all") return products;
    return products.filter((product) => product.category === selectedCategory);
  }, [products, selectedCategory]);

  const pathname = usePathname();
  const isCart = useMemo(() => pathname.includes("cart"), [pathname]);

  const { productsPerPage, currentPage, nextPage, prevPage, totalPages } =
    usePagination(productsPerCategory, selectedCategory);
  return (
    <>
      {!isCart && (
        <Categories
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6  w-2/3">
        {productsPerPage.map((product) => (
          <ProductItem key={product.id} product={product} isCartItem={isCart} />
        ))}
      </div>
      <Pagination
        onNextPage={nextPage}
        onPrevPage={prevPage}
        totalPages={totalPages}
        currentPage={currentPage}
        itemsLength={productsPerCategory.length}
      />
    </>
  );
}

export default ProductList;
