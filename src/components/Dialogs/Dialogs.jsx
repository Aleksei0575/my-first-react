import React from "react";
import classes from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={`${classes.dialog}`}>
            <h1 className='visually-hidden'>Post information</h1>
            <h2>Dialogs</h2>
        </div>
    );
};

export default Dialogs;