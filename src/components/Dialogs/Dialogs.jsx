import React from "react";
import classes from './Dialogs.module.css';
import UserItem from "./UserItem/UserItem";
import MessagesUser from "./MessagesUser/MessagesUser";
import {
    addMessageActionCreator,
    updateNewMessageTextActionCreater,
} from "../../redax/state";

const Dialogs = (props) => {

    // Функции отрисовки КОМПОНЕНТ в разметке JSX на основе входящих данных из массивов
    // Функция отрисовки КОМПОНЕТЫ UserItem
    let usersElement =
        props.state.users.map((el, index) => (
            <UserItem key={index} name={el.name} id={el.id} activeItem={el.activeItem}/>));

    // Функция отрисовки КОМПОНЕТЫ MessagesUser
    let usersMessages =
        props.state.messages.map((el, index) => <MessagesUser key={index} name={el.name} logoPath={el.logoPath}
                                                              text={el.text}/>);

    //let newMessageElement = React.createRef(); //если не использовать Ref()
    let addMessageToComponents = (evt) => {
        evt.preventDefault();
        //props.addMessage();
        props.dispatch(addMessageActionCreator());
    }

    let changeDefaultText = (evt) => {
        //let newText = newMessageElement.current.value; // применим event
        let newText = evt.target.value;
        //props.updateNewMessageText(newText);
        props.dispatch(updateNewMessageTextActionCreater(newText));
    }

    return (
        <div className={`${classes.dialogs}`}>
            <h2>Dialogs</h2>
            <div className={classes['dialogs__wrapper']}>
                <ul className={classes['dialogs__user-list']}>
                    {usersElement}
                </ul>

                <div>
                    <ul className={classes['dialogs__messages-list']}>
                        {usersMessages}
                    </ul>
                    <form className={classes['dialogs__form']} method='POST' action='#'>
                        <div className={classes['dialogs__form-message']}>
                            <label className='visually-hidden'>
                                Your message
                            </label>
                            <textarea name='message'
                                      placeholder='your message...'
                                      required
                                      //ref={newMessageElement} не используем Ref()
                                      value={props.state.newMessageText}
                                      onChange={changeDefaultText} />
                        </div>
                        <button className={`${classes['dialogs__form-btn']}`} type='button'
                                onClick={addMessageToComponents}>
                            Send Message
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default Dialogs;