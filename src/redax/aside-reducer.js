const ADD_FRIEND = 'ADD-FRIEND';

let initialState = {
    navItems: [
        {
            linkName: 'Profile',
            linkPath: '/'
        },
        {
            linkName: 'Messages',
            linkPath: '/dialogs'
        },
        {
            linkName: 'News',
            linkPath: '/news'
        },
        {
            linkName: 'Music',
            linkPath: '/music'
        },
    ],
    friends: [
        {
            id: 1,
            name: 'Dmitry',
            activeItem: 'aside-bar__friends-item--active',
            activePseudo: 'aside-bar__friends-item--active::before'
        },
        {
            id: 2,
            name: 'Andrey',
            activeItem: 'aside-bar__friends-item--active',
            activePseudo: 'aside-bar__friends-item--active::before'
        },
        {
            id: 3,
            name: 'Svetlana',
            activeItem: 'aside-bar__friends-item--active',
            activePseudo: 'aside-bar__friends-item--active::before'
        },
    ]
}

const asideReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FRIEND:
            let newFriend = {
                id: 4,
                name: 'Friend#',
                activeItem: state.friends.activeItem,
                activePseudo: state.friends.activePseudo
            };

            return {
                ...state,
                friends: [...state.friends, newFriend]
            };
        default:
            return state;
    }
}

export const addFriendActionCreator = () =>
    ({
        type: ADD_FRIEND,
    });

export default asideReducer;
