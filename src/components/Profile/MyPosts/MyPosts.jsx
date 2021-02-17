import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLenghtCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControlls/FormsControlls";

const maxLenght10 = maxLenghtCreator(10);

function AddNewPostForm(props) {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name='newPostText'
                       component={Textarea}
                       validate={[required, maxLenght10]}
                       placeholder={'Post message'}
                />
            </div>
            <button>Add post</button>
        </form>
    )
}

AddNewPostForm = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);

const MyPosts = React.memo(props => {

    let postsElements =
        [...props.posts]
            .reverse()
            .map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>);

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    };

    return (
        <div className={s.postsBlock}>
            <h2>My posts</h2>
            <AddNewPostForm onSubmit={onAddPost}/>
            <ul className={s.posts}>
                {postsElements}
            </ul>
        </div>
    );
});

export default MyPosts;
