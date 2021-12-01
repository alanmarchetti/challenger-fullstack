import { Link } from 'react-router-dom';
import "./index.css";

export default function Signup() {
  return (
    <div className="signinContainer">
      <div className="signinWrapper">
        <div className="signinLeft">
          <h3 className="signinLogo">ChatApp</h3>
          <span className="signinDesc">Converse com seus amigos</span>
        </div>
        <div className="signinRight" onSubmit={""}>
          <form className="signinBox">
            <h2 className="signinText">Faça seu cadastro</h2>
            <input className="signinInput" type="text" placeholder="Nome" />
            <input
              className="signinInput"
              type="text"
              placeholder="Sobrenome"
            />
            <input
              className="signinInput"
              type="tel"
              placeholder="Telefone"
              minLength="11"
            />
            <input
              className="signinInput"
              type="text"
              placeholder="Cpf"
              minLength="11"
            />
            <button className="signinButton" disabled={""}>
              Cadastrar
            </button>

            <button className="signinRegisterButton">
              <Link to="/signin">
                Login
              </Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
