import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import trackerAPI from "../api/trackerAPI";
import { navigate } from "../utils/navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "signup_failed":
      return { ...state, errorMessage: action.payload };
    case "signup_success":
      return { errorMessage: "", token: action.payload };
    case "signout_success":
      return { errorMessage: "", token: null };
    case "clear_error":
      return { ...state, errorMessage: "" };
    default:
      return state;
  }
};

const clearErrorMessage = (dispatch) => () => dispatch({ type: "clear_error" });

const signup = (dispatch) => async ({ email, password }) => {
  try {
    dispatch({ type: "clear_error" });
    const response = await trackerAPI.post("/signup", { email, password });
    await AsyncStorage.setItem("token", response.data?.token);
    dispatch({ type: "signup_success", payload: response.data?.token });
    navigate("TrackList");
  } catch (error) {
    console.log("error.message", error.message);
    dispatch({ type: "signup_failed", payload: "Sign up failed. Please try again later." });
  }
};

const signin = (dispatch) => async ({ email, password }) => {
  try {
    dispatch({ type: "clear_error" });
    const response = await trackerAPI.post("/signin", { email, password });
    await AsyncStorage.setItem("token", response.data?.token);
    dispatch({ type: "signup_success", payload: response.data?.token });
    navigate("TrackList");
  } catch (error) {
    console.log("error.message", error.message);
    dispatch({ type: "signup_failed", payload: "Sign up failed. Please try again later." });
  }
};

const signout = (dispatch) => async () => {
  try {
    await AsyncStorage.removeItem("token");
    dispatch({ type: "signout_success" });
    navigate("Signin");
  } catch (error) {
    console.log("error", error.message);
  }
};

export const { Context, Provider } = createDataContext(authReducer, { signup, signin, signout, clearErrorMessage }, { token: null, errorMessage: "" });
