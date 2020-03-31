import React from 'react';
import s from './header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <a href="/"><img src="https://s2.coinmarketcap.com/static/img/coins/200x200/2099.png" alt="logo"/></a>
        </header>
    );
};

export default Header;
