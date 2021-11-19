import classes from './InfoUser.module.css';

const InfoUser = () => {
  return (
    <div className={`${classes['post-info__user']} ${classes['user-info']}`}>
      <img
        className={classes['user-info__logo']}
        src="https://i.stack.imgur.com/1RfMf.jpg"
        alt="logo user"
      />
      <div className={classes['user-info__block']}>
        <h2 className={classes['user-info__title']}>Aleksei Ch.</h2>
        <p className={classes['user-info__born']}>Date of birth: 20, May</p>
        <p className={classes['user-info__city']}>City: Mirnohrad</p>
        <p className={classes['user-info__education']}>
          Education: National Mining Academy of Ukraine
        </p>
        <p className={classes['user-info__site']}>
          Web-site: <a href="https://aleksei0575.github.io/myPortfolio/">My portfolio</a>
        </p>
      </div>
    </div>
  );
};

export default InfoUser;
