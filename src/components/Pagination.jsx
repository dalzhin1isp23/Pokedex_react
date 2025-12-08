import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const pageNumbers = [];
  const maxButtons = 10;
  const startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
  const endPage = Math.min(totalPages, startPage + maxButtons - 1);

  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(
      <button
        key={i}
        onClick={() => onPageChange(i)}
        style={{
          width: '30px',
          height: '30px',
          margin: '0 2px',
          borderRadius: '8px',
          border: 'none',
          backgroundColor: currentPage === i ? '#dd1d1dff' : '#838383ff',
          color: 'white',
          cursor: 'pointer',
        }}
      >
        {i}
      </button>
    );
  }

  return (
    <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
      {pageNumbers}
    </div>
  );
};

export default Pagination;