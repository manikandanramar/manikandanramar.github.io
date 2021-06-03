import React, { PureComponent } from 'react';
import { func, array } from 'prop-types';
import styles from './styles.scss';

export default class Home extends PureComponent {
  static propTypes = {
    getVideos: func,
    videos: array
  }

  render() {
    return (
      <div className={styles.home} >
        <div className={styles.topContainer} ></div>
        <div className={styles.glassContainer} >
          <div className={styles.glass} ></div>
        </div>
      </div>
    );
  }
}
