import React from 'react';
import NewPost from './NewPost/NewPost';
import classes from './Posts.module.css';
import {addPostActionCreator, updateNewPostTextActionCreater} from "../../../redax/state";

const Posts = (props) => {

    // Функция отрисоуи КОМПОНЕНТЫ в разметке JSX на основе входящих данных из массива
    let postElements =
        props.post.map((el, index) => <NewPost key={index} message={el.message} likesCount={el.likesCount}/>)

    let newPostElement = React.createRef();

    let addPostToComponents = (evt) => {
        evt.preventDefault();
        //props.addPost();
        props.dispatch(addPostActionCreator());
    };

    let changeDefaultText = () => {
        let newText = newPostElement.current.value;
        //props.updateNewPostText(newText);
        props.dispatch(updateNewPostTextActionCreater(newText));
    }
    return (
        <div className={`${classes.posts}`}>
            <h2 className={classes.posts__title}>{props.title}</h2>

            <form className={classes['posts__form']} method='POST' action='#'>
                <div className={classes['posts__form-message']}>
                    <label className='visually-hidden'>
                        Your message
                    </label>
                    <textarea name='message' placeholder='your news...' required ref={newPostElement} value={props.textDefault} onChange={ changeDefaultText } />
                </div>
                <button className={`${classes['posts__form-btn']}`} type='button' onClick={ addPostToComponents }>
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
