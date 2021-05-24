import { youtube } from '../../config/api';

const GET_YOUTUBE_VIDEOS = "youtube/GET_YOUTUBE_VIDEOS";
const GET_YOUTUBE_VIDEOS_SUCCESS = "youtube/GET_YOUTUBE_VIDEOS_SUCCESS";
const GET_YOUTUBE_VIDEOS_FAIL = "youtube/GET_YOUTUBE_VIDEOS_FAIL";

const initialState = {
    nextPageToken: "",
    total: 0,
    list: []
}

// Youtube Reducer goes here...
export default function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_YOUTUBE_VIDEOS:
            return {
                ...state
            };
        case GET_YOUTUBE_VIDEOS_SUCCESS:
            const { items, pageInfo, nextPageToken } = action.result;
            return {
                ...state,
                list: [
                    ...state.list,
                    ...items
                ],
                total: pageInfo.totalResults,
                nextPageToken
            };
        case GET_YOUTUBE_VIDEOS_FAIL:
            return {
                ...state
            };
        default:
            return state;
    }
}

export function getYoutubeVideos(nextPageToken) {
    return {
        types: [GET_YOUTUBE_VIDEOS, GET_YOUTUBE_VIDEOS_SUCCESS, GET_YOUTUBE_VIDEOS_FAIL],
        promise: fetch => fetch.get(youtube, {
            params: {
                pageToken: nextPageToken
            }
        }),
    }
}