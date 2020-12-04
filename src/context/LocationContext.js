import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import trackerAPI from "../api/trackerAPI";
import { navigate } from "../utils/navigationRef";

const locationReducer = (state, action) => {
  switch (action.type) {
    case "add_location_context":
      return { ...state, currentLocation: action.payload };
    case "clear_error":
      return { ...state, errorMessage: "" };
    default:
      return state;
  }
};

const clearErrorMessage = (dispatch) => () => dispatch({ type: "clear_error" });

const startRecording = (dispatch) => async () => {
  try {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      dispatch({ type: "signup_success", payload: token });
      navigate("TrackList");
    } else {
      navigate("Signup");
    }
  } catch (error) {
    console.log("error", error.message);
  }
};

const stopRecording = (dispatch) => async () => {
  try {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      dispatch({ type: "signup_success", payload: token });
      navigate("TrackList");
    } else {
      navigate("Signup");
    }
  } catch (error) {
    console.log("error", error.message);
  }
};

const addLocation = (dispatch) => async (location) => {
  try {
    dispatch({ type: "add_location_context", payload: location });
  } catch (error) {
    console.log("error", error.message);
  }
};

export const { Context, Provider } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation },
  { recording: false, locations: [], currentLocation: null, errorMessage: "" }
);
