let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'Its my first post', likesCount: 3},
                {id: 3, message: 'First message', likesCount: 0},
                {id: 4, message: 'Bla bla', likesCount: 1},
            ],
            newPostText: 'it-kamasutra.com'
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
    },
    getState() {
        return this._state;
    },
    _callSubscriber () {
        console.log('state changed');
    },
    addPost () {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText (newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },
};

export default store;
window.store = store;
