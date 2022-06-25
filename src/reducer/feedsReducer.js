import { SET_COMMENT, SET_FEEDS } from '../action/index';

export const initialState = {
  feedInfo: {},
  commentTxt: '',
};

const feedsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FEEDS:
      return Object.assign({}, state, {
        feedInfo: action.payload.feedInfo,
      });

    case SET_COMMENT:
      return Object.assign({}, state, {
        commentTxt: action.payload.commentTxt,
      });

    default:
      return state;
  }
};

export default feedsReducer;
