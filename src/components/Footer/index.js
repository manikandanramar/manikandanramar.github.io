import React, { PureComponent } from 'react';
import { footer } from '../../config';
import Image from '../Image';
import styles from './styles.scss';

export default class Footer extends PureComponent {
  render() {
    return (
      <div>
        <div className={styles.footerContent} >
          <div className={styles.footerWrapper}>
            <div className={styles.footerTitle} >{footer.aboutMe}</div>
            <div className={styles.footerText} >{footer.aboutText}</div>
          </div>
          <div className={styles.followUsWrapper}>
            <div className={styles.followUsTitle} >{footer.followUs}</div>
            <div className={styles.followUsLinks} >
              {
                footer.socialLink.map((media, index) => <a key={index} target="_blank" href={media.link}><Image className={styles.socialMediaIcon} source={media.image} /></a>)
              }
            </div>
          </div>
        </div>
        <div className={styles.copyrightFooter} >{footer.copyrightText}</div>
      </div>
    );
  }
}
