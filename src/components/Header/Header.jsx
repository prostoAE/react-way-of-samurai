import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <a href="/"><img src="https://s2.coinmarketcap.com/static/img/coins/200x200/2099.png" alt="logo"/></a>

            <div className={s.loginBlock}>
              {props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink> }
            </div>
        </header>
    );
};

export default Header;
