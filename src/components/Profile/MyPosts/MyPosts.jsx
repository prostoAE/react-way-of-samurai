import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreatot, updateNewPostTextActionCreator} from '../../../redux/profile-reducer';

const MyPosts = (props) => {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);
    let newPostElement = React.createRef();

    let addPost = (e) => {
        e.preventDefault();
        props.dispatch(addPostActionCreatot());
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = updateNewPostTextActionCreator(text);
        props.dispatch(action);
    };

    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>

            <form>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}/>
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
