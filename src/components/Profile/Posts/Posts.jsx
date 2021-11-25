import React from 'react';
import NewPost from './NewPost/NewPost';
import classes from './Posts.module.css';

const Posts = (props) => {

    // Функция отрисоуи КОМПОНЕНТЫ в разметке JSX на основе входящих данных из массива
    let postElements =
        props.posts.map( (el, index) => <NewPost key={index} message={el.message} likesCount={el.likesCount} /> )

    return (
        <div className={`${classes.posts}`}>
            <h2 className={classes.posts__title}>{props.title}</h2>

            <form className={classes['posts__form']} method='POST' action='#'>
                <div className={classes['posts__form-message']}>
                    <label className='visually-hidden'>
                        Your message
                    </label>
                    <textarea name='message' placeholder='your news...' required>

                    </textarea>
                </div>
                <button className={`${classes['posts__form-btn']}`} type='submit'>
                    {props.textButton}
                </button>
            </form>

            <div className={classes.posts__history}>
                {postElements}
            </div>
        </div>
    );
};

export default Posts;
