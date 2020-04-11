import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const Dialogs = (props) => {
    return (
        <div className={s.content}>
            <ul className={s.dialoglist}>
                <li className={s.dialogitem + ' ' + s.active}>
                    <NavLink to="/dialogs/1">Andrey</NavLink>
                </li>
                <li className={s.dialogitem}>
                    <NavLink to="/dialogs/2">Petr</NavLink>
                </li>
                <li className={s.dialogitem}>
                    <NavLink to="/dialogs/3">Fedya</NavLink>
                </li>
                <li className={s.dialogitem}>
                    <NavLink to="/dialogs/4">Stepan</NavLink>
                </li>
                <li className={s.dialogitem}>
                    <NavLink to="/dialogs/5">Valerij</NavLink>
                </li>
            </ul>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Hello</div>
                <div className={s.message}>Hou are you!</div>
            </div>
        </div>
    )
};

export default Dialogs;
