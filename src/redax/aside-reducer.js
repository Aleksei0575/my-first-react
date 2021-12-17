const ADD_FRIEND = 'ADD-FRIEND';

const asideReducer = (state, action) => {
    switch (action.type) {
        case ADD_FRIEND:
            let newFriend = {
                id: 4,
                name: 'Friend#',
                activeItem: state.friends.activeItem,
                activePseudo: state.friends.activePseudo
            };

            state.friends.push(newFriend);
            return state;
        default:
            return state;
    }
}

export const addFriendActionCreator = () =>
    ({
        type: ADD_FRIEND,
    });

export default asideReducer;
