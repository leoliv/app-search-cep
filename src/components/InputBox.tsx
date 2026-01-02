import { TextInput, View, StyleSheet, Text } from "react-native";

export const InputBox = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.inputTitle}>Digite o cep desejado</Text>
      <TextInput
        placeholder="Ex: 79003144"
        style={styles.input}
        keyboardType="numeric"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 30,
    width: "100%",
  },
  inputTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    fontSize: 18,
  },
});
