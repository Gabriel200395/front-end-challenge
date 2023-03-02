import Breadcrumb from "./containers/Breadcrumb";
import Navbar from "./containers/Navbar";

export default function Header() {
  return (
    <header className="header-c">
      <Navbar />
      <Breadcrumb />
    </header>
  );
}
