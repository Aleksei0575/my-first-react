import React from "react";
import classes from './Dialogs.module.css';
import UserItem from "./UserItem/UserItem";
import MessagesUser from "./MessagesUser/MessagesUser";

const Dialogs = (props) => {
    
    // Функции отрисовки КОМПОНЕНТ в разметке JSX на основе входящих данных из массивов
    // Функция отрисовки КОМПОНЕТЫ UserItem
    let usersElement =
        props.users.map( (el, index) => (<UserItem key={index} name={el.name} id={el.id} activeItem={el.activeItem} />) );

    // Функция отрисовки КОМПОНЕТЫ MessagesUser
    let usersMessages =
        props.messages.map( (el, index) => <MessagesUser key={index} name={el.name} logoPath={el.logoPath} text={el.text} /> );

    return (
        <div className={`${classes.dialogs}`}>
            <h2>Dialogs</h2>
            <div className={classes['dialogs__wrapper']}>
                <ul className={classes['dialogs__user-list']}>
                    {usersElement}
                </ul>

                <ul className={classes['dialogs__messages-list']}>
                    {usersMessages}
                </ul>
            </div>
        </div>
    );
};

export default Dialogs;