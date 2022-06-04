import "../Footer/Footer.css";

import instagram from "../../Assets/footer/black-instagram-logo-3497.png";
import facebook from "../../Assets/footer/facebook-logo-2163.png";
import linkedin from "../../Assets/footer/linkedin-112.png";
import twitter from "../../Assets/footer/twitter-logo-2429.png";

export default function Footer() {
  return (
    <div className="footer-container">
      <a href="https://twitter.com/baboonanimation">
        <img src={twitter} className="footer-img" />
      </a>
      <a href="https://www.facebook.com/BaboonAnimation/">
        <img src={facebook} className="footer-img" />
      </a>
      <a href="https://www.instagram.com/baboon_animation/">
        <img src={instagram} className="footer-img" />
      </a>
      <a href="https://www.linkedin.com/company/baboon-animation/">
        <img src={linkedin} className="footer-img" />
      </a>
    </div>
  );
}
