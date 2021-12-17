const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: state.messages.id,
                name: 'SomeUser',
                logoPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ALNyG_Cty1d4Xahk-P-UZhAxS0-SiLss1w&usqp=CAU',
                text: state.newMessageText
            }

            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE, });

export const updateNewMessageTextActionCreater = (action) =>
    ({
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: action,
    });

export default dialogsReducer;
