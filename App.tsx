import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Keyboard } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { InputBox } from "./src/components/InputBox";
import { Button } from "./src/components/Button";
import { ResultCep } from "./src/components/ResultCep";
import { useState, useRef } from "react";
import { TextInput } from "react-native";
import { getCep } from "./src/services/getCep";

type Cep = {
  cep: string;
  logradouro: string;
  bairro: string;
  estado: string;
  localidade: string;
};

export default function App() {
  const [cep, setCep] = useState<string>("");
  const [valueData, setValueData] = useState<Cep | null>(null);
  const inputRef = useRef<TextInput>(null);

  async function handleGetCep() {
    if (cep.length !== 8) {
      alert("Digite um CEP válido com 8 digitos");
      return;
    }
    try {
      const response = await getCep({ cep });
      setValueData(response);
    } catch (error) {
      console.log(error);
    }
    Keyboard.dismiss();
  }

  function handleClean() {
    setCep("");
    inputRef.current?.focus();
    setValueData(null);
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <InputBox
          value={cep}
          onChangeText={(text) => setCep(text)}
          ref={inputRef}
        />
        <View style={styles.areaButton}>
          <Button
            name="Buscar"
            colorButton="#0046afff"
            onPress={handleGetCep}
          />
          <Button name="Limpar" colorButton="#bb2803ff" onPress={handleClean} />
        </View>
        <ResultCep cep={valueData} />
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
