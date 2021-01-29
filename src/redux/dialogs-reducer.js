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
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 7, message: body}],
            };
        default:
            return state;
    }
};

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});

export default dialogsReducer;
