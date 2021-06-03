import React, { PureComponent } from 'react';
import Link from '../Link';
import styles from './styles.scss';

export default class NavBar extends PureComponent {
  
  render() {
    return (
      <nav className={styles.navBar} >
        <div className={styles.container} >
          <Link className={styles.title} to="/" >Hello World!</Link>
        </div>
      </nav>
    );
  }
}
