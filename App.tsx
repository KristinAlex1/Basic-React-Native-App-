import React from "react";
import { View, Text, StyleSheet, useColorScheme } from "react-native";

function App(): JSX.Element {
  const theme = useColorScheme(); // Returns "light" or "dark"

  return (
    <View style={styles.container}>
      <Text style={theme === "dark" ? styles.whiteText : styles.darkText}>
        Hello World
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center", // Added to vertically center the content
  },
  whiteText: {
    color: "white",
    backgroundColor: "black",
    padding: 10, // Optional: To make text more visible
  },
  darkText: {
    color: "black",
    backgroundColor: "white",
    padding: 10, // Optional: To make text more visible
  },
});

export default App;
