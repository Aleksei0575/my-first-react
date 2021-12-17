import React from "react";
import classes from './Aside.module.css';
import {NavLink} from "react-router-dom";
import FriendsItem from "./FriendItem/FriendsItem";
import NavigationItem from "./NavigationItem/NavigationItem";
import {addFriendActionCreator} from "../../redax/aside-reducer";



const Aside = (props) => {
    // Функция отрисовки КОМПОНЕТЫ FriendsItem
    let navElement =
        props.state.navItems.map( (el, index) => (<NavigationItem key={index} linkName={el.linkName} linkPath={el.linkPath}  />) );

    // Функция отрисовки КОМПОНЕТЫ FriendsItem
    let friendsElement =
        props.state.friends.map( (el, index) => (<FriendsItem key={index} name={el.name} id={el.id} activeItem={el.activeItem} activePseudoEl={el.activePseudo} />) );

    let addFriendsToComponent = () => {
        props.dispatch(addFriendActionCreator());
    };

    return (
        <aside className={`${classes['content-wrapper__menu']} ${classes['aside-bar']}`}>
            <nav className={classes['aside-bar__navigation']}>
                <ul className={classes['aside-bar__navigation-list']}>
                    { navElement }
                </ul>
            </nav>

            <p className={classes['aside-bar__settings']}>
                <NavLink className={ navLink => navLink.isActive ? classes.active : classes[''] } to="/settings">
                    Settings
                </NavLink>
            </p>

            <div className={classes['aside-bar__friends-block']}>
                <h2 className={classes['aside-bar__friends-title']}>Friends</h2>
                <ul className={classes['aside-bar__friends-list']}>
                    { friendsElement }
                </ul>
                <button className={classes['aside-bar__friends-btn']} type='button' onClick={ addFriendsToComponent }>Add friend</button>
            </div>
        </aside>
    );
};

export default Aside;
