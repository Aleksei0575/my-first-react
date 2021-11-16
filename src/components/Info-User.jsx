const InfoUser = () => {
  return (
    <div className="post-info__user">
      <img
        className="post-info__user-logo"
        src="https://i.stack.imgur.com/1RfMf.jpg"
        alt="logo user"
      />
      <div className="post-info__user-info">
        <h2 className="post-info__user-title">Aleksei Ch.</h2>
        <p className="post-info__user-born">Date of birth: 20, May</p>
        <p className="post-info__user-city">City: Mirnohrad</p>
        <p className="post-info__user-education">
          Education: National Mining Academy of Ukraine
        </p>
        <p className="post-info__user-site">
          Web-site: <a href="https://aleksei0575.github.io/myPortfolio/">My portfolio</a>
        </p>
      </div>
    </div>
  );
};

export default InfoUser;
