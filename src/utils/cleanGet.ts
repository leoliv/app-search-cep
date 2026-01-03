import { Keyboard } from "react-native";
import { getCep } from "../services/getCep";

type getCepProps = {
  cep: string;
  setValueData: any;
};

export const searchInApi = async ({ cep, setValueData }: getCepProps) => {
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
};

type cleanCepProps = {
  setCep: React.Dispatch<React.SetStateAction<string>>;
  inputRef: React.RefObject<any>;
  setValueData: React.Dispatch<React.SetStateAction<any>>;
};

export const cleanCep = ({ setCep, inputRef, setValueData }: cleanCepProps) => {
  setCep("");
  inputRef.current?.focus();
  setValueData(null);
};
