import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';
import userAvatar from './../../assets/images/user.png';

const Users = (props) => {
    let getUsers = () => {
        if (props.users.length === 0) {//Этих данных здксь НЕ ДОЛЖНО быть, они здксь временно!!!

            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    props.setUsers(response.data.items);
                });
        }//Эти данные - это побочный эффект, а это плохо, это уже не чистая функция
    }

    return <div className={`${classes.users}`}>
        <h2 className={classes['users__title']}>Users</h2>
        <button className={classes['users__load-btn']} type='button' onClick={getUsers}>Get Users</button>
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