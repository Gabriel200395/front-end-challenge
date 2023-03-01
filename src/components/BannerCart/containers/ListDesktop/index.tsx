import "./styles.css"
import { informListDesKTOP } from "../../../../helpers/InformationListDestop";
import { formatMoney } from "../../../../utils/formatMoney";
import { treatCharacter } from "../../../../utils/treatCharacter";

interface PropsListDesktop {
  textFormatted: string | undefined;
  valueOfMinimalIncomeRequired: number | undefined;
}

export default function ListDesktop({
  textFormatted,
  valueOfMinimalIncomeRequired,
}: PropsListDesktop) {
  return (
    <div className="grid-informations-desktop">
      {informListDesKTOP.map((information, index) => {
        switch (information.type) {
          case "TextHeader":
            return (
              <div
                className={`information-item ${information.spancing}`}
                key={index}
              >
                <img src={information.img} alt={information.img} />

                <div className="information-text">
                  <h3>{information.title}</h3>
                  <p>
                    {information.text === "string"
                      ? treatCharacter(textFormatted)
                      : formatMoney(valueOfMinimalIncomeRequired)}
                  </p>
                </div>
              </div>
            );

          case "Text":
            return (
              <div
                className={`information-item ${information.spancing}`}
                key={index}
              >
                <img src={information.img} alt={information.img} />
                <div className="information-text">
                  <p>{information.text}</p>
                </div>
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
