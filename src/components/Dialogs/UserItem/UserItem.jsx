import React from "react";
import classes from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

// Компонента для User
const UserItem = (props) => {
    let path = "/dialogs/" + props.id;
    let active = props.activeItem;

    return (
        <li className={`${classes['dialogs__user-item']} ${classes[active]}`}>
            <NavLink
                className={navLink => navLink.isActive ? classes['dialogs__user-item--active'] : classes['']}
                to={path}>
                {props.name}
            </NavLink>
        </li>
    );
};

export default UserItem;