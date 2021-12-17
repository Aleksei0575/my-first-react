const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.id,
                message: state.newPostText,
                likesCount: state.posts.likesCount
            };

            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
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
