import { useQuery } from "react-query";
import { getViagens } from "~/api/querys";
import BaseLayout from "~/components/Layout";
import ViagemCard from "~/components/ViagemCard";

function AdmViagensPage() {
  const { data, isLoading } = useQuery("viagens", getViagens);

  if (isLoading) {
    return <h1>Carregando...</h1>;
  }

  return (
    <BaseLayout>
      <h1 className="mb-2 text-center text-4xl font-bold text-gray-800">
        Viagens
      </h1>

      {data?.map((viagem: any, index: number) => {
        return <ViagemCard viagem={viagem} key={index}/>;
      })}
    </BaseLayout>
  );
}

export default AdmViagensPage;
