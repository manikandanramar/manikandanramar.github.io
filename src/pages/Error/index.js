import React, { PureComponent } from 'react';
import styles from './styles.scss';
import Text from '../../components/Text';
import Link from '../../components/Link';
import Image from '../../components/Image';
import { homeIcon } from '../../config';
import { pageErrorMessage } from '../../config';

export default class Error extends PureComponent {
  render() {
    return (
      <div className={styles.errorWrapper} >
        <Text className={styles.fourNotFour} value="404" />
        <Text className={styles.errorMessage} value={pageErrorMessage} />
        <div className={styles.homeLinkWrapper} >
          <Link to="/" >
            <Image className={styles.homeIcon} source={homeIcon} />
          </Link>
        </div>
      </div>
    );
  }
}
