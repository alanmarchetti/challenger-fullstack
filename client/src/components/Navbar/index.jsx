import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import "./index.css";

export default function Navbar() {
  const { user, removerLocalStorage } = useContext(UserContext);

  return (
    <div className="navbarContainer">
      <div className="navbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">ChatApp</span>
        </Link>
      </div>
      <div className="navbarRight">
        <div className="navbarLinks">
          <Link to="/home">
            <span className="navbarLink text">Bem vindo(a): {user.name}</span>
          </Link>
          <Link to="/profile">
            <span className="navbarLink">Seu perfil</span>
          </Link>
          <span className="navbarLink">
            <button
              onClick={() => removerLocalStorage()}
              className="navbarButton"
            >
              Sair da conta
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
