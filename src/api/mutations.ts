import axios from "axios";

async function postPedidos({ name, age }: { name: string; age: string }) {
  // return axios.get("http://localhost:3000/pedidos");
  console.log("bom dia");
  return [{ id: 123, nome: name, age: age }];
}

async function deletePedido(id: number) {
  console.log("Deletar pedido");
  return [];
}

async function endPedido(id: number) {
  console.log("Acabar com pedidos");

  return [];
}

export { postPedidos, deletePedido, endPedido };
