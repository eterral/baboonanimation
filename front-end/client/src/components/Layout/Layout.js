import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import background from "../../Assets/About_(3)_1.png";

export default function Layout(props) {
  return (
    <div className="layout">
      <Navbar />
      <div
        className="layout-children"
        style={{
          backgroundImage: `url("${background}")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {props.children}
      </div>
      <Footer />
    </div>
  );
}
