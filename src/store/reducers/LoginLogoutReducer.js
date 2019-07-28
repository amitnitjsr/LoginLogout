
const InitialState = {
  userDetails: []
};
let id=1;
const LoginLogoutReducer = (state = InitialState, action) => {
    console.log(action)
  let newState;
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      newState = {
        ...state,
        commentMessages: action.value
      };
      return newState;


    case 'CREATE_USER':
            const userid=action.userDetail; 
            const user={id:id+1, userid}
            console.log(user)
    newState = {
        ...state,
        userDetails: {...state.userDetails,user}
      };
      return newState;
    case 'LOGOUT_SUCCESS':
      newState = {
        ...state,
        userDetails: []
      };
      return newState;
    default:
      return state;
  }
};

export default LoginLogoutReducer;
