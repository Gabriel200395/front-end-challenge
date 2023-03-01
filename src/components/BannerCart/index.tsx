import Informations from "./containers/Informations";
import CartUser from "./containers/CartUser";
import useFetch from "./hooks/useFetch";

export default function BannerCart() {
  const { error, data, isLoading } = useFetch();

  if (error) return <div>Erro!</div>;
  if (isLoading) return <div>Carregando</div>;


  return (
    <section className="banner-cart-c">
      <CartUser data={data} />
      <Informations data={data} />
    </section>
  );
}
