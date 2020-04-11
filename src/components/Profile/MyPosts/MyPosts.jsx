import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
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
                <Post message="Hi, how are you?" likesCount="10"/>
                <Post message="I'ts my first post" likesCount="0"/>
            </ul>
        </div>
    );
};

export default MyPosts;
