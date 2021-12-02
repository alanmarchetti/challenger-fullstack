import { useState, useContext } from "react";
import { UserContext } from "../../context/user.context";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "./index.css";

export default function Signup() {
  const { signup } = useContext(UserContext);
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [phone, setPhone] = useState("");
  const [cpf, setCpf] = useState("");
  const history = useHistory();

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      await signup(name, lastname, phone, cpf);
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
        <div className="signinRight">
          <form className="signinBox" onSubmit={handleRegister}>
            <h2 className="signinText">Faça seu cadastro</h2>

            <input
              className="signinInput"
              type="text"
              placeholder="Nome"
              name={name}
              onChange={(event) => setName(event.target.value)}
            />

            <input
              className="signinInput"
              type="text"
              placeholder="Sobrenome"
              name={lastname}
              onChange={(event) => setLastname(event.target.value)}
            />
            <input
              className="signinInput"
              type="tel"
              placeholder="Telefone"
              minLength="11"
              name={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
            <input
              className="signinInput"
              type="text"
              placeholder="Cpf"
              minLength="11"
              name={cpf}
              onChange={(event) => setCpf(event.target.value)}
            />
            <button className="signinButton" disabled={""}>
              Cadastrar
            </button>

            <button className="signinRegisterButton">
              <Link to="/">Login</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
