import "./styles.css";
import { informListMobile } from "../../../../helpers/InformationListMobile";
import { TypeTextList } from "../../../../types/propsListInformation";

export default function ListMobile() {
  return (
    <div className="grid-informations-mobile">
      <div className="flex">
        {informListMobile.map((information, index) => {
          switch (information.type) {
            case TypeTextList.TextHeader:
              return (
                <div
                  className={`information-item ${information.spancing}`}
                  key={index}
                >
                  <img src={information.img} alt={information.img} />

                  <div className="information-text">
                    <h3>{information.title}</h3>
                    <p>{information.text}</p>
                    {information.link && (
                      <div className="grid-link">
                        <a href="#">{information.link}</a>
                      </div>
                    )}
                  </div>
                </div>
              );
            default:
              return null;
          }
        })}
      </div>

      <div className="flex">
        {informListMobile.map((information, index) => {
          switch (information.type) {
            case TypeTextList.Text:
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
    </div>
  );
}
