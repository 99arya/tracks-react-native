import React, { useContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";

const AccountScreen = () => {
  const { state, signout } = useContext(AuthContext);
  console.log(" state, signout", state, signout);
  return (
    <View>
      <Text style={{ fontSize: 48 }}>AccountScreen</Text>
      <Button title="Sign Out" onPress={() => signout()} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
