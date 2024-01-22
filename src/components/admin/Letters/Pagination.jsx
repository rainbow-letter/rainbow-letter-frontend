/* eslint-disable no-plusplus */
import React from 'react';

function Pagination({ currentPage, totalPages, onPageChange }) {
  const getPaginationNumbers = () => {
    const pages = [];
    for (let i = 0; i < totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="flex justify-center items-center space-x-2 mt-2.5">
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
    </div>
  );
}

export default Pagination;
