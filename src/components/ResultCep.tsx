import { StyleSheet, Text, View } from "react-native";

type Cep = {
  cep: string;
  logradouro: string;
  bairro: string;
  estado: string;
  localidade: string;
};

type ResultCepProps = {
  cep: Cep | null;
};

export const ResultCep = ({ cep }: ResultCepProps) => {
  return (
    cep && (
      <View style={styles.container}>
        <Text style={styles.textResult}>CEP: {cep.cep}</Text>
        <Text style={styles.textResult}>Logradouro: {cep.logradouro}</Text>
        <Text style={styles.textResult}>Bairro: {cep.bairro}</Text>
        <Text style={styles.textResult}>Cidade: {cep.localidade}</Text>
        <Text style={styles.textResult}>Estado: {cep.estado}</Text>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textResult: {
    margin: 2,
    fontSize: 20,
  },
});
