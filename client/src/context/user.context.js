import { createContext, useState, useEffect } from "react";
import axios from 'axios';
import { loadAllUsers } from "../service/user";
export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
  const [users, setUsers] = useState("");
  const [loading, setLoading] = useState(true);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [search, setSearch] = useState("");


    // acesso ao array com tds os usuarios da ap
    const getAllUsers = async () => {
      const data = await loadAllUsers();
      setUsers(data);
    };

    const handleChange = (e) => {
      const { value } = e.target;
      setSearch(value);
    };
  
  
    useEffect(() => {
        getAllUsers();
    }, [])
  

  useEffect(() => {
    function loadStorage() {
      const storageUser = localStorage.getItem("USER");
      if (storageUser) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }
      setLoading(false);
    }
    loadStorage();
  }, []);


  const signin = async ( cpf ) => {
    const response = await axios.post('http://localhost:4444/api/auth/signin', {
        cpf,
      });
      setUser(response.data.user);
      saveLocalStorage(response.data.user);
      setLoadingAuth(false);
      console.log(response.data.user)
  };

  const signup = async (name, lastname, phone, cpf) => {
    const response = await axios.post("http://localhost:4444/api/auth/signup", {
      name,
      lastname,
      phone,
      cpf,
    });
    setUser(response.data.user);
    saveLocalStorage(response.data.user);
    setLoadingAuth(false);
  };

  const saveLocalStorage = (data) => {
    localStorage.setItem("USER", JSON.stringify(data));
  };

  return (
    <UserContext.Provider value={{ signed: !!user, user, signin, signup, loading, loadingAuth, setUser, search, handleChange, users }}>
      {children}
    </UserContext.Provider>
  );
};
