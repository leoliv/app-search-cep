import { TextInput, View, StyleSheet, Text } from "react-native";

type InputBoxProps = {
  value: string;
  onChangeText: (text: string) => void;
};

export const InputBox = ({ value, onChangeText }: InputBoxProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.inputTitle}>Digite o cep desejado</Text>
      <TextInput
        placeholder="Ex: 79003144"
        style={styles.input}
        keyboardType="numeric"
        value={value}
        onChangeText={onChangeText}
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
    paddingLeft: 10,
    fontSize: 18,
  },
});
