import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import trackerAPI from "../api/trackerAPI";
import { navigate } from "../utils/navigationRef";

const trackReducer = (state, action) => {
  switch (action.type) {
    // case "add_location_context":
    //   return { ...state, currentLocation: action.payload };
    case "clear_error":
      return { ...state, errorMessage: "" };
    case "fetch_tracks":
      return action.payload;
    // case "stop_recording":
    //   return { ...state, recording: false };
    // case "add_current_location":
    //   return { ...state, locations: [...state.locations, action.payload] };
    // case "change_name":
    //   return { ...state, name: action.payload };

    default:
      return state;
  }
};

const clearErrorMessage = (dispatch) => () => dispatch({ type: "clear_error" });

const fetchTracks = (dispatch) => async () => {
  try {
    const response = await trackerAPI.get("/tracks");
    dispatch({ type: "fetch_tracks", payload: response.data });
  } catch (error) {
    console.log("error", error.message);
  }
};

const createTrack = (dispatch) => async (name, locations) => {
  try {
    const response = await trackerAPI.post("/tracks", { name, locations });
    // console.log("response",response)
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

export const { Context, Provider } = createDataContext(trackReducer, { fetchTracks, createTrack, addLocation, changeName }, []);
