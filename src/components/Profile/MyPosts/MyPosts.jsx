import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef();

    let addPost = (e) => {
        e.preventDefault();
        let text = newPostElement.current.value;
        alert(text);
    };

    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>

            <form>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <button onClick={addPost} >Add post</button>
            </form>

            <ul className={s.posts}>
                {postsElements}
            </ul>
        </div>
    );
};

export default MyPosts;
