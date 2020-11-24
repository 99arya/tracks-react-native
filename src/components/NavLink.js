import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import Spacer from "../components/Spacer";
import { withNavigation } from "react-navigation";

const NavLink = ({ navigation, label, routeName }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
      <Spacer>
        <Text style={styles.link}>{label}</Text>
      </Spacer>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    color: "blue",
  },
});

export default withNavigation(NavLink);
