import Informations from "./containers/Informations";
import CartUser from "./containers/CartUser";
import { useDataCartQuery } from "./hooks/useFetch";
import SkaletonComponent from "../Skaleton";

export default function BannerCart() {
  const { error, data, isLoading } = useDataCartQuery();


  if (error) return <div className="error">Erro de Conexão com Serviço... </div>;

  if (isLoading) return <SkaletonComponent />;

  return (
    <section className="banner-cart-c">
      <CartUser data={data} />
      <Informations data={data} />
    </section>
  );
}
