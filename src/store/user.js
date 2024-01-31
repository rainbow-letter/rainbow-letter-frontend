// const initialState = {
//   token: '',
//   role: null,
// };

// const SET_USER = 'SET_USER';
// const SET_USER_ROLE = 'SET_USER_ROLE';
// const REMOVE_USER = 'REMOVE_USER';

// export const getToken = (data) => ({ type: SET_USER, data });
// export const setUserRole = (role) => ({ type: SET_USER_ROLE, role });
// export const removeToken = () => ({ type: REMOVE_USER });

// export default function user(state = initialState, action) {
//   switch (action.type) {
//     case SET_USER:
//       return {
//         ...state,
//         token: action.data,
//       };
//     case SET_USER_ROLE:
//       return {
//         ...state,
//         role: action.role,
//       };
//     case REMOVE_USER:
//       return {
//         ...state,
//         token: null,
//       };
//     default:
//       return state;
//   }
// }
