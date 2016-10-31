import * as types from '../actions/ActionTypes';

const initialState = {
    number: 0
};

export default function counter(state = initialState, action) {
    /* ... */
    switch(action.type) {
        case types.INCREMENT:
            return {
                ...state, // 기존에 있던 state 값 들 복사됨
                number: state.number + 1
            };
        case types.DECREMENT: 
            return {
                ...state,
                number: state.number - 1
            };
        default:
            return state;
    }
}