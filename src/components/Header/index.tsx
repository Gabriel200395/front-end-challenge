import Breadcrumb from "./containers/breadcrumb";
import Navbar from "./containers/navbar";

export default function Header() {
  return (
    <header className="header-c">
      <Navbar />
      <Breadcrumb />
    </header>
  );
}
