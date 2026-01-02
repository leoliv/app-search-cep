import { api } from "./api";

type getCepProps = {
  cep: string;
};

export const getCep = async ({ cep }: getCepProps) => {
  const response = await api.get(`${cep}/json`);
  return response.data;
};
