import React from "react";
import classes from './Header.module.css';

const Header = () => {
    return (
        <header className={classes.header}>
            <img className={classes.header__img}
                 src="https://upload.wikimedia.org/wikipedia/commons/0/01/Digital-chocolate-small-logo.png" alt="Logo"/>
        </header>
    )
};

export default Header;