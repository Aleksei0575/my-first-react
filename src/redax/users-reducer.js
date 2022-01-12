const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {// ВЕТКА. Каждая ветка обслуживает одну какую-то страницу
    usersInfo: [
        // {
        //     id: 1,
        //     followed: true,
        //     name: 'Dmitry K.',
        //     logo: 'https://www.pngall.com/wp-content/uploads/1/Smile.png',
        //     status: 'I am looking for a job right now...',
        //     location: {
        //         city: 'Minsk',
        //         country: 'Belarus'
        //     }
        // },
        // {
        //     id: 2,
        //     followed: true,
        //     name: 'Svetlana D.',
        //     logo: 'https://www.pngall.com/wp-content/uploads/1/Smile.png',
        //     status: 'I am so pretty',
        //     location: {
        //         city: 'Minsk',
        //         country: 'Belarus'
        //     }
        // },
        // {
        //     id: 3,
        //     followed: false,
        //     name: 'Sergey S.',
        //     logo: 'https://www.pngall.com/wp-content/uploads/1/Smile.png',
        //     status: 'I like football!!!',
        //     location: {
        //         city: 'Kiev',
        //         country: 'Ukraine'
        //     }
        // },
        // {
        //     id: 4,
        //     followed: false,
        //     name: 'Andrey T.',
        //     logo: 'https://www.pngall.com/wp-content/uploads/1/Smile.png',
        //     status: 'I am free to help you to create good Video Production',
        //     location: {
        //         city: 'Philadelphia',
        //         country: 'United State'
        //     }
        // },
    ],
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                //users: [...state.usersInfo],//такое копирование в данном случае не очень подходит
                usersInfo: state.usersInfo.map(user => {//подходит такое через map()
                    if(user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                //users: [...state.usersInfo],//такое копирование в данном случае не очень подходит
                usersInfo: state.usersInfo.map(user => {//подходит такое через map()
                    if(user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user;
                })
            }
        case SET_USERS:
            return {...state, usersInfo: [...state.usersInfo, ...action.users]}
        default:
            return state;
    }
}

export const followActionCreator = (userId) => ({ type: FOLLOW, userId });

export const unfollowActionCreator = (userId) => ({ type: UNFOLLOW, userId });

export const setUsersActionCreator = (users) => ({ type: SET_USERS, users });

export default usersReducer;
