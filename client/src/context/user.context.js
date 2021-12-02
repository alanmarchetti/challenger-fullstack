import { createContext, useState, useEffect } from "react";
import { toast } from 'react-toastify';
import axios from "axios";


export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loadingAuth, setLoadingAuth] = useState(false);

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

  const signin = async (cpf) => {
    const response = await axios.post("http://localhost:4444/api/auth/signin", {
      cpf,
    });
    setUser(response.data.user);
    saveLocalStorage(response.data.user);
    setLoadingAuth(false);
    console.log(response.data.user);
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

  const updateUser = async ({ name, lastname, phone }) => {
    const data = { name, lastname, phone };
    const res = await axios.post(
      `http://localhost:4444/api/user/${user._id}`,
      data
    );
    setUser(res.data.user);
    saveLocalStorage(res.data.user);
    console.log(res.data.user);
  };

  const saveLocalStorage = (data) => {
    localStorage.setItem("USER", JSON.stringify(data));
  };

  const removerLocalStorage = (e) => {
    alert('Tem certeza que deseja sair?')
    toast.warning('Adeus')
    localStorage.removeItem("USER");
    setUser(null);
  };

  const deleteUsers = async (e) => {
    await axios.delete(`http://localhost:4444/api/user/${user._id}`);
    toast.error('Sua conta foi removida')
    localStorage.removeItem("USER");
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        signed: !!user,
        user,
        signin,
        signup,
        loading,
        loadingAuth,
        setUser,
        removerLocalStorage,
        deleteUsers,
        updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
