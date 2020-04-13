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

    let dialogs = [
        {id: 1, name: 'Andrey'},
        {id: 2, name: 'Petr'},
        {id: 3, name: 'Fedya'},
        {id: 4, name: 'Stepan'},
        {id: 5, name: 'Valerij'},
        {id: 6, name: 'Sveta'}
    ];

    let messages = [
        {id: 1, message: 'hi'},
        {id: 2, message: 'how are you?'},
        {id: 3, message: 'Do you have money'},
        {id: 4, message: 'How much?'},
        {id: 5, message: 'Do you speak English?'},
        {id: 6, message: 'Yes. Off cose'}
    ];

    let dialogsElements = dialogs.map(d => <DiaolgItem name={d.name} id={d.id}/>);
    let messagesElements = messages.map(m => <Message message={m.message}/>);

    return (
        <div className={s.content}>
            <ul className={s.dialoglist}>
                {dialogsElements}
            </ul>

            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
};

export default Dialogs;
