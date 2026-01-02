import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { InputBox } from "./src/components/InputBox";
import { Button } from "./src/components/Button";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <InputBox />
        <View style={styles.areaButton}>
          <Button
            name="Buscar"
            color="#0046afff"
            onPress={() => console.log("Buscou!")}
          />
          <Button
            name="Limpar"
            color="#bb2803ff"
            onPress={() => console.log("Limpou!")}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  areaButton: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});
