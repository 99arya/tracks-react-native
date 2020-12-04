import { useState, useEffect, useContext } from "react";
import { Context as TrackContext } from "../context/TrackContext";
import { Context as LocationContext } from "../context/LocationContext";
import { navigate } from "../utils/navigationRef";

export default () => {
  const { createTrack } = useContext(TrackContext);

  const {
    state: { name, locations },
    reset,
  } = useContext(LocationContext);

  const saveTrack = async () => {
    try {
      await createTrack(name, locations);
      reset();
      navigate("TrackList");
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return [saveTrack];
};
