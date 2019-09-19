import { GET_SONGS, ADD_SONG, DELETE_SONG, SONGS_LOADING } from './types';
import axios from 'axios';
import { tokenConfig } from './authActions'
import { returnErrors } from './errorActions'

export const getSongs = () => dispatch => {
    dispatch(setSongsLoading());
    axios
        .get('api/songs').then(res => 
            dispatch({
                type: GET_SONGS,
                payload: res.data
            })
        ).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const addSong = song => (dispatch, getState) => {
    axios
        .post('/api/songs', song, tokenConfig(getState))
        .then(res => 
            dispatch({
                type: ADD_SONG,
                payload: res.data
            })
        ).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const deleteSong = id => (dispatch, getState) => {
    axios
        .delete(`/api/songs/${id}`, tokenConfig(getState))
        .then(res =>
            dispatch({
            type: DELETE_SONG,
            payload: id
            })
        ).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const setSongsLoading = () => {
    return {
        type: SONGS_LOADING
    };
};