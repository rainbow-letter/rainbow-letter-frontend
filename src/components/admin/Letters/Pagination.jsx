/* eslint-disable no-lonely-if */
/* eslint-disable no-plusplus */
import React from 'react';

import doubleArrowLeft from '../../../assets/admin/doubleArrowLeft.svg';
import doubleArrowRight from '../../../assets/admin/doubleArrowRight.svg';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const getPaginationNumbers = () => {
    const maxPagesToShow = 10;
    const halfPagesToShow = Math.floor(maxPagesToShow / 2);
    let startPage;
    let endPage;

    if (totalPages <= maxPagesToShow) {
      startPage = 0;
      endPage = totalPages - 1;
    } else {
      if (currentPage <= halfPagesToShow) {
        startPage = 0;
        endPage = maxPagesToShow - 1;
      } else if (currentPage + halfPagesToShow >= totalPages) {
        startPage = totalPages - maxPagesToShow;
        endPage = totalPages - 1;
      } else {
        startPage = currentPage - halfPagesToShow;
        endPage = currentPage + halfPagesToShow;
      }
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, index) => startPage + index
    );
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-2.5">
      {totalPages > 10 && (
        <button
          className="w-7 h-7 rounded"
          type="button"
          disabled={currentPage === 0}
          onClick={() => onPageChange(0)}
        >
          <img src={doubleArrowLeft} alt="<<" />
        </button>
      )}
      {getPaginationNumbers().map((number) => (
        <button
          className={`w-7 h-7 rounded ${
            currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
          key={number}
          type="button"
          onClick={() => onPageChange(number)}
        >
          {number + 1}
        </button>
      ))}
      {totalPages > 10 && (
        <button
          className="w-7 h-7 rounded"
          type="button"
          disabled={currentPage === totalPages - 1}
          onClick={() => onPageChange(totalPages - 1)}
        >
          <img src={doubleArrowRight} alt=">>" />
        </button>
      )}
    </div>
  );
}

export default Pagination;
