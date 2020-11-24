import {AsyncStorage} from "react-native";
import createDataContext from "./createDataContext";
import trackerAPI from "../api/trackerAPI";
import { navigate } from "../utils/navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "signup_failed":
      return { ...state, errorMessage: action.payload };
    case "signup_success":
      return { errorMessage: "", token: action.payload };
    default:
      return state;
  }
};

const signup = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerAPI.post("/signup", { email, password });
    console.log("token==>",response.data?.token)
    await AsyncStorage.setItem("token", JSON.stringify(response.data?.token));
    dispatch({ type: "signup_success", payload: response.data?.token });
    navigate("TrackList");
  } catch (error) {
    console.log("error.message", error.message);
    dispatch({ type: "signup_failed", payload: "Sign up failed. Please try again later." });
  }
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

export const { Context, Provider } = createDataContext(authReducer, { signup, signin, signout }, { token: null, errorMessage: "" });
