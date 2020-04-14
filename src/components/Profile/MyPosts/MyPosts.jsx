import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

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
