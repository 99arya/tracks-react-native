import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const SigninScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={{ fontSize: 48 }}>SigninScreen</Text>
      <Text style={{ fontSize: 16 }}>Don't have an account? </Text>
      <Button title="Create an account" onPress={() => navigation.navigate("Signup")}></Button>
      <Button title="Main Flow" onPress={() => navigation.navigate("mainFlow")}></Button>

    </View>
  );
};

const styles = StyleSheet.create({});

export default SigninScreen;
