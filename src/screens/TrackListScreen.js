import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const TrackListScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={{ fontSize: 48 }}>TrackListScreen</Text>
      <Button title="Detail" onPress={() => navigation.navigate("TrackDetail")}></Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
