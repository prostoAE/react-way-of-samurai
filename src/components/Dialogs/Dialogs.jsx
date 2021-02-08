import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {Redirect} from "react-router-dom";
import AddMessageForm from "./AddMessageForm";

const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map((d) => (
        <DialogItem name={d.name} key={d.id} id={d.id}/>
    ));
    let messagesElements = state.messages.map((m) => (
        <Message message={m.message} key={m.id}/>
    ));

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    };

    if (!props.isAuth) return <Redirect to={"/login"}/>;

    return (
        <div className={s.content}>
            <ul className={s.dialoglist}>{dialogsElements}</ul>

            <div className={s.messages}>
                <div>{messagesElements}</div>
                <AddMessageForm onSubmit={addNewMessage}/>
            </div>
        </div>
    );
};

export default Dialogs;
