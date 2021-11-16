const Aside = () => {
  return (
    <aside className="content-wrapper__menu aside-bar">
      <nav className="aside-bar__navigation">
        <ul className="aside-bar__navigation-list">
          <li className="aside-bar__navigation-item">
            <a className="aside-bar__navigation-link" href="#s">
              Profile
            </a>
          </li>
          <li className="aside-bar__navigation-item">
            <a className="aside-bar__navigation-link" href="#s">
              Messages
            </a>
          </li>
          <li className="aside-bar__navigation-item">
            <a className="aside-bar__navigation-link" href="#s">
              News
            </a>
          </li>
          <li className="aside-bar__navigation-item">
            <a className="aside-bar__navigation-link" href="#s">
              Music
            </a>
          </li>
        </ul>
      </nav>

      <p className="aside-bar__settings">
        <a className="aside-bar__settings-link" href="#s">
          Settings
        </a>
      </p>
    </aside>
  );
};

export default Aside;
