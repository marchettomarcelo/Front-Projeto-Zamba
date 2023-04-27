import axios from "axios";

async function getPedidos() {
    // return axios.get("http://localhost:3000/pedidos");
    return [{"id": 123, "nome": "João", "valor": 100.00}];
}

export { getPedidos };