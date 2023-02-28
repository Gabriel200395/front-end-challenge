import "./styles.css";
import annuity from "../../../assets/img/icon-benef-cios-info.png";
import phone from "../../../assets/img/icon-benef-cios-app.png";
import plane from "../../../assets/img/icon-benef-cios-milhas.png";
import chances from "../../../assets/img//group-2.png";

export default function InformationList() {
  return (
    <div className="information-list-container">
      <div className="flex">
        <div className="flex-item spancing">
          <img src={annuity} alt={annuity} />

          <div className="item">
            <h3>Anuidade</h3>
            <p>4x R$ 88,50</p>
          </div>
        </div>

        <div className="flex-item spancing">
          <img src={annuity} alt={annuity} />

          <div className="item">
            <h3>Renda mínima</h3>
            <p>R$ 1.500</p>
          </div>
        </div>

        <div className="flex-item spancing">
          <img src={phone} alt={phone} />
          <div className="item">
            <p>Aplicativo para controlar gastos</p>
          </div>
        </div>

        <div className="flex-item">
          <img src={plane} alt={plane} />
          <div className="item">
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
