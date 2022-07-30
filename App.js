import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Texto from "./Texto";

export default function App() {
  return (
    <View style={styles.container}>
      <Texto limit={100} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
});