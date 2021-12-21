import React from 'react';

import {addPostActionCreator, updateNewPostTextActionCreater} from "../../../redax/profile-reducer";
import Posts from "./Posts";


const PostsContainer = (props) => {
    let state = props.store.getState();

    let addPostToComponents = () => {
        props.store.dispatch(addPostActionCreator());
    };

    let changeDefaultText = (newText) => {
        props.store.dispatch(updateNewPostTextActionCreater(newText));
    }

    return (
        <Posts title="My posts"
               textButton="Send"
               textDefault={state.profilePage.newPostText}
               updateNewPostText={changeDefaultText}
               addPost={addPostToComponents}
               post={state.profilePage.posts} />
    );
};

export default PostsContainer;
