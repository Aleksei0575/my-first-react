import InfoUser from "./Info-User";
import Posts from "./Posts";

const Profile = () => {
  return (
    <section className="content-wrapper__info post-info">
      	<h1 className="visually-hidden">Post iformation</h1>
      	<img
        	className="post-info__img"
        	src="https://images.pexels.com/photos/753325/pexels-photo-753325.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200"
        	alt="promo blog"
      	/>

      	<InfoUser />

      	<Posts />
    </section>
  );
};

export default Profile;
