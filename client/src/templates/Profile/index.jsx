import { useContext, useEffect, useRef } from "react";
import { UserContext } from "../../context/user.context";
import Navbar from "../../components/Navbar";
import "./index.css";

export default function Profile() {
  const { updateUser } = useContext(UserContext);
  const name = useRef();
  const lastname = useRef();
  const phone = useRef();

  const handleSubmit = async (e) => {
    try {
      await updateUser({
        name: name.current.value,
        lastname: lastname.current.value,
        phone: phone.current.value,
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    handleSubmit();
  }, []);

  return (
    <>
      <Navbar />
      <div className="profileContainer">
        <div className="profileContent">
          <div className="profileContentHeader">Edite sua conta</div>
          <form className="profileContentInfoUser" onSubmit={handleSubmit}>
            <input type="text" placeholder="Nome usuario" ref={name} />
            <input type="text" placeholder="Sobrenome usuario" ref={lastname} />
            <input type="text" placeholder="Telefone usuario" ref={phone} />
            <input type="text" placeholder="Cpf usuario" />
            <button type="submit">Atualizar</button>
          </form>
        </div>
      </div>
    </>
  );
}
