import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import { useHistory } from "react-router";
import axios from "axios";
import "./index.css";

export default function Navbar() {
  const history = useHistory();
  const { user } = useContext(UserContext);

  const removerLocalStorage = (e) => {
    localStorage.removeItem("USER");
    history.push("/signin");
  };

  const deleteUsers = async (e) => {
    const response = await axios.delete(
      `http://localhost:4444/api/user/${user._id}`
    );
    localStorage.removeItem("USER");
    history.push("/signin");
  };

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
            <button onClick={removerLocalStorage} className="navbarButton">
              Sair 
            </button>
          </span>
          <span className="navbarLink">
            <button onClick={deleteUsers} className="navbarButton">
              Remover conta
            </button>
          </span>
        </div>
      </div>
    </div>
  );
}
