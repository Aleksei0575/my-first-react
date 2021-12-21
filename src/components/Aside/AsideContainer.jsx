import React from "react";

import {addFriendActionCreator} from "../../redax/aside-reducer";
import Aside from "./Aside";

const AsideContainer = (props) => {
    let state = props.store.getState().aside;

    let addFriendsToComponent = () => {
        props.store.dispatch(addFriendActionCreator());
    };

    return (
        <Aside addFriendActionCreator={addFriendsToComponent}
               navItems={state.navItems}
               friends={state.friends} />
    );
};

export default AsideContainer;
