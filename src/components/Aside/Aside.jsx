import React from "react";
import classes from './Aside.module.css';
import {NavLink} from "react-router-dom";

const Aside = () => {
    return (
        <aside className={`${classes['content-wrapper__menu']} ${classes['aside-bar']}`}>
            <nav className={classes['aside-bar__navigation']}>
                <ul className={classes['aside-bar__navigation-list']}>
                    <li className={classes['aside-bar__navigation-item']}>
                        <NavLink className={ navLink => navLink.isActive ? classes.active : classes[''] } to="/">
                            Profile
                        </NavLink>
                    </li>
                    <li className={classes['aside-bar__navigation-item']}>
                        <NavLink className={ navLink => navLink.isActive ? classes.active : classes[''] } to="/dialogs">
                            Messages
                        </NavLink>
                    </li>
                    <li className={classes['aside-bar__navigation-item']}>
                        <NavLink className={ navLink => navLink.isActive ? classes.active : classes[''] } to="/news">
                            News
                        </NavLink>
                    </li>
                    <li className={classes['aside-bar__navigation-item']}>
                        <NavLink className={ navLink => navLink.isActive ? classes.active : classes[''] } to="/music">
                            Music
                        </NavLink>
                    </li>
                </ul>
            </nav>

            <p className={classes['aside-bar__settings']}>
                <NavLink className={ navLink => navLink.isActive ? classes.active : classes[''] } to="/settings">
                    Settings
                </NavLink>
            </p>
        </aside>
    );
};

export default Aside;
