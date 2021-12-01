import { Link } from "react-router-dom";
import "./index.css";

export default function Navbar() {
  return (
    <div className="navbarContainer">

      <div className="navbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">ChatApp</span>
        </Link>
      </div>

      <div className="navbarCenter">
        <div className="searchbar">
          <input
            type="text"
            placeholder="Procure por amigos"
            className="searchInput"
          />
        </div>
      </div>

      <div className="navbarRight">
        <div className="navbarLinks">
          <Link to="/profile">
            <span className="navbarLink">Perfil</span>
          </Link>
          <span className="navbarLink">Chat</span>
          <span className="navbarLink">Sair</span>
        </div>
      </div>
    </div>
  );
}
