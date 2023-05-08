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


const url = "http://192.168.10.117:8080/api/viagem"
// const url = "http://localhost:8080/api/viagem"

async function postViagem(values: FormData) {
  try {
    const response = await axios.post(
      url,
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

  
  const response = await axios.delete(`${url}/${id}`);
  console.log(response)
  return response.data;
}

async function endViagem(id: string) {
  console.log("Acabar com pedidos");

  return [];
}

export { postViagem, deleteViagem, endViagem };
