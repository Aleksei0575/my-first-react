import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';
import userAvatar from './../../assets/images/user.png';


class Users extends React.Component {//Создали классовую компоненту

    constructor(props) {
        super(props);

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items);
            });

    }

    render() {
        return <div className={`${classes.users}`}>
            <h2 className={classes['users__title']}>Users</h2>

            {
                this.props.users.map(user => <div key={user.id}>
                    <div className={classes['users__wrapper']}>
                        <div className={classes['users__info']}>
                            <img src={user.photos.small != null ? user.photos.small : userAvatar} alt='User Logo'/>
                            <div> {
                                user.followed
                                    ? <button type='button' onClick={() => {
                                        this.props.unfollow(user.id)
                                    }}>Unfollow</button>
                                    : <button type='button' onClick={() => {
                                        this.props.follow(user.id)
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
    }
}

export default Users;