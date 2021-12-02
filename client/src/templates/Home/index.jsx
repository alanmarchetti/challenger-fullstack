import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { loadAllUsers } from "../../service/user";
import "./index.css";
import Users from "../../components/Users";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
  const [search, setSearch] = useState("");

  const getAllUsers = async () => {
    const data = await loadAllUsers();
    setUsers(data);
  };

  const handleChange = async (e) => {
    const resp = e.target.value;
    setSearch(resp);
  };

  const miranha = search
    ? users.filter((u) => {
        return u.name.toLowerCase().includes(search.toLowerCase());
      })
    : users;

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <>
      <Navbar />
      <div className="homeContainer">
        <input
          style={{ height: "150px" }}
          onChange={handleChange}
          value={search}
          type="search"
        />
        <div className="contact">
          <div className="contactInfo">
            <h4>Lista de usuários</h4>

            {miranha.length > 0 && <Users users={miranha} />}

            {miranha.length === 0 && <p>Não existem usuários!</p>}
          </div>
        </div>

        <div className="beginChat">
          <input
            type="text"
            placeholder="Nome do usuário"
            onChange={(e) => setUsername(e.target.value)}
          />

          <input
            type="text"
            placeholder="Room"
            onChange={(e) => setRoomId(e.target.value)}
          />
          <Link
            to={username && roomId ? `/chatting/${roomId}/${username}` : ""}
          >
            <button className="initializeButtonChat">Iniciar chat</button>
          </Link>
        </div>
      </div>
    </>
  );
}

/**
 * {miranha.length > 0 && <Users users={miranha} />}

   {miranha.length === 0 && <p>Não existem usuários!</p>} 


    const handleChange = async (e) => {
    const resp = e.target.value;
    setSearch(resp);
    const res = await axios.post("http://localhost:4444/api/user/", resp);
    const user = res.data.users;
    // resp = igual ao que eu digitei
    console.log(resp);
    // lista com todos os usuarios
    console.log(user);

    miranha = search
      ? user.filter((u) => {
          return u.name.toLowerCase().includes(resp.toLowerCase());
        })
      : getAllUsers();

    console.log(miranha);
  };




 */
