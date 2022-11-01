import React  from 'react'
import './Pagination.css';

function Pagination({ total, limit, page, setPage }) {
    const numPages = Math.ceil(total / limit);
  
    return (
        <nav>
          <button className="prev_button" onClick={() => setPage(page - 1)} disabled={page === 1}>
          </button>
          {Array(numPages)
            .fill()
            .map((_, i) => (
                <button className='page_button' key={i + 1} onClick={() => setPage(i + 1)} aria-current={page === i + 1 ? "page" : null}/>
            ))}
          <button className='next_button' onClick={() => setPage(page + 1)} disabled={page === numPages}>
            &gt;
          </button>
        </nav>
    );
  }

  export default Pagination;
