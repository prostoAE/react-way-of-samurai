const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;

            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 7, message: body}],
            };
        default:
            return state;
    }
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,
});

export default dialogsReducer;
