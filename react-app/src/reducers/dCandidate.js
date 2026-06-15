import { ACTION_TYPES } from '../actions/dCandidate';

const initialState = [];

export const dCandidate = (state = initialState, action) => {
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL:
            return [...action.payload];
        case ACTION_TYPES.CREATE:
            return [...state, action.payload];
        case ACTION_TYPES.UPDATE:
            return state.map(x => x.id === action.payload.id ? action.payload : x);
        case ACTION_TYPES.DELETE:
            return state.filter(x => x.id !== action.payload);
        default:
            return state;
    }
}
