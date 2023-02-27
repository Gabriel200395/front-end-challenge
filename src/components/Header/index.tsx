import foregon from "../../assets/img/logo-foregon-topo.png";
import arrowBottom from "../../assets/img/icon-seta-baixo-branca.png";
import "./styles.css";

export default function Header() {
  return (
    <header className="header-c">
      <nav>
        <div className="logo-container">
          <button>
            <i className="fa fa-bars" />
          </button>
          <img src={foregon} alt={foregon} />
          <span>Cartões de crédito</span>
        </div>
        <button>Descubra seu score grátis</button>
      </nav>
      <div className="menu-options-items">
        <ul>
          <li>Cartões para negativados</li>
          <li>cartões com milhas</li>
          <li>cartões sem anuidade</li>
          <li>cartões para estudantes</li>
          <li>cartões com mais benefícios</li>
          <li>
            <button>
              mais de 2 <img src={arrowBottom} alt={arrowBottom} />
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
