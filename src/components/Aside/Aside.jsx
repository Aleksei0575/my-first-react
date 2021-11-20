import React from "react";
import classes from './Aside.module.css';

const Aside = () => {
    return (
        <aside className={`${classes['content-wrapper__menu']} ${classes['aside-bar']}`}>
            <nav className={classes['aside-bar__navigation']}>
                <ul className={classes['aside-bar__navigation-list']}>
                    <li className={classes['aside-bar__navigation-item']}>
                        <a className={classes['aside-bar__navigation-link']} href="/profile">
                            Profile
                        </a>
                    </li>
                    <li className={classes['aside-bar__navigation-item']}>
                        <a className={classes['aside-bar__navigation-link']} href="/dialogs">
                            Messages
                        </a>
                    </li>
                    <li className={classes['aside-bar__navigation-item']}>
                        <a className={classes['aside-bar__navigation-link']} href="/news">
                            News
                        </a>
                    </li>
                    <li className={classes['aside-bar__navigation-item']}>
                        <a className={classes['aside-bar__navigation-link']} href="/music">
                            Music
                        </a>
                    </li>
                </ul>
            </nav>

            <p className={classes['aside-bar__settings']}>
                <a className={classes['aside-bar__settings-link']} href="/settings">
                    Settings
                </a>
            </p>
        </aside>
    );
};

export default Aside;
