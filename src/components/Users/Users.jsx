import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';
import userAvatar from './../../assets/images/user.png';

const Users = (props) => {
    if (props.users.length === 0) {//Этих данных здксь НЕ ДОЛЖНО быть, они здксь временно!!!

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items);
            });

        // props.setUsers(
        //     [
        //         {
        //             id: 5,
        //             followed: false,
        //             name: 'Vlad U.',
        //             logo: 'https://www.pngall.com/wp-content/uploads/1/Smile.png',
        //             status: 'I am pensioner',
        //             location: {
        //                 city: 'Mirnohrad',
        //                 country: 'Ukraine'
        //             }
        //         },
        //         {
        //             id: 6,
        //             followed: false,
        //             name: 'Katia G.',
        //             logo: 'https://www.pngall.com/wp-content/uploads/1/Smile.png',
        //             status: 'I am so beautiful',
        //             location: {
        //                 city: 'Geneva',
        //                 country: 'Switzerland'
        //             }
        //         },
        //         {
        //             id: 7,
        //             followed: true,
        //             name: 'Mikail V.',
        //             logo: 'https://www.pngall.com/wp-content/uploads/1/Smile.png',
        //             status: 'I like hockey!!!',
        //             location: {
        //                 city: 'St. Peterburg',
        //                 country: 'Russia'
        //             }
        //         },
        //         {
        //             id: 8,
        //             followed: true,
        //             name: 'Viktor',
        //             logo: 'https://www.pngall.com/wp-content/uploads/1/Smile.png',
        //             status: 'I am currently working in Poland',
        //             location: {
        //                 city: 'Varshava',
        //                 country: 'Poland'
        //             }
        //         },
        //     ]
        // );
    }//Эти данные - это побочный эффект, а это плохо, это уже не чистая функция

    return <div className={`${classes.users}`}>
        <h2 className={classes['users__title']}>Users</h2>
        {
            props.users.map(user => <div key={user.id}>
                <div className={classes['users__wrapper']}>
                    <div className={classes['users__info']}>
                        <img src={user.photos.small != null ? user.photos.small : userAvatar} alt='User Logo'/>
                        <div> {
                            user.followed
                                ? <button type='button' onClick={() => {
                                    props.unfollow(user.id)
                                }}>Unfollow</button>
                                : <button type='button' onClick={() => {
                                    props.follow(user.id)
                                }}>Follow</button>
                        }
                        </div>

                    </div>
                    <div className={classes['users__content']}>
                        <div className={classes['users__content-left']}>
                            <h3>{user.name}</h3>
                            <p>{user.status}</p>
                        </div>
                        <div className={classes['users__content-right']}>
                            <p>{'user.location.country'}</p>
                            <p>{'user.location.city'}</p>
                        </div>
                    </div>
                </div>
            </div>)
        }
    </div>
};

export default Users;