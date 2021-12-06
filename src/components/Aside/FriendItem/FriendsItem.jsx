import React from "react";
import classes from "./../Aside.module.css";
import {NavLink} from "react-router-dom";

// Компонента для Aside > Friends
const FriendsItem = (props) => {
    let path = "/dialogs/" + props.id;
    let active = props.activeItem;
    let activePseudo = props.activePseudoEl;
    return (
        <li className={`${classes['aside-bar__friends-item']} ${classes[activePseudo]}`}>
            <NavLink className={ activeLink => activeLink.isActive ? classes[active] : classes[''] }
                     to={path}>
                {props.name}
            </NavLink>
        </li>
    );
};
export default FriendsItem;
