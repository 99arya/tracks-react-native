import createDataContext from "./createDataContext";

const authReducer = (state, action) => {
  switch (action.type) {
    // case "get_blogposts":
    //   return action.payload;
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    dispatch({ type: "get_blogposts", payload: { isSignedIn: true } });
  };
};

const signin = (dispatch) => {
  return async ({ email, password }) => {
    dispatch({ type: "get_blogposts", payload: { isSignedIn: true } });
  };
};

const signout = (dispatch) => {
  return async ({ email, password }) => {
    dispatch({ type: "get_blogposts", payload: { isSignedIn: true } });
  };
};

export const { Context, Provider } = createDataContext(authReducer, { signup, signin, signout }, { isSignedIn: false });
