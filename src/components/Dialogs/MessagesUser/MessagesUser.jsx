import React from "react";
import classes from './../Dialogs.module.css';

// Компонента для messages
const MessagesUser = (props) => {
    return (
        <li className={classes['dialogs__messages-item']}>
            <div>
                <img
                    src={props.logoPath}
                    alt='Smile'/>
                <span>{props.name}</span>
            </div>
            <p>
                {props.text}
            </p>
        </li>
    );
};

export default MessagesUser;