import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { func, array } from 'prop-types';
import styles from './styles.scss';
// import * as youtubeActions from '../../redux/modules/youtube';
import { title, caption } from '../../config';
// import Helmet from 'react-helmet';
import AboutMe from '../AboutMe';

// @connect(state => ({ videos: state.youtube.videos }),
// {
//   getVideos: youtubeActions.getVideos
// })
export default class Home extends PureComponent {
  static propTypes = {
    getVideos: func,
    videos: array
  }
  // componentWillMount() {
  //   if (!this.props.videos.length) {
  //     this.props.getVideos();
  //   }
  // }

  componentDidMount() {
    // Google Analyitcs
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'UA-106649859-2');
  }

  render() {
    return (
      <div className={styles.home} >
        <AboutMe />
      </div>
    );
  }
}
