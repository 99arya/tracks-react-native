import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as LocationContext } from "../context/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";

const TrackForm = ({ headerLabel, errorMessage, onSubmit, submitButtonLabel }) => {
  const {
    state: { name, recording, locations },
    startRecording,
    stopRecording,
    addLocation,
    changeName,
  } = useContext(LocationContext);

  const [saveTrack] = useSaveTrack();

  return (
    <>
      <Spacer>
        <Text style={{ marginBottom: 20 }} h3>
          Hey
        </Text>
      </Spacer>

      <Spacer>
        {/* {err?.length > 0 && <Text style={{ color: "red" }}>{err} </Text>} */}
        <Button title={`${recording ? "Stop" : "Start"} Recording`} onPress={() => (recording ? stopRecording() : startRecording())}></Button>
      </Spacer>
      {!recording && locations.length ? (
        <>
          <Spacer>
            <Input label="Title" value={name} onChangeText={(name) => changeName(name)} />
          </Spacer>
          <Spacer>
            <Button title="Save Recording" onPress={saveTrack}></Button>
          </Spacer>
        </>
      ) : null}
    </>
  );
};

TrackForm.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 200,
  },
  link: {
    color: "blue",
  },
});

export default TrackForm;
