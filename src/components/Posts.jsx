const Posts = () => {
  return (
    <div className="post-info__posts posts">
      	<h2 className="posts__title">My posts</h2>

      	<form className="posts__form" method="POST" action="#">
        	<div className="posts__form-message">
          		<label className="visually-hidden" for="message">
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
        	<button class="posts__form-btn button" type="submit">
          		Send
        	</button>
      	</form>

      	<div className="posts__history">
        	<p className="posts__history-item posts__history-one">
          		Lorem ipsum dolor sit amet consectetur adipisicing elit.
        	</p>
        	<p className="posts__history-item posts__history-two">
          		Est itaque iste possimus, dolore totam ipsa delectus excepturi.
        	</p>
      	</div>
    </div>
  );
};

export default Posts;
