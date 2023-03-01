import "./styles.css";
import annuity from "../../../assets/img/icon-benef-cios-info.png";
import phone from "../../../assets/img/icon-benef-cios-app.png";
import plane from "../../../assets/img/icon-benef-cios-milhas.png";
import chances from "../../../assets/img//group-2.png";
import mensalidade from "../../../assets/img/icon-benef-cios-mensalidade.png";
import recompensa from "../../../assets/img/icon-benef-cios-recompensa.png";
export default function InformationList() {
  return (
    <div className="information-list-container">
      <div className="grid-informations">
        <div className="information-item spancing-right">
          <img src={annuity} alt={annuity} />

          <div className="information-text">
            <h3>Anuidade</h3>
            <p>4x R$ 88,50</p>
          </div>
        </div>

        <div className="information-item spancing-right">
          <img src={annuity} alt={annuity} />

          <div className="information-text">
            <h3>Renda mínima</h3>
            <p>R$ 1.500</p>
          </div>
        </div>

        <div className="information-item spancing-right">
          <img src={phone} alt={phone} />
          <div className="information-text">
            <p>Aplicativo para controlar gastos</p>
          </div>
        </div>

        <div className="information-item">
          <img src={plane} alt={plane} />
          <div className="information-text">
            <p>Milhas aéreas pelo programa Smiles</p>
          </div>
        </div>
      </div>

      <div className="grid-informations-mobile">
        <div className="flex">
          <div className="information-item spancing-right">
            <img src={annuity} alt={annuity} />

            <div className="information-text">
              <h3>Anuidade:</h3>
              <p>12x R$ 31,17</p>
              <div className="grid-link">
                <a href="#">Pode ser grátis, veja como →</a>
              </div>
            </div>
          </div>

          <div className="information-item spancing-right">
            <img src={annuity} alt={annuity} />

            <div className="information-text">
              <h3>Renda mínima:</h3>
              <p>Salário mínimo</p>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="information-item spancing-right">
            <img src={recompensa} alt={recompensa} />
            <div className="information-text">
              <p>Acumule pontos e troque por produtos</p>
            </div>
          </div>

          <div className="information-item">
            <img src={mensalidade} alt={mensalidade} />
            <div className="information-text">
              <p>Mais prazo para pagar a fatura do cartão</p>
            </div>
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
