import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreater} from "../../redax/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState();
                let addMessageToComponents = () => {
                    store.dispatch(addMessageActionCreator());
                }
                let changeDefaultText = (newText) => {
                    store.dispatch(updateNewMessageTextActionCreater(newText));
                }
                return <Dialogs users={state.dialogsPage.users}
                                messages={state.dialogsPage.messages}
                                textDefault={state.dialogsPage.newMessageText}
                                addMessage={addMessageToComponents}
                                updateNewMessageText={changeDefaultText} />
                }
            }
        </StoreContext.Consumer>
    );
};

export default DialogsContainer;