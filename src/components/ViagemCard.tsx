import React from "react";
import { useMutation, useQueryClient } from "react-query";

import { deleteViagem, endViagem } from "~/api/mutations";

interface ViagemCardProps {
  viagem: {
    identifier: string;
    origem: string;
    destino: string;
    data: Date;
    valor: number;
    distancia: number;
    tempo: number;
    status: number;
  };
}

export default function ViagemCard({ viagem }: ViagemCardProps): JSX.Element {

  
  const deleteMutation = useMutation(deleteViagem);

  const endViagemMutation = useMutation(endViagem, {
    onSuccess(){
      const x = useQueryClient()
      x.invalidateQueries("viagens");
      
    }
  });


  return (
    <div
      className="flex w-full flex-row justify-between rounded border border-black p-2"
      key={viagem.identifier}
    >
      <div className="mb-4 flex w-full max-w-md flex-col p-4">
        <div className="flex flex-col gap-2">
          <div>
            <div className="flex flex-row items-center">
              De: <span className="text-lg">{viagem.origem}</span>
            </div>
            <div className="flex flex-row items-center">
              Para: <span className="text-lg">{viagem.destino}</span>
            </div>
          </div>
          <div className="flex flex-row items-center justify-between">
            Valor:{" "}
            <span className="text-md font-bold">{`R$${viagem.valor}`}</span>
            Distância:{" "}
            <span className="text-md font-bold">{`${viagem.distancia}km`}</span>
            Tempo:{" "}
            <span className="text-md font-bold">{`${viagem.tempo}min`}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center justify-center">
        <svg
          onClick={() => endViagemMutation.mutate(viagem.identifier)}
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
          onClick={() => deleteMutation.mutate(viagem.identifier)}
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
