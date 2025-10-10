import React from 'react';
import { BackBtn, Dots, NextBtn, Number, Wrap } from './styled';

export const Pagination = ({ page, totalPages, onPageChange }) => {
  const createPages = () => {
    let pages = [];

    if (page > 2) {
      pages.push(1);
      if (page > 3) {
        pages.push('...');
      }
    }

    for (let p = page - 1; p <= page + 1; p++) {
      if (p > 0 && p <= totalPages) {
        pages.push(p);
      }
    }

    if (page < totalPages - 1) {
      if (page < totalPages - 2) {
        pages.push('...');
      }
      pages.push(totalPages);
    }

    return pages;
  };

  const pages = createPages();

  return (
    <Wrap>
      <BackBtn
        onClick={() => onPageChange(page - 1)}
        disabled={page === 1}
        style={{ cursor: page === 1 ? 'not-allowed' : 'pointer' }}
      />

      {pages.map((p, i) =>
        p === '...' ? (
          <Dots key={i}>…</Dots>
        ) : (
          <Number key={i} onClick={() => onPageChange(p)} $active={p === page}>
            {p}
          </Number>
        ),
      )}

      <NextBtn
        onClick={() => onPageChange(page + 1)}
        disabled={page === totalPages}
        style={{ cursor: page === totalPages ? 'not-allowed' : 'pointer' }}
      />
    </Wrap>
  );
};
