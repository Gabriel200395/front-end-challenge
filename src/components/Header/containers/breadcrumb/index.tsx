import "./styles.css";
import arrowBottom from "../../../../assets/img/icon-seta-baixo-branca.png";
import { BreadcrumbItems } from "../../../../helpers/breadcrumbList";
import { TypeText } from "../../../../types/breadcrumb";

export default function Breadcrumb() {
  return (
    <div className="breadcrumb-container">
      <ul>
        {BreadcrumbItems.map((BreadcrumbItem, index) => {
          switch (BreadcrumbItem.type) {
            case TypeText.List:
              return <li key={index}>{BreadcrumbItem.text} </li>;
            case TypeText.ButtonText:
              return (
                <li key={index}>
                  <button>
                    {BreadcrumbItem.text}
                    <img src={arrowBottom} alt={arrowBottom} />
                  </button>
                </li>
              );
            default:
              return null;
          }
        })}
      </ul>
    </div>
  );
}
