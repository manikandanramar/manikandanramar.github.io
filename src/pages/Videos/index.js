import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import styles from './styles.scss';
import { getYoutubeVideos } from '../../redux/modules/youtube';
import Button from '../../components/Button';
import VideoCard from './VideoCard';

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
                        videos.length && videos.map((video, index) => <VideoCard video={video} key={index} />)
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