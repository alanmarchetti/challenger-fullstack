import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// - componenets
import Navbar from "../../components/Navbar";
import Users from "../../components/Users";

import axios from "axios";

// - styles
import "./index.css";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
  const [search, setSearch] = useState("");
 
  const getAllUsers = async () => {
    const response = await axios.post("http://localhost:4444/api/user/");
    setUsers(response.data.users);
  };

  const handleChange = async (e) => {
    const resp = e.target.value;
    setSearch(resp);
  };

  const filteredUSer = search
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
        <div className="contact">
          <div className="contactInfo">
            <input
              onChange={handleChange}
              value={search}
              type="search"
              placeholder="Pesquise o nome do usuário"
            />
            <h4>Lista de usuários</h4>

            {filteredUSer.length > 0 && <Users users={filteredUSer} />}

            {filteredUSer.length === 0 && <p>Não existem usuários!</p>}
          </div>
        </div>

        <div className="beginChat">
          <h2>Inicie uma conversa</h2>
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
