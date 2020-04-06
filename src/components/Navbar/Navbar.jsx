import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <aside className={s.nav}>
            <ul>
                <li className={`${s.item} ${s.active}`}><a href="/profile">Profile</a></li>
                <li className={s.item}><a href="/dialogs">Messages</a></li>
                <li className={s.item}><a href="#">News</a></li>
                <li className={s.item}><a href="#">Music</a></li>
            </ul>
        </aside>
    );
};

export default Navbar;
