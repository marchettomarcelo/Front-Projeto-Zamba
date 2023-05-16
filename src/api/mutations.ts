/* eslint-disable */
import axios from "axios";

interface FormData {
  destino: string;
  valor: number;
  items: string[];
}

const url = "http://192.168.10.117:8080/api/viagem"
// const url = "http://localhost:8080/api/viagem";

async function postViagem(values: FormData) {
  const body_request = {
    destino: values.destino,
    valor: values.valor,
    origem: "Rua Quatá 200",
    distancia: 22,
    tempo: values.valor,
    itens: values.items,
    data: new Date(),
  };


  console.log(body_request);

  try {
    const response = await axios.post(url, body_request);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

async function deleteViagem(id: string) {
  // make id a string

  const response = await axios.delete(`${url}/${id}`);
  console.log(response);
  return response.data;
}

async function endViagem(id: string) {
  const response = await axios.put(`${url}/confirm/${id}`);

  console.log(response);
  return response.data;
}


export { postViagem, deleteViagem, endViagem };
