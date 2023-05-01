import { useQuery } from "react-query";
import { getPedidos } from "~/api/querys";
import BaseLayout from "~/components/Layout";
import PedidoCard from "~/components/PedidoCard";

function AdmPedidosPage() {
  const { data, isLoading } = useQuery("pedidos", getPedidos);

  if (isLoading) {
    return <h1>Carregando...</h1>;
  }

  return (
    <BaseLayout>
      <h1 className="text-xl">Pedidos Feitos</h1>

      {data?.map((pedido, idx) => {
        return (
          <PedidoCard
            key={idx}
            id={pedido.id}
            nome={pedido.nome}
            valor={pedido.valor}
          />
        );
      })}
    </BaseLayout>
  );
}

export default AdmPedidosPage;
