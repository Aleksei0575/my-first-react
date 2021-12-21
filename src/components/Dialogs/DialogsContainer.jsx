import React from "react";
import {addMessageActionCreator, updateNewMessageTextActionCreater} from "../../redax/dialogs-reducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {
    let state = props.store.getState();

    let addMessageToComponents = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let changeDefaultText = (newText) => {
        props.store.dispatch(updateNewMessageTextActionCreater(newText));
    }

    return (
        <Dialogs addMessage={addMessageToComponents}
                 updateNewMessageText={changeDefaultText}
                 textDefault={state.dialogsPage.newMessageText}
                 users={state.dialogsPage.users}
                 messages={state.dialogsPage.messages} />
    );
};

export default DialogsContainer;