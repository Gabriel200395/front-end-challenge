import "./styles.css";
import arrowBottom from "../../../../assets/img/icon-seta-baixo-branca.png";
import { BreadcrumbItems } from "../../../../helpers/BreadcrumbList";
import { TypeText } from "../../../../types/Breadcrumb";

export default function Breadcrumb() {
  return (
    <div className="breadcrumb-container">
      <ul>
        {BreadcrumbItems.map((BreadcrumbItem) => {
          switch (BreadcrumbItem.type) {
            case TypeText.List:
              return <li>{BreadcrumbItem.text} </li>;
            case TypeText.ButtonText:
              return (
                <li>
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
