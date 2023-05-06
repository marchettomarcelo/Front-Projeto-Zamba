import axios from "axios";

interface FormData {
  origem: string;
  destino: string;
  data: Date;
  valor: number;
  distancia: number;
  tempo: number;
  status: number;
}

async function postViagem(values: FormData) {
  try {
    const response = await axios.post(
      "http://localhost:8080/api/viagem",
      values
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function deleteViagem(id: string) {
  // make id a string

  
  const response = await axios.delete(`http://localhost:8080/api/viagem/${id}`);
  console.log(response)
  return response.data;
}

async function endViagem(id: string) {
  console.log("Acabar com pedidos");

  return [];
}

export { postViagem, deleteViagem, endViagem };
