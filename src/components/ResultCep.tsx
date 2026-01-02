import { StyleSheet, Text, View } from "react-native";

type ResultCepProps = {
  cep: string;
};

export const ResultCep = ({ cep }: ResultCepProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.textResult}>CEP: {cep}</Text>
      <Text style={styles.textResult}>Logradoura: </Text>
      <Text style={styles.textResult}>Bairro: </Text>
      <Text style={styles.textResult}>Cidade: </Text>
      <Text style={styles.textResult}>Estado: </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  textResult: {
    margin: 2,
    fontSize: 20,
  },
});
