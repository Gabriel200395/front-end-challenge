import InformationList from "./informationList";
import CartUser from "./cartUser";

export default function BannerCart() {
  return (
    <section className="banner-cart-c">
      <CartUser />
      <InformationList />
    </section>
  );
}
