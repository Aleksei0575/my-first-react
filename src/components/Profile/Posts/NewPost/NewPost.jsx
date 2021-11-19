import classes from './NewPost.module.css';

const NewPost = (props) => {
  return (
	  <p className={`${classes['posts__history-item']} ${classes['posts__history-one']}`}>
      {props.message}
      <span>Like <b>{props.likesCount}</b></span>
    </p>
  );
};

export default NewPost;
