import React from 'react';
import s from './Paginator.module.css';

let Paginator = ({totalUsersCount, pageSize, currentPage, onPageChanged}) => {
    let pagesCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <ul className={s.pagination}>
            {pages.map(page => {
                return <li className={currentPage === page ? s.active : ''} key={page}>
                    <a href="/" onClick={(e) => {
                        e.preventDefault();
                        onPageChanged(page)
                    }}>
                        {page}
                    </a>
                </li>
            })}
        </ul>
    )
};

export default Paginator;
