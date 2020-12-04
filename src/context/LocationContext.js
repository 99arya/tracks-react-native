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
    case "start_recording":
      return { ...state, recording: true };
    case "stop_recording":
      return { ...state, recording: false };
    case "add_current_location":
      return { ...state, locations: [...state.locations, action.payload] };
    case "change_name":
      return { ...state, name: action.payload };
    case "reset":
      return { ...state, name: "", locations: [] };

    default:
      return state;
  }
};

const clearErrorMessage = (dispatch) => () => dispatch({ type: "clear_error" });

const startRecording = (dispatch) => async () => {
  try {
    dispatch({ type: "start_recording" });
  } catch (error) {
    console.log("error", error.message);
  }
};

const stopRecording = (dispatch) => async () => {
  try {
    dispatch({ type: "stop_recording" });
  } catch (error) {
    console.log("error", error.message);
  }
};

const addLocation = (dispatch) => async (location, recording) => {
  try {
    dispatch({ type: "add_location_context", payload: location });
    if (recording) {
      dispatch({ type: "add_current_location", payload: location });
    }
  } catch (error) {
    console.log("error", error.message);
  }
};

const changeName = (dispatch) => (name) => dispatch({ type: "change_name", payload: name });

const reset = (dispatch) => async () => {
  try {
    dispatch({ type: "reset" });
  } catch (error) {
    console.log("error", error.message);
  }
};

export const { Context, Provider } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation, changeName, reset },
  { recording: false, locations: [], currentLocation: null, errorMessage: "", name: "" }
);
