import { Link } from "react-router-dom";
import "./index.css";

export default function Signin() {

  const handleSubmit = (e) => {
    e.preventDefault();
  }


  return (
    <div className="signinContainer">
      <div className="signinWrapper">
        <div className="signinLeft">
          <h3 className="signinLogo">ChatApp</h3>
          <span className="signinDesc">Converse com seus amigos</span>
        </div>
        <div className="signinRight" onSubmit={handleSubmit}>
          <form className="signinBox">
            <h2 className="signinText">Faça seu login</h2>

            <input
              className="signinInput"
              type="text"
              placeholder="Seu cpf"
              minLength="11"
            />

            <button className="signinButton" disabled={""}>
              "Acessar"
            </button>
            <button className="signinRegisterButton">
            <Link to="/signup">
              Cadastrar
            </Link>
            </button>
            
          </form>
        </div>
      </div>
    </div>
  );
}
