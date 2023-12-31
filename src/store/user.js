/* eslint-disable*/
const initialState = {
  token: {},
};

const SET_USER = 'SET_USER';
const REMOVE_USER = 'REMOVE_USER';

export const getToken = (data) => ({ type: SET_USER, data });
export const removeToken = () => ({ type: REMOVE_USER });

export default function user(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        token: action.data,
      };
    case REMOVE_USER:
      return {
        ...state,
        token: null,
      };
    default:
      return state;
  }
}
