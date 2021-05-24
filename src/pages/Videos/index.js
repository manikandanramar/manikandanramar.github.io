import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import styles from './styles.scss';
import { getYoutubeVideos } from '../../redux/modules/youtube';
import Link from '../../components/Link';
import Button from '../../components/Button';

const ytBaseUrl = "http://www.youtube.com/watch?v=";

@connect(state => ({
    videos: state.youtube.list,
    total: state.youtube.total,
    nextToken: state.youtube.nextPageToken
}), {
    getVideos: getYoutubeVideos
})
class Videos extends PureComponent {
    componentDidMount() {
        const { videos, getVideos } = this.props;

        if (!videos.length)
            getVideos();
    }

    onMoreClick = () => {
        const { getVideos, nextToken } = this.props;

        if(nextToken)
            getVideos(nextToken);
    }

    render() {
        const { videos, nextToken } = this.props;

        return (
            <div className={styles.videos} >
                <div className={styles.contentWrapper} >
                    {
                        videos.length && videos.map((video, index) => {
                            return <a key={index} className={styles.videoLink} href={ytBaseUrl + video.id.videoId} target="__blank" >{video.snippet.title}</a>;
                        })
                    }
                    {
                        nextToken
                        ? <Button onClick={this.onMoreClick} >Load More</Button>
                        : null
                    }
                </div>
            </div>
        );
    }
}

export default Videos;