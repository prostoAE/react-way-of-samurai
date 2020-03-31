import React from 'react';
import s from './navbar.module.css';

const Navbar = () => {
    return (
        <aside className={s.nav}>
            <ul>
                <li className={`${s.item} ${s.active}`}><a href="#">Profile</a></li>
                <li className={s.item}><a href="#">Messages</a></li>
                <li className={s.item}><a href="#">News</a></li>
                <li className={s.item}><a href="#">Music</a></li>
            </ul>
        </aside>
    );
};

export default Navbar;
