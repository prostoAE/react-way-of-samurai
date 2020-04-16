import React from 'react';
import ReactDOM from 'react-dom';
import state, {subscribe, updateNewPostText} from './redux/state';
import App from './App';
import {addPost} from './redux/state';

let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} updateNewPostText={updateNewPostText}/>
        </React.StrictMode>,
        document.getElementById('root')
    );
};

rerenderEntireTree(state);

subscribe(rerenderEntireTree);

