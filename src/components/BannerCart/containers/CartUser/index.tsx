import "./styles.css";
import cloud from "../../../../assets/img/icons-8-cloud-firewall.png";
import cart from "../../../../assets/img/cart-o.png";
import arrowRight from "../../../../assets/img/icons-8-right.png";
import { formatNumber } from "../../../../utils/formatNumber";
import {PropsInformationList} from "../../../../types/informationList"

export default function CartUser({ data }: PropsInformationList) {
  return (
    <div className="cart-user-container">
      <div className="grid-cart-user">
        <img src={data?.imageUrl[1]} alt={cart} />
        <div className="cart-information">
          <div className="grid-recommended">
            <span>Recomendado</span>
            <span>Visa Classic</span>
          </div>

          <h2>{data?.name}</h2>
          <div className="container-assessment">
            <div className="grid-assessment">
              <i className="fas fa-star" />

              <span>{formatNumber(data?.rating.average_score)}</span>
            </div>
            <span>{data?.rating.total_reviews} avaliações</span>
          </div>
        </div>
      </div>

      <div className="container-buttons">
        <button className="button-cart">
          <span>Solicitar cartão</span>
          <img src={arrowRight} alt={arrowRight} />
        </button>
        <button className="button-security">
          <img src={cloud} alt={cloud} />
          <span>Solicite com segurança</span>
        </button>
      </div>
    </div>
  );
}
