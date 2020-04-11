import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DiaolgItem = (props) => {
    let path = '/dialogs/' + props.id;

    return (
        <li className={s.dialogitem + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </li>
    )
};

const Message = (props) => {
    return <div className={s.message}>{props.message}</div>
};

const Dialogs = (props) => {
    return (
        <div className={s.content}>
            <ul className={s.dialoglist}>
                <DiaolgItem name="Andrey" id="1"/>
                <DiaolgItem name="Petr" id="2"/>
                <DiaolgItem name="Fedya" id="3"/>
                <DiaolgItem name="Stepan" id="4"/>
                <DiaolgItem name="Valerij" id="5"/>
                <DiaolgItem name="Sveta" id="6"/>
            </ul>

            <div className={s.messages}>
                <Message message="hi"/>
                <Message message="how are you?"/>
                <Message message="Do you have money?"/>
            </div>
        </div>
    )
};

export default Dialogs;
