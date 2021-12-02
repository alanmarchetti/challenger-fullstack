import { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";

import axios from "axios";
import "./index.css";

export default function Home() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
        const response = await axios.get('http://localhost:4444/api/user/all');
        setUser(response.data.users);
    };
    getUsers();
  }, []);

  console.log(user)

  return (
    <>
      <Navbar />
      <div className="homeContainer">
        <div className="contact">
          <div className="contactInfo">
            <h4>Lista de usuários</h4>
            {user.map((u, i) => (
                <>
                <span key={i} >{u.name} {u.lastname}</span>
                </>
            ))}
          </div>
        </div>

        <div className="beginChat">
          <input type="text" placeholder="Nome do usuário" />
          <input type="text" placeholder="Room" />
          <button className="initializeButtonChat">Iniciar chat</button>
        </div>
      </div>
    </>
  );
}
