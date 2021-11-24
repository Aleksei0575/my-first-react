import React from "react";
import classes from './InfoUser.module.css';

const InfoUser = (props) => {
    return (
        <div className={`${classes['post-info__user']} ${classes['user-info']}`}>
            <img
                className={classes['user-info__logo']}
                src={props.logoPath}
                alt="logo user"
            />
            <div className={classes['user-info__block']}>
                <h2 className={classes['user-info__title']}>{props.name}</h2>
                <p className={classes['user-info__born']}>{props.birth}</p>
                <p className={classes['user-info__city']}>{props.city}</p>
                <p className={classes['user-info__education']}>
                    {props.education}
                </p>
                <p className={classes['user-info__site']}>
                    Web-site: <a href={props.sitePath}>{props.siteName}</a>
                </p>
            </div>
        </div>
    );
};

export default InfoUser;
