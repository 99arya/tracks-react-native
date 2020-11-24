import React, { useContext } from "react";
import { Text, StyleSheet, Button } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import { SafeAreaView } from "react-navigation";

const AccountScreen = () => {
  const { state, signout } = useContext(AuthContext);
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text style={{ fontSize: 48 }}>AccountScreen</Text>
      <Button title="Sign Out" onPress={() => signout()} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
