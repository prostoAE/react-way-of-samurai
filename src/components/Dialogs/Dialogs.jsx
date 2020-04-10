import React from 'react';
import s from './Dialogs.module.css';

const Dialogs = (props) => {
    return (
        <div className={s.content}>
            <ul className={s.dialoglist}>
                <li className={s.dialogitem + ' ' + s.active}>Andrey</li>
                <li className={s.dialogitem}>Petr</li>
                <li className={s.dialogitem}>Fedya</li>
                <li className={s.dialogitem}>Stepan</li>
                <li className={s.dialogitem}>Valerij</li>
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
