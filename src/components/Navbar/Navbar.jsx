import React from "react";
import s from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <aside className={s.nav}>
      <ul>
        <li className={s.item}>
          <NavLink to="/profile" activeClassName={s.activeLink}>
            Profile
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="/dialogs" activeClassName={s.activeLink}>
            Messages
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="#">News</NavLink>
        </li>
        <li className={s.item}>
          <NavLink to="#">Music</NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default Navbar;
