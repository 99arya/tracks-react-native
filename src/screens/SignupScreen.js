import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { state, signup } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Spacer>
        <Text style={{ marginBottom: 20 }} h3>
          Sign up for Tracker
        </Text>
      </Spacer>
      <Spacer>
        <Input autoCapitalize="none" autoCorrect={false} label="Email" value={email} onChangeText={setEmail} />
      </Spacer>
      <Spacer>
        <Input secureTextEntry autoCapitalize="none" autoCorrect={false} label="Password" value={password} onChangeText={setPassword} />
      </Spacer>
      <Spacer>
        {state.errorMessage?.length > 0 && <Text style={{ color: "red" }}>{state.errorMessage} </Text>}
        <Button title="Create an account" onPress={() => signup({ email, password })}></Button>
      </Spacer>
      <Spacer>
        <Text>Already have an account? </Text>
        <Button title="Sign in" onPress={() => navigation.navigate("Signin")}></Button>
      </Spacer>
    </View>
  );
};

SignupScreen.navigationOptions = () => {
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
});

export default SignupScreen;
