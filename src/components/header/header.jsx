import React from 'react'
import { Link } from 'gatsby'
import logo from '../../images/Group 6.svg';

import styles from './header.module.scss'

const Header = ({ siteTitle, menuLinks }) => (
  <div className={styles.headerContainer}>
    <div className={styles.headerContent}>
      <h1 className={styles.logo}>
        <Link
          to="/"
          style={{
            textDecoration: 'none',
          }}
        >
          <img src={logo}/>
        </Link>
      </h1>
      <nav
        className={styles.nav}
      >
        {
          menuLinks.map(link =>
            <li key={link.name} style={{ 'listStyleType': 'none' }}>
              <Link to={link.link}>{link.name}</Link>
            </li>)
        }
      </nav>
    </div>
  </div>
)

export default Header
