const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: action.payload,
      };
      case "ADD_FRIEND":
        return {
          ...state,
          user: {
            ...state.user,
            friends: [...state.user.friends, action.payload],
          },
        };
      case "UNFRIEND":
        return {
          ...state,
          user: {
            ...state.user,
            friends: state.user.friends.filter(
              (friend) => friend !== action.payload
            ),
          },
        };
    default:
      return state;
  }
};

export default AuthReducer;