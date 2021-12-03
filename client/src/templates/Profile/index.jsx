import { useContext, useEffect, useRef } from "react";
import { UserContext } from "../../context/user.context";
import Navbar from "../../components/Navbar";
import "./index.css";

export default function Profile() {
  const { user, updateUser, deleteUsers } = useContext(UserContext);
  const name = useRef();
  const lastname = useRef();
  const phone = useRef();

  const handleSubmit = async () => {
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
            <input type="text" placeholder={user.name} ref={name} />
            <input type="text" placeholder={user.lastname} ref={lastname} />
            <input
              type="text"
              placeholder={user.phone}
              minLength="11"
              ref={phone}
            />
            <input type="text" placeholder={user.cpf} disabled />
            <button type="submit" className="updateAccount">
              Atualizar
            </button>
            <button
              type="submit"
              className="removeAccount"
              onClick={() => deleteUsers()}
            >
              Remover conta
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
