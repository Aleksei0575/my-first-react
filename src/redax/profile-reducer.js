const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {// ВЕТКА. Каждая ветка обслуживает одну какую-то страницу
    posts: [
        {
            id: 1,
            message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
            likesCount: 15
        },
        {
            id: 2,
            message: 'Est itaque iste possimus, dolore totam ipsa delectus excepturi.',
            likesCount: 25
        },
        {
            id: 3,
            message: 'Est itaque consectetur adipisicing elit.',
            likesCount: 8
        },
    ],
    newPostText: 'default text from BLL'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.id,
                message: state.newPostText,
                likesCount: state.posts.likesCount
            };

            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: '',
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            };
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST, });

export const updateNewPostTextActionCreater = (action) =>
    ({
        type: UPDATE_NEW_POST_TEXT,
        newText: action,
    });

export default profileReducer;
