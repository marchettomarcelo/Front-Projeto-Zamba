import React from "react";
import { useMutation } from "react-query";
import { deletePedido, endPedido } from "~/api/mutations";

export default function PedidoCard(pedido: {
  id: number;
  nome: string;
  valor: number;
}): JSX.Element {
  const deleteMutation = useMutation(deletePedido);
  const endPedidoMutation = useMutation(endPedido);

  return (
    <div
      className="flex w-full flex-row justify-between rounded border  border-black p-4"
      key={pedido.id}
    >
      <div>
        <h1>{pedido.nome}</h1>
        <h1>{pedido.valor}</h1>
      </div>

      <div className="flex flex-row items-center justify-center">
        <svg
          onClick={() => endPedidoMutation.mutate(pedido.id)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-10 w-10"
          color="green"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.125 2.25h-4.5c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125v-9M10.125 2.25h.375a9 9 0 019 9v.375M10.125 2.25A3.375 3.375 0 0113.5 5.625v1.5c0 .621.504 1.125 1.125 1.125h1.5a3.375 3.375 0 013.375 3.375M9 15l2.25 2.25L15 12"
          />
        </svg>

        <svg
          onClick={() => deleteMutation.mutate(pedido.id)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-10 w-10"
          color="red"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    </div>
  );
}
