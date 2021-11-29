import classes from "./../Aside.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

const NavigationItem = (props) => {
    return (
        <li className={
            classes['aside-bar__navigation-item']}>
            <NavLink className={ navLink => navLink.isActive ? classes.active : classes[''] } to={props.linkPath}>
                {props.linkName}
            </NavLink>
        </li>
    );
};

export default NavigationItem;