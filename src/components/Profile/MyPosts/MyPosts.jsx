import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {

    let postData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'Its my first post', likesCount: 3},
    ];

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
                <Post message={postData[0].message} likesCount={postData[0].likesCount}/>
                <Post message={postData[1].message} likesCount={postData[1].likesCount}/>
            </ul>
        </div>
    );
};

export default MyPosts;
