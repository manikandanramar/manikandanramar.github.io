import React, { PureComponent } from 'react';
import { func, array } from 'prop-types';
import NavBar from '../../components/NavBar';
import Image from '../../components/Image';
import styles from './styles.scss';
import { title, tags, me, about, positions, socialLinks, skills, experiences } from '../../config';

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
                  <Image className={styles.profilePic} source={me} />
                  <div className={styles.profileDetails} >
                    <div className={styles.name} >{title}</div>
                    <div className={styles.positions} >
                      {
                        positions.map((position, i) => (<div key={i} className={styles.position} >{position}</div>))
                      }
                    </div>
                    <div className={styles.about} >{about}</div>
                    <div className={styles.tags} >
                      {
                        tags.map((tag, i) => (<span key={i} className={styles.tag} >{tag}</span>))
                      }
                    </div>
                  </div>
                </div>

                {/* Social Media Links */}
                <div className={styles.socialMedia} >
                  {
                    socialLinks.map((media, i) => (
                      <a key={i} className={styles.socialLink} href={media.link} target="__blank" >
                        <Image className={styles.socialImage} source={media.image} />
                      </a>
                    ))
                  }
                </div>

                {/* Skill levels */}
                <div className={styles.skills} >
                  <div className={styles.title} >Skills & Expertise</div>
                  <div className={styles.skillsContainer} >
                    {
                      skills.map((skill, i) => (
                        <div key={i} className={styles.skill} >
                          <div className={styles.skillName} >{skill.name}</div>
                          <div className={styles.skillLevel} >
                            <div className={styles.level} style={{  width: `${(skill.level/10)*100}%` }} ></div>
                          </div>
                        </div>
                      ))
                    }
                  </div>
                </div>

                {/* Experience */}
                <div className={styles.experiences} >
                  <div className={styles.title} >Experience</div>
                  <div className={styles.expList} >
                    {
                      experiences.map((exp, i) => (
                        <div key={i} className={styles.exp} >
                          
                        </div>
                      ))
                    }
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
