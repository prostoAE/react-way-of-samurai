import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
        <li className={s.item}>
            <img src="https://icons-for-free.com/iconfiles/png/512/avatar+human+people+profile+user+icon-1320168139431219590.png" alt="avatar" />
            <p>{props.message}</p>
            <span>like {props.likesCount}</span>
        </li>
    );
};

export default Post;
