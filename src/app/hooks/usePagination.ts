import { useEffect, useMemo, useState } from "react";
import { Product } from "../types";
import usePrevious from "./usePrevious";
import { LIMIT } from "../components/common/Pagination";

export const usePagination = (
  products: Product[],
  selectedCategory: string
) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = useMemo(
    () => Math.ceil(products.length / LIMIT),
    [products.length]
  );

  const previousCategory = usePrevious(selectedCategory);
  useEffect(() => {
    if (previousCategory !== selectedCategory) {
      setCurrentPage(1);
    }
  }, [previousCategory, selectedCategory]);

  const nextPage = () => {
    if (currentPage < totalPages)
      setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const prevPage = () => {
    if (currentPage > 0)
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const productsPerPage = useMemo(() => {
    const startIndex = (currentPage - 1) * LIMIT;
    const endIndex = startIndex + LIMIT;
    return products.slice(startIndex, endIndex);
  }, [currentPage, products]);

  return {
    currentPage,
    totalPages,
    nextPage,
    prevPage,
    productsPerPage,
  };
};
