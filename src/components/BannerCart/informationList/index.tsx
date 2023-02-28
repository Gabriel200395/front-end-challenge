import "./styles.css";
import annuity from "../../../assets/img/icon-benef-cios-info.png";
import phone from "../../../assets/img/icon-benef-cios-app.png";
import plane from "../../../assets/img/icon-benef-cios-milhas.png";
import chances from "../../../assets/img//group-2.png";

export default function InformationList() {
  return (
    <div className="container-information-app">
      <div className="grid-information-items">
        <div className="flex">
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
        </div>
        <div className="flex">
          <div className="grid-information-phone-plane spancing-right">
            <img src={phone} alt={phone} />
            <p>Aplicativo para controlar gastos</p>
          </div>

          <div className="grid-information-phone-plane">
            <img src={plane} alt={plane} />
            <p>Milhas aéreas pelo programa Smiles</p>
          </div>
        </div>
      </div>

      <div className="grid-information-chances">
        <img src={chances} alt={chances} />
        <p>
          Você tem <strong>altas chances</strong> de aprovação neste cartão
        </p>
      </div>
    </div>
  );
}
