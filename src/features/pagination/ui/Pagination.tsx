'use client';

import { usePagination } from '../model/usePagination';
import { useTransition } from 'react';

interface PaginationProps {
  totalPages: number;
}

export function Pagination({ totalPages }: PaginationProps) {
  const { currentPage, handlePageChange } = usePagination();
  const [isPending, startTransition] = useTransition();
  const ELLIPSIS = '...';

  const getPageNumbers = () => {
    const pages = [];
    const showEllipsis = totalPages > 7;

    if (showEllipsis) {
      pages.push(1);

      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);

      if (start > 2) {
        pages.push(ELLIPSIS);
      }

      for (let i = start; i <= end; i++) {
        pages.push(i);
      }

      if (end < totalPages - 1) {
        pages.push(ELLIPSIS);
      }
      pages.push(totalPages);
    } else {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    }

    return pages;
  };

  const handlePageClick = (page: number) => {
    startTransition(() => {
      handlePageChange(page);
    });
  };

  return (
    <div className="flex justify-center items-center gap-2 mt-8 max-md:gap-1">
      <button
        onClick={() => handlePageClick(currentPage - 1)}
        disabled={currentPage === 1 || isPending}
        className="px-4 py-2 max-md:px-2 max-md:py-1 max-md:text-sm min-w-7 rounded bg-gray-200 disabled:opacity-50 disabled:cursor-auto cursor-pointer not-disabled:active:bg-gray-300 transition-colors"
      >
        &lt;
      </button>

      {getPageNumbers().map((page, index) =>
        page === ELLIPSIS ? (
          <span key={`ellipsis-${index}`} className="px-2 text-stone-300 max-md:px-1">
            {ELLIPSIS}
          </span>
        ) : (
          <button
            key={page}
            onClick={() => handlePageClick(page as number)}
            disabled={isPending}
            className={`px-4 py-2 max-md:px-1 max-md:py-1 min-w-7 max-md:text-sm rounded cursor-pointer transition-colors ${
              currentPage === page ? 'bg-blue-600 text-white active:bg-blue-700' : 'bg-gray-200 active:bg-gray-300'
            } ${isPending ? 'opacity-50 cursor-wait' : ''}`}
          >
            {page}
          </button>
        )
      )}

      <button
        onClick={() => handlePageClick(currentPage + 1)}
        disabled={currentPage === totalPages || isPending}
        className="px-4 py-2 max-md:px-2 max-md:py-1 max-md:text-sm min-w-7 rounded bg-gray-200 disabled:opacity-50 disabled:cursor-auto cursor-pointer not-disabled:active:bg-gray-300 transition-colors"
      >
        &gt;
      </button>
    </div>
  );
}
