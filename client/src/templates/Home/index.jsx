import { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/user.context";
import { Link } from "react-router-dom";
import Users from "../../components/Users";
import Navbar from "../../components/Navbar";
import "./index.css";

import { TextInput } from '../../components/Input'

export default function Home() {
  //const [users, setUsers] = useState([]);
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
  //const [search, setSearch] = useState("");
  const { users, search } = useContext(UserContext);

   const filteredUsers = search
   ? users.filter((u) => {
       return (
         u.name.toLowerCase().includes(search.toLowerCase()) ||
         u.lastname.includes(search) ||
         u.lastname.includes(search.toLowerCase())
       );
     })
   : users;
 
  return (
    <>
      <Navbar />
      <div className="homeContainer">
      <TextInput />
        <div className="contact">
      
          <div className="contactInfo">
            <h4>Lista de usuários</h4>
            
            <div>

            {filteredUsers.length > 0 && <Users users={filteredUsers} />}

            {filteredUsers.length === 0 && <p>Não existem usuários!</p>}

            </div>
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


/***
 * 
  
 */