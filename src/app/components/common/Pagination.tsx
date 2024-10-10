"use client";
import usePrevious from "@/app/hooks/usePrevious";
import React, { useMemo } from "react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  itemsLength: number;
  onPrevPage: () => void;
  onNextPage: () => void;
};
export const LIMIT = 3;

const Pagination: React.FC<PaginationProps> = React.memo(
  ({ currentPage, totalPages, onPrevPage, onNextPage, itemsLength }) => {
    const showing = useMemo(() => {
      const start = (currentPage - 1) * LIMIT + 1;
      const end = Math.min(currentPage * LIMIT, itemsLength);
      return { start, end };
    }, [currentPage, itemsLength]);
    return (
      <div className="flex flex-col items-center pt-10">
        <span className="text-sm text-gray-700 ">
          Showing{" "}
          <span className="font-semibold text-gray-900 ">{showing.start}</span>{" "}
          to <span className="font-semibold text-gray-900 ">{showing.end}</span>{" "}
          of <span className="font-semibold text-gray-900 ">{itemsLength}</span>{" "}
          Products{" "}
        </span>
        <div className="inline-flex mt-2 xs:mt-0">
          <button
            onClick={onPrevPage}
            className="flex rounded-md items-center justify-center px-3 h-8 text-sm font-medium text-white bg-primary-50 "
          >
            Prev
          </button>
          <button
            onClick={onNextPage}
            className="flex ml-2 rounded-md items-center justify-center px-3 h-8 text-sm font-medium text-white bg-primary-50 "
          >
            Next
          </button>
        </div>
      </div>
    );
  }
);
Pagination.displayName = "Child";

export default Pagination;
