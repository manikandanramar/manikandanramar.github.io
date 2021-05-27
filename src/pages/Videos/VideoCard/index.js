import React, { PureComponent } from 'react';
import styles from './styles.scss';
import Image from '../../../components/Image';

const ytBaseUrl = "http://www.youtube.com/watch?v=";

class VideoCard extends PureComponent {
    render() {
        const { id: { videoId }, snippet: { thumbnails: { medium: { url } }, title } } = this.props.video;

        return (
            <div className={styles.videoCard} >
                <div className={styles.videoContainer} >
                    <Image className={styles.videoThumb} source={url} />
                    <div className={styles.videoTitle} >{title}</div>
                </div>
            </div>
        );
    }
}

export default VideoCard;