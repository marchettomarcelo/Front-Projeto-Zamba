import axios from "axios";

async function postPedidos({ nome, valor }: { nome: string; valor: number }) {
  // return axios.get("http://localhost:3000/pedidos");
  console.log("bom dia");
  return [{ id: 123, nome: nome, valor: valor }];
}

export { postPedidos };
