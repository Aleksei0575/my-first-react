import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';
import userAvatar from './../../assets/images/user.png';


class Users extends React.Component {//Создали классовую компоненту

    // constructor(props) {
    //     // Если конструктор ничего не дклвет кроме как возвращает новый объект
    //     // то его можно не писать.
    //     super(props);
    // }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);

        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            if (pages.length < 7) {
                pages.push(i);
            }
            //pages.push(i);
        }

        return <div className={`${classes.users}`}>
            <h2 className={classes['users__title']}>Users</h2>

            <ul className={classes['users__pagination-list']}>
                {pages.map((page, index) => {
                    return (
                        <li key={index} className={classes['users__pagination-item'] + ' ' +
                        `${this.props.currentPage === page ? classes['users__pagination-item--active'] : classes['']}`}
                            onClick={(evt) => {
                                this.onPageChanged(page);
                            }}>
                            <span
                                className={this.props.currentPage === page ? classes['users__pagination-active'] : classes['']}>{page}</span>
                        </li>
                    )
                })}

            </ul>

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