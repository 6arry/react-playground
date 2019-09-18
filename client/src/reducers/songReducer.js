import uuid from 'uuid';
import { GET_SONGS, ADD_SONG, DELETE_SONG } from '../actions/types';

const initialState = {
    songs: [
        { id: uuid(), name: 'Timezones' },
        { id: uuid(), name: 'Miss Me?' },
        { id: uuid(), name: 'Youth Water' },
        { id: uuid(), name: 'Silver Skies' }
    ]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_SONGS:
            return {
                ...state
            };
        case DELETE_SONG:
            return {
                ...state,
                songs: state.songs.filter(song => song.id !== action.payload)
            };
        case ADD_SONG:
            return {
                ...state,
                songs: [action.payload, ...state.songs]
            };
        default:
            return state;
    }
}