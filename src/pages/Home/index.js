import React, { PureComponent } from 'react';
import { func, array } from 'prop-types';
import NavBar from '../../components/NavBar';
import Image from '../../components/Image';
import styles from './styles.scss';
import { title, tags } from '../../config';

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
          <div className={styles.glass} >
            <NavBar />
            <div className={styles.content} >

                {/* Profile Details */}
                <div className={styles.profile} >
                  <Image className={styles.profilePic} source="https://daisyui.com/tailwind-css-component-profile-1@94w.png" />
                  <div className={styles.profileDetails} >
                    <div className={styles.name} >{title}</div>
                    <div className={styles.tags} >
                      {
                        tags.map((tag, i) => (<span key={i} className={styles.tag} >{tag}</span>))
                      }
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
