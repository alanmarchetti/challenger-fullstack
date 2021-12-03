import { useState, useContext } from "react";
import { UserContext } from "../../context/user.context";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "./index.css";

export default function Signin() {
  const [cpf, setCpf] = useState("");
  const { signin } = useContext(UserContext);
  const history = useHistory();

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await signin(cpf);
      toast.success("Bem vindo de volta");
      history.push("/");
    } catch (error) {
      if (error.response) {
        toast.error(`${error.response.data.msg}`);
      }
    }
  };

  return (
    <div className="signinContainer">
      <div className="signinWrapper">
        <div className="signinLeft">
          <h3 className="signinLogo">ChatApp</h3>
          <span className="signinDesc">Converse com seus amigos</span>
        </div>
        <div className="signinRight" onSubmit={handleLogin}>
          <form className="signinBox">
            <h2 className="signinText">Faça seu login</h2>

            <input
              className="signinInput"
              type="text"
              placeholder="Seu cpf"
              minLength="11"
              name={cpf}
              onChange={(event) => setCpf(event.target.value)}
            />
            <button className="signinButton">Acessar</button>
            <button className="signinRegisterButton">
              <Link to="/signup">Cadastrar</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
