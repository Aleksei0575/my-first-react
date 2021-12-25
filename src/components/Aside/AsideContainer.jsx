import React from "react";

import {addFriendActionCreator} from "../../redax/aside-reducer";
import Aside from "./Aside";
import StoreContext from "../../StoreContext";

const AsideContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().aside;
                let addFriendsToComponent = () => {
                    store.dispatch(addFriendActionCreator());
                };
                return <Aside navItems={state.navItems}
                              friends={state.friends}
                              addFriendActionCreator={addFriendsToComponent} />
                }
            }
        </StoreContext.Consumer>
    );
};

export default AsideContainer;
