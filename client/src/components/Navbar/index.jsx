import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import "./index.css";

export default function Navbar() {
  const { user, removerLocalStorage, deleteUsers } = useContext(UserContext);

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
            type="search"
            placeholder="Procure por amigos"
            className="searchInput"
          />
        </div>
      </div>

      <div className="navbarRight">
        <div className="navbarLinks">
          <span className="navbarLink"> {user.name} </span>
          <Link to="/profile">
            <span className="navbarLink">Perfil</span>
          </Link>
          <span className="navbarLink">
            <button
              onClick={() => removerLocalStorage()}
              className="navbarButton"
            >
              Sair
            </button>
          </span>
          <span className="navbarLink">
            <button onClick={() => deleteUsers()} className="navbarButton">
              Remover conta
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
