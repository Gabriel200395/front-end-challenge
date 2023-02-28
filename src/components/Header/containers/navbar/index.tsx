import foregon from "../../../../assets/img/logo-foregon-topo.png";
import "./styles.css"
export default function Navbar() {
  return (
    <nav>
      <div className="logo-container">
        <button>
          <i className="fa fa-bars" />
        </button>
        <img src={foregon} alt={foregon} />
        <span>Cartões de crédito</span>
      </div>
      <button id="button">Descubra seu score grátis</button>
    </nav>
  );
}
