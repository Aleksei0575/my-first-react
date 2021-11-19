import classes from './Aside.module.css';

const Aside = () => {
  return (
    <aside className={`${classes['content-wrapper__menu']} ${classes['aside-bar']}`}>
      <nav className={classes['aside-bar__navigation']}>
        <ul className={classes['aside-bar__navigation-list']}>
          <li className={classes['aside-bar__navigation-item']}>
            <a className={classes['aside-bar__navigation-link']} href="#s">
              Profile
            </a>
          </li>
          <li className={classes['aside-bar__navigation-item']}>
            <a className={classes['aside-bar__navigation-link']} href="#s">
              Messages
            </a>
          </li>
          <li className={classes['aside-bar__navigation-item']}>
            <a className={classes['aside-bar__navigation-link']} href="#s">
              News
            </a>
          </li>
          <li className={classes['aside-bar__navigation-item']}>
            <a className={classes['aside-bar__navigation-link']} href="#s">
              Music
            </a>
          </li>
        </ul>
      </nav>

      <p className={classes['aside-bar__settings']}>
        <a className={classes['aside-bar__settings-link']} href="#s">
          Settings
        </a>
      </p>
    </aside>
  );
};

export default Aside;
