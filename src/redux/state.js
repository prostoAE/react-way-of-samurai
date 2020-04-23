const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: "Hi, how are you?", likesCount: 12 },
                { id: 2, message: "Its my first post", likesCount: 3 },
                { id: 3, message: "First message", likesCount: 0 },
                { id: 4, message: "Bla bla", likesCount: 1 },
            ],
            newPostText: "it-kamasutra.com",
        },
        dialogsPage: {
            messages: [
                { id: 1, message: "hi" },
                { id: 2, message: "how are you?" },
                { id: 3, message: "Do you have money" },
                { id: 4, message: "How much?" },
                { id: 5, message: "Do you speak English?" },
                { id: 6, message: "Yes. Off cose" },
            ],
            dialogs: [
                { id: 1, name: "Andrey" },
                { id: 2, name: "Petr" },
                { id: 3, name: "Fedya" },
                { id: 4, name: "Stepan" },
                { id: 5, name: "Valerij" },
                { id: 6, name: "Sveta" },
            ],
            newMessageBody: "",
        },
        sidebar: {},
    },
    _callSubscriber() {
        console.log("state changed");
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            };

            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = "";
            this._state.dialogsPage.messages.push({ id: 7, message: body });
            this._callSubscriber(this._state);
        }
    },
};

export const addPostActionCreatot = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
});

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
});

export default store;
window.store = store;
