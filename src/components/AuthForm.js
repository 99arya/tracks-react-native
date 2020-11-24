import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";

const AuthForm = ({ headerLabel, errorMessage, onSubmit, submitButtonLabel }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Spacer>
        <Text style={{ marginBottom: 20 }} h3>
          {headerLabel}
        </Text>
      </Spacer>
      <Spacer>
        <Input autoCapitalize="none" autoCorrect={false} label="Email" value={email} onChangeText={setEmail} />
      </Spacer>
      <Spacer>
        <Input secureTextEntry autoCapitalize="none" autoCorrect={false} label="Password" value={password} onChangeText={setPassword} />
      </Spacer>
      <Spacer>
        {errorMessage?.length > 0 && <Text style={{ color: "red" }}>{errorMessage} </Text>}
        <Button title={submitButtonLabel} onPress={() => onSubmit({ email, password })}></Button>
      </Spacer>
    </>
  );
};

AuthForm.navigationOptions = () => {
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

export default AuthForm;
