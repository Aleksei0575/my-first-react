import NewPost from './NewPost/NewPost';
import classes from './Posts.module.css';

const Posts = () => {
  return (
	  <div className={`${classes.posts}`}>
      	<h2 className={classes.posts__title}>My posts</h2>

		<form className={classes['posts__form']} method="POST" action="#">
			<div className={classes['posts__form-message']}>
				<label className='visually-hidden' for="message">
            		Your message
          		</label>
          		<input
            		id="message"
            		type="text"
            		name="message"
            		placeholder="your news..."
            		required
          		/>
        	</div>
			<button className={`${classes['posts__form-btn']} ${classes.button}`} type="submit">
          		Send
        	</button>
      	</form>

		<div className={classes.posts__history}>
			<NewPost message='Lorem ipsum dolor sit amet consectetur adipisicing elit.' likesCount='15' />
			<NewPost message='Est itaque iste possimus, dolore totam ipsa delectus excepturi.' likesCount='25' />
			<NewPost message='Est itaque consectetur adipisicing elit.' likesCount='0' />
      	</div>
    </div>
  );
};

export default Posts;
