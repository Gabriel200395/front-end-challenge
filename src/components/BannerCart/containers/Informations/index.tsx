import "./styles.css";
import chances from "../../../../assets/img/group-2.png";
import { PropsInformationList } from "../../../../types/informationList";
import ListDesktop from "../ListDesktop";
import ListMobile from "../ListMobile";

export default function Informations({ data }: PropsInformationList) {
  return (
    <div className="information-list-container">
      <ListDesktop
        valueOfMinimalIncomeRequired={data?.valueOfMinimalIncomeRequired}
        textFormatted={data?.firstAnnuity.textFormatted}
      />
      <ListMobile />

      <div className="grid-information-chances">
        <img src={chances} alt={chances} />
        <p>
          Você tem <strong>altas chances</strong> de aprovação neste cartão
        </p>
      </div>
    </div>
  );
}
