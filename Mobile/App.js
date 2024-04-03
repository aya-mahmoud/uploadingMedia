import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { containerStyles as styles } from "./styles/style";
import React from "react";
import { PostContextProvider } from "./context/PostsContext";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <PostContextProvider>
        <HomePage />
      </PostContextProvider>
    </View>
  );
}
