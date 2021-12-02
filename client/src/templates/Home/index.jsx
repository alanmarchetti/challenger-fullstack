//import { UserContext } from "../../context/user.context";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

import axios from "axios";
import "./index.css";

export default function Home() {
  //const { user, setUser } = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    const getUsers = async () => {
      const response = await axios.get("http://localhost:4444/api/user/all");
      setUsers(response.data.users);
    };
    getUsers();
  }, []);

  useEffect(() => {}, []);

  return (
    <>
      <Navbar />
      <div className="homeContainer">
        <div className="contact">
          <div className="contactInfo">
            <h4>Lista de usuários</h4>
            {users.map((u, i) => (
              <>
                <span key={i}>
                  {u.name} {u.lastname}
                </span>
              </>
            ))}
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
            to={username && roomId ? `/chatting/${roomId}/${username}` : ''}
          >
            <button className="initializeButtonChat">Iniciar chat</button>
          </Link>
        </div>
      </div>
    </>
  );
}
