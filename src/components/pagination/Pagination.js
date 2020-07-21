import React from "react";

const Pagination = ({ totalItems, setPerItems,goToPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / setPerItems); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((page) => (
          <li key={page} className="page-item">
            <a onClick={() => goToPage(page)} className="page-link" href="#">
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
