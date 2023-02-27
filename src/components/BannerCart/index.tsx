import cloud from "../../assets/img/icons-8-cloud-firewall.png";
import cart from "../../assets/img/cart-o.png";
import annuity from "../../assets/img/icon-benef-cios-info.png";
import phone from "../../assets/img/icon-benef-cios-app.png";
import plane from "../../assets/img/icon-benef-cios-milhas.png";
import chances from "../../assets/img//group-2.png";
import "./styles.css";

export default function BannerCart() {
  return (
    <section className="banner-cart-c">
      <div className="container-cart">
        <div className="grid-cart-user">
          <img src={cart} alt={cart} />
          <div className="cart-information">
            <div className="grid-recommended">
              <span>Recomendado</span>
              <span>Visa Classic</span>
            </div>

            <h2>Cartão de Crédito Smiles Anuidade Zero Visa</h2>
            <div className="container-assessment">
              <div className="grid-assessment">
                <i className="fas fa-star" />
                <span>4,9</span>
              </div>
              <span>2 avaliações</span>
            </div>
          </div>
        </div>

        <div className="container-buttons">
          <button className="button-cart">
            <span>Solicitar cartão</span>
            <i className="fas fa-arrow-right" />
          </button>
          <button className="button-security">
            <img src={cloud} alt={cloud} />
            <span>Solicite com segurança</span>
          </button>
        </div>
      </div>

      <div className="container-information-app">
        <div className="grid-information-annuity-income spancing-right">
          <div className="header-information">
            <img src={annuity} alt={annuity} />
            <h3>Anuidade</h3>
          </div>
          <p>4x R$ 88,50</p>
        </div>

        <div className="grid-information-annuity-income spancing-right">
          <div className="header-information">
            <img src={annuity} alt={annuity} />
            <h3>Renda mínima</h3>
          </div>
          <p>R$ 1.500</p>
        </div>

        <div className="grid-information-phone-plane spancing-right">
          <img src={phone} alt={phone} />
          <p>Aplicativo para controlar gastos</p>
        </div>

        <div className="grid-information-phone-plane">
          <img src={plane} alt={plane} />
          <p>Milhas aéreas pelo programa Smiles</p>
        </div>

        <div className="grid-information-chances">
          <img src={chances} alt={chances} />
          <p>
            Você tem <strong>altas chances</strong> de aprovação neste cartão
          </p>
        </div>
      </div>
    </section>
  );
}
