import React from 'react';

import {addPostActionCreator, updateNewPostTextActionCreater} from "../../../redax/profile-reducer";
import Posts from "./Posts";
import StoreContext from "../../../StoreContext";


const PostsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                let addPostToComponents = () => {
                    store.dispatch(addPostActionCreator());
                };
                let changeDefaultText = (newText) => {
                    store.dispatch(updateNewPostTextActionCreater(newText));
                }
                return <Posts title="My posts"
                       textButton="Send"
                       textDefault={state.profilePage.newPostText}
                       updateNewPostText={changeDefaultText}
                       addPost={addPostToComponents}
                       post={state.profilePage.posts} />
                }
            }
        </StoreContext.Consumer>
    );
};

export default PostsContainer;
