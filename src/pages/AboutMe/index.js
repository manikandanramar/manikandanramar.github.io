import React, { PureComponent } from 'react';
import styles from './styles.scss';
import { footer } from '../../config';
import Text from '../../components/Text';
import Image from '../../components/Image';
import Container from '../../components/Container';
import { me, aboutMe, title } from '../../config';

export default class AboutMe extends PureComponent {
  render() {
    return (
      <div className={styles.aboutMe} >
        <Image className={styles.myImage} source={me} />
        <div className={styles.content} >
          <div className={styles.title} >{title}</div>
          <div className={styles.domain} >{aboutMe.domain}</div>
          <Container className={styles.descriptionOne}>{aboutMe.d1}</Container>
          <div className={styles.descriptionTwo}>{aboutMe.d2}</div>
          <Container className={styles.descriptionThree}>{aboutMe.d3}</Container>
          <div className={styles.descriptionTwo}>{aboutMe.d4}</div>
          <Container className={styles.descriptionThree}>{aboutMe.d5}</Container>
          
          <div className={styles.followUsWrapper}>
            <div className={styles.followUsTitle} >{footer.followUs}</div>
            <div className={styles.followUsLinks} >
              {
                footer.socialLink.map((media, index) => <a key={index} target="_blank" href={media.link}><Image className={styles.socialMediaIcon} source={media.image} /></a>)
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
