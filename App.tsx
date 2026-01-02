import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { InputBox } from "./src/components/InputBox";
import { Button } from "./src/components/Button";
import { ResultCep } from "./src/components/ResultCep";
import { useState } from "react";

export default function App() {
  const [valueKeyBoard, setValueKeyboard] = useState<string>("");
  const [valueCep, setValueCep] = useState<string>("");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <InputBox
          value={valueKeyBoard}
          onChangeText={(text) => setValueKeyboard(text)}
        />
        <View style={styles.areaButton}>
          <Button
            name="Buscar"
            colorButton="#0046afff"
            onPress={() => setValueCep(valueKeyBoard)}
          />
          <Button
            name="Limpar"
            colorButton="#bb2803ff"
            onPress={() => setValueCep("")}
          />
        </View>
        <ResultCep cep={valueCep} />
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
