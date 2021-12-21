import React from "react";
import InfoUser from "./InfoUser/Info-User";
import classes from './Profile.module.css';
import PostsContainer from "./Posts/PostsContainer";

const Profile = (props) => {
    // debugger;
    // console.log(props);
    return (
        <div className={`${classes['post-info']}`}>
            <h1 className='visually-hidden'>Post information</h1>
            <img
                className={classes['post-info__img']}
                src="https://images.pexels.com/photos/753325/pexels-photo-753325.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
                alt="promo blog"
            />

            <InfoUser logoPath="https://i.stack.imgur.com/1RfMf.jpg" name="Aleksei Ch." birth="Date of birth: 20, May"
                      city="City: Mirnohrad" education="Education: National Mining Academy of Ukraine"
                      sitePath="https://aleksei0575.github.io/myPortfolio/" siteName="My portfolio"/>

            <PostsContainer store={props.store} />
        </div>
    );
};

export default Profile;
