import React, { useContext, useState } from 'react';
import { Link } from 'gatsby';
import logo from '../../images/logos/headerLogo.svg';

import * as styles from './header.module.scss';
import { NightDayToggle } from '../NightDayToggle';
import { DarkModeContext } from '../../context/DarkModeContext';

const Header = ({ menuLinks }) => {
  const [navOpen, setNavOpen] = useState(false);
  const { isDark, setDarkMode } = useContext(DarkModeContext);

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <h1 className={styles.logo}>
          <Link to='/'>
            <img src={logo} alt='CodeGregg logo' />
          </Link>
        </h1>
        <nav className={`${styles.nav} ${navOpen ? styles.open : ''}`}>
          <button
            onClick={() => setNavOpen(!navOpen)}
            className={styles.menuToggle}
            aria-label='Close main menu'
          >
            <span className={styles.srOnly}>Toggle main menu</span>
            <span className={styles.hamburger}></span>
          </button>
          <ul>
            {menuLinks.map((link) => (
              <li key={link.name} style={{ listStyleType: 'none' }}>
                <Link to={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div
          className={styles.backdrop}
          tabIndex='-1'
          aria-hidden='true'
          onClick={() => setNavOpen(!navOpen)}
          hidden
        ></div>
        <NightDayToggle
          checked={isDark}
          onChange={() => setDarkMode(!isDark)}
        />
      </div>
    </div>
  );
};

export default Header;
