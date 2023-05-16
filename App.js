// In App.js in a new project

import React, { useState } from "react";
import { View, Text, TextInput, Button, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

function BoldText(props) {
  console.log("props", props);
  const onPressFunction = () => {
    props.onPress("This is coming from BoldText");
  };
  return (
    <Pressable onPress={onPressFunction}>
      <Text
        style={{
          fontSize: 16,
          color: "tomato",
        }}
      >
        {props.title}
      </Text>
    </Pressable>
  );
}

function LoginScreen(props) {
  let [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //
  const handleLogin = () => {
    if (username === "test" && password === "test") {
      props.navigation.navigate("Home");
    } else {
      alert("Username or password is invalid");
    }
  };

  function onTextChangeUsername(updateText) {
    console.log("entered text : ", updateText);
    // username = updateText;
    setUsername(updateText);
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <BoldText
        title={"Print Amber"}
        onPress={(text) => {
          console.log("The text was pressed", text);
        }}
      />
      <BoldText title={"Please log in"} />
      <TextInput
        placeholder="Username"
        // value={username}
        onChangeText={onTextChangeUsername}
        style={{
          marginBottom: 10,
          padding: 10,
          borderWidth: 1,
          borderColor: "gray",
          width: 200,
        }}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{
          marginBottom: 10,
          padding: 10,
          borderWidth: 1,
          borderColor: "gray",
          width: 200,
        }}
      />
      <Button
        title="Login"
        onPress={() => {
          handleLogin();
        }}
      />
      <Text>User have entered : {username}</Text>
    </View>
  );
}

function HomeScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Feed"
        onPress={() => {
          props.navigation.navigate("Feed");
        }}
      />
      <Button
        title="Go to Blog"
        onPress={() => {
          props.navigation.navigate("Blog");
        }}
      />
      <Button
        title="Go to Extra"
        onPress={() => {
          props.navigation.navigate("Extra");
        }}
      />
    </View>
  );
}

function FeedScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Feed Screen</Text>
      <Button
        title="Go back"
        onPress={() => {
          props.navigation.goBack();
        }}
      />
    </View>
  );
}

function BlogScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Blog Screen</Text>
      <Button
        title="Go back"
        onPress={() => {
          props.navigation.goBack();
        }}
      />
    </View>
  );
}

function ExtraScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Extra Screen</Text>
      <Button
        title="Go back"
        onPress={() => {
          props.navigation.goBack();
        }}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Feed" component={FeedScreen} />
        <Stack.Screen name="Blog" component={BlogScreen} />
        <Stack.Screen name="Extra" component={ExtraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
