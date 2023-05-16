import axios from "axios";

interface FormData {
  destino: string;
  valor: number;
}


// const url = "http://192.168.10.117:8080/api/viagem"
const url = "http://localhost:8080/api/viagem"

async function postViagem(values: FormData) {

  const body_request = {
    "destino": values.destino,
    "valor": values.valor,
    "origem": "Rua Quatá 200",
    "distancia": 22,
    "tempo": 30,
    "status": 1,
  }

  try {
    const response = await axios.post(
      url,
      body_request
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
