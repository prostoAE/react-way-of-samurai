import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'Its my first post', likesCount: 3},
                {id: 3, message: 'First message', likesCount: 0},
                {id: 4, message: 'Bla bla', likesCount: 1},
            ],
            newPostText: 'it-kamasutra.com',
        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'hi'},
                {id: 2, message: 'how are you?'},
                {id: 3, message: 'Do you have money'},
                {id: 4, message: 'How much?'},
                {id: 5, message: 'Do you speak English?'},
                {id: 6, message: 'Yes. Off cose'},
            ],
            dialogs: [
                {id: 1, name: 'Andrey'},
                {id: 2, name: 'Petr'},
                {id: 3, name: 'Fedya'},
                {id: 4, name: 'Stepan'},
                {id: 5, name: 'Valerij'},
                {id: 6, name: 'Sveta'},
            ],
            newMessageBody: '',
        },
        sidebar: {},
    },
    _callSubscriber() {
        console.log('state changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    },
};

export default store;
window.store = store;
