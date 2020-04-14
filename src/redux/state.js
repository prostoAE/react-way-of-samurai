import {rerenderEntireTree} from '../render';

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'Its my first post', likesCount: 3},
            {id: 3, message: 'First message', likesCount: 0},
            {id: 4, message: 'Bla bla', likesCount: 1},
        ],
    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'hi'},
            {id: 2, message: 'how are you?'},
            {id: 3, message: 'Do you have money'},
            {id: 4, message: 'How much?'},
            {id: 5, message: 'Do you speak English?'},
            {id: 6, message: 'Yes. Off cose'}
        ],
        dialogs: [
            {id: 1, name: 'Andrey'},
            {id: 2, name: 'Petr'},
            {id: 3, name: 'Fedya'},
            {id: 4, name: 'Stepan'},
            {id: 5, name: 'Valerij'},
            {id: 6, name: 'Sveta'}
        ]
    },
    sidebar: {}
};

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
};

export default state;
