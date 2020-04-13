import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let posts = [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'Its my first post', likesCount: 3},
        {id: 3, message: 'First message', likesCount: 0},
        {id: 4, message: 'Bla bla', likesCount: 1},
    ];

    let postsElements = posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>

            <form action="/">
                <div>
                    <textarea></textarea>
                </div>
                <button>Add post</button>
            </form>

            <ul className={s.posts}>
                {postsElements}
            </ul>
        </div>
    );
};

export default MyPosts;
