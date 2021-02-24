import React, { PureComponent } from 'react';
import { string, array } from 'prop-types';
import Link from '../Link';
import styles from './styles.scss';

export default class Overview extends PureComponent {
  static propTypes = {
    title: string,
    link: string,
    children: array
  };

  render() {
    const { title, children, link } = this.props;

    return (
      <div className={styles.overviewWrapper} >
        <div className={styles.titleContainer} >
          <Link className={styles.title} to={link || '#'} >{title}</Link>
        </div>
        <div className={styles.childrenWrapper} >
          <div className={styles.children}>{children}</div>
        </div>
      </div>
    );
  }
}
