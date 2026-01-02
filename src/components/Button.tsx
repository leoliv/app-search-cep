import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type ButtonProps = {
  name: string;
  colorButton: string;
  onPress: () => void;
};

export const Button = ({ name, colorButton, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colorButton }]}
      onPress={onPress}
    >
      <Text style={styles.textButton}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 8,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 5,
  },
  textButton: {
    fontSize: 20,
    color: "#f9f9f9",
  },
});
