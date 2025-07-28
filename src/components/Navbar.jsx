import logo from "../assets/imgs/Logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <div className="HeaderDiv">
      <div className="HomelogoDiv">
        <a href="/">
          {" "}
          <img className="HomeLogoImg" src={logo} alt="Logo" />
        </a>
      </div>
      <div className="BlogButtondiv">
        <a href="">Blog</a>
      </div>
      <div className="SupportButtonDiv">
        <a href="/"> Support</a>
      </div>
      <div className="AboutButtonDiv">
        <a href="/">About</a>
      </div>
      <div className="MoreOptionsButtonDiv">
        <button className="MoreOptionsButton">
          <FontAwesomeIcon icon={faEllipsisV} />
        </button>
      </div>
      <div className="app-container"></div>
    </div>
  );
}

export default Navbar;
