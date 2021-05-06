import React, { PureComponent } from 'react';
import { footer } from '../../config';
import styles from './styles.scss';

export default class Footer extends PureComponent {
  render() {
    return (
      <div>
        <div className={styles.copyrightFooter} >{footer.copyrightText}</div>
      </div>
    );
  }
}
