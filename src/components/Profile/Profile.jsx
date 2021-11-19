import InfoUser from "./InfoUser/Info-User";
import Posts from "./Posts/Posts";
import classes from './Profile.module.css';

const Profile = () => {
  return (
	  <section className={`${classes['content-wrapper__info']} ${classes['post-info']}`}>
		<h1 className='visually-hidden'>Post iformation</h1>
      	<img
			className={classes['post-info__img']}
        	src="https://images.pexels.com/photos/753325/pexels-photo-753325.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
        	alt="promo blog"
      	/>

      	<InfoUser />

      	<Posts />
    </section>
  );
};

export default Profile;
