// Объект с данными для проекта (пока данные для страницы Dialogs и Profile > Posts)
const ADD_POST = 'ADD-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_FRIEND = 'ADD-FRIEND';

let store = {
    _state: {
        dialogsPage: {// ОБЪЕКТ-ВЕТКА. Каждая ветка обслуживает одну какую-то страницу
            users: [
                {id: 1, name: 'Dmitry', activeItem: 'dialogs__user-item--active'},
                {id: 2, name: 'Andrey', activeItem: ''},
                {id: 3, name: 'Svetlana', activeItem: ''},
                {id: 4, name: 'Aleksandra', activeItem: ''},
                {id: 5, name: 'Viktor', activeItem: ''},
                {id: 6, name: 'Valeriy', activeItem: ''}
            ],
            messages: [
                {
                    id: 1,
                    name: 'Dmitry',
                    logoPath: 'data:image/jpeg;base64,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',
                    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
                },
                {
                    id: 2,
                    name: 'My',
                    logoPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ALNyG_Cty1d4Xahk-P-UZhAxS0-SiLss1w&usqp=CAU',
                    text: 'Consectetur adipisicing elit lorem ipsum dolor sit amet.'
                },
                {
                    id: 3,
                    name: 'My',
                    logoPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ALNyG_Cty1d4Xahk-P-UZhAxS0-SiLss1w&usqp=CAU',
                    text: 'Amet sit dolor consectetur adipisicing elit lorem ipsum.'
                },
                {
                    id: 4,
                    name: 'Dmitry',
                    logoPath: 'data:image/jpeg;base64,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',
                    text: 'Ipsum dolor sit amet lorem consectetur adipisicing elit.'
                },
            ],
            newMessageText: 'default text from BLL'
        },
        profilePage: {// ВЕТКА. Каждая ветка обслуживает одну какую-то страницу
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
        },
        aside: {
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
    }, // _приватные свойства
    _callSubscriber() {
        console.log('state change');
    }, // _приватные свойства

    _addPost() {
        let newPost = {
            id: this._state.profilePage.posts.id,
            message: this._state.profilePage.newPostText,
            likesCount: this._state.profilePage.posts.likesCount
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    }, // _приватные методы меняющие наш state
    _addMessage() {
        let newMessage = {
            id: this._state.dialogsPage.messages.id,
            name: 'SomeUser',
            logoPath: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0ALNyG_Cty1d4Xahk-P-UZhAxS0-SiLss1w&usqp=CAU',
            text: this._state.dialogsPage.newMessageText
        }
        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    }, // _приватные методы меняющие наш state
    _updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    }, // _приватные методы меняющие наш state
    _updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText;
        this._callSubscriber(this._state);
    }, // _приватные методы меняющие наш state
    _addFriend() {
        let newFriend = {
            id: 4,
            name: 'Friend#',
            activeItem: this._state.aside.friends.activeItem,
            activePseudo: this._state.aside.friends.activePseudo
        };

        this._state.aside.friends.push(newFriend);
        this._callSubscriber(this._state);
    },

    getState() {
        return this._state;
    }, // публичные свойства/методы
    listener(observer) {
        this._callSubscriber = observer;
    },  //публичные свойства/методы функция слушает/наблюдает за state-данными
    //в случае их изменений запускает функцию listener
    //которая внутри себя вызывает _callSubscriber()

    dispatch(action) { //action - объект, который описывет какое действие совершить, имеет
        if(action.type === ADD_POST) { // обязательное св-во type: '', - которое описывет
            this._addPost();
        } else if(action.type === ADD_MESSAGE) {
            this._addMessage();
        } else if(action.type === UPDATE_NEW_POST_TEXT) {
            this._updateNewPostText(action.newText);
        } else if(action.type === UPDATE_NEW_MESSAGE_TEXT) {
            this._updateNewMessageText(action.newText);
        } else if(action.type === ADD_FRIEND) {
            this._addFriend();
        }
    }
}

export const addPostActionCreator = () => ({ type: ADD_POST, });

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE, });

export const updateNewPostTextActionCreater = (text) =>
    ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text,
    });

export const updateNewMessageTextActionCreater = (text) =>
    ({
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text,
    });

export const addFriendActionCreator = () =>
    ({
        type: ADD_FRIEND,
    });

export default store;
