import React from "react";
import classes from './Users.module.css';

const Users = (props) => {
    if(props.usersInfo.length === 0) {//Этих данных здксь НЕ ДОЛЖНО быть, они здксь временно!!!
        props.setUsers(
            [
                {
                    id: 1,
                    followed: true,
                    name: 'Dmitry K.',
                    logo: 'https://www.pngall.com/wp-content/uploads/1/Smile.png',
                    status: 'I am looking for a job right now...',
                    location: {
                        city: 'Minsk',
                        country: 'Belarus'
                    }
                },
                {
                    id: 2,
                    followed: true,
                    name: 'Svetlana D.',
                    logo: 'https://www.pngall.com/wp-content/uploads/1/Smile.png',
                    status: 'I am so pretty',
                    location: {
                        city: 'Minsk',
                        country: 'Belarus'
                    }
                },
                {
                    id: 3,
                    followed: false,
                    name: 'Sergey S.',
                    logo: 'https://www.pngall.com/wp-content/uploads/1/Smile.png',
                    status: 'I like football!!!',
                    location: {
                        city: 'Kiev',
                        country: 'Ukraine'
                    }
                },
                {
                    id: 4,
                    followed: false,
                    name: 'Andrey T.',
                    logo: 'https://www.pngall.com/wp-content/uploads/1/Smile.png',
                    status: 'I am free to help you to create good Video Production',
                    location: {
                        city: 'Philadelphia',
                        country: 'United State'
                    }
                },
            ]
        )
    }//Эти данные - это побочный эффект, а это плохо, это уже не чистая функция

    return <div className={`${classes.users}`}>
        <h2 className={classes['users__title']}>Users</h2>
        {
            props.usersInfo.map(user => <div key={user.id}>
                <div className={classes['users__wrapper']}>
                    <div className={classes['users__info']}>
                        <img src={user.logo} alt='User Logo'/>
                        <div> {
                            user.followed
                                ? <button type='button' onClick={() => {props.unfollow(user.id)} }>Unfollow</button>
                                : <button type='button' onClick={() => {props.follow(user.id)} }>Follow</button>
                        }
                        </div>

                    </div>
                    <div className={classes['users__content']}>
                        <div className={classes['users__content-left']}>
                            <h3>{user.name}</h3>
                            <p>{user.status}</p>
                        </div>
                        <div className={classes['users__content-right']}>
                            <p>{user.location.country}</p>
                            <p>{user.location.city}</p>
                        </div>
                    </div>
                </div>
            </div>)
        }
    </div>
};

export default Users;