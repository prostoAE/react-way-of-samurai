import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            <h2>My posts</h2>

            <form action="/">
                <textarea></textarea>
                <button>Add post</button>
            </form>

            <ul className={s.posts}>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </ul>
        </div>
    );
};

export default MyPosts;
