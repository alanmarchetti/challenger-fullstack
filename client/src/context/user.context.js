import { createContext, useState, useEffect } from "react";
import axios from 'axios';

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([]);
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

  const signin = async ( cpf ) => {
    const response = await axios.post('http://localhost:4444/api/auth/signin', {
        cpf,
      });
      setUser(response);
      saveLocalStorage(response);
      setLoadingAuth(false);
      console.log(response)
  };

  const signup = async (name, lastname, phone, cpf) => {
    const response = await axios.post("http://localhost:4444/api/auth/signup", {
      name,
      lastname,
      phone,
      cpf,
    });
    setUser(response.data);
    saveLocalStorage(response.data);
    setLoadingAuth(false);
  };

  const saveLocalStorage = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
  };

  return (
    <UserContext.Provider value={{ signed: !!user, user, signin, signup, loading, loadingAuth }}>
      {children}
    </UserContext.Provider>
  );
};

/**
 *  const [loading, setLoading] = useState(true);
  const [loadingAuth, setLoadingAuth] = useState(false);

  useEffect(() => {
    function loadStorage() {
      const storageUser = localStorage.getItem("user");
      if (storageUser) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
      }
      setLoading(false);
    }
    loadStorage();
  }, []);

  const signin = async ({ cpf }) => {
    const response = await axios.post("http://localhost:4444/api/signin", {
      cpf,
    });
    setUser(response.data.user);
    saveStorageUser(response.data.user);
    setLoadingAuth(false);
  };

  const signup = async ({ name, lastName, phone, cpf }) => {
    const response = await axios.post("http://localhost:4444/api/user", {
      name,
      lastName,
      phone,
      cpf,
    });
    setUser(response.data.user);
    saveStorageUser(response.data.user);
    setLoadingAuth(false);
  };

  const getAllUser = async () => {
    const response = await axios.get("http://localhost:4444/api/users");
    setUser(response.data.user);
    setLoadingAuth(false);
  };

  
 
  const saveStorageUser = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
  };

  
 */

  /**
   * // provendo este contexto
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loadingAuth, setLoadingAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  // verificando no localStorage se há usuário logado na aplicação
  useEffect(() => {
    function loadStorage() {
      const storageUser = localStorage.getItem("SYSTEM_USER");
      if (storageUser) {
        setUser(JSON.stringify(storageUser));
        setLoading(false);
      }
      setLoading(false);
    }

    loadStorage();
  }, []);

  const signUp = async (email, password, name) => {
    setLoadingAuth(true);

    // criando um usuário na nossa autenticacao do firebase (auth)
    await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (value) => {
        let uid = value.user.uid;

        // cadastrando um usuário no banco (firesotore database)
        await firebase
          .firestore()
          .collection("users")
          .doc(uid)
          .set({
            name: name,
            avatarUrl: null,
          })
          .then(() => {
            //montando o usuário
            let data = {
              uid: uid,
              name: name,
              email: value.user.email,
              avatarUrl: null,
            };

            setUser(data);
            saveStorageUser(data); // apos isso, podemos salvar este usuário no localstorage
            setLoadingAuth(false);
            toast.success("Bem vindo a plataforma :)");
          });
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ops! Algo deu errado :( ");
        setLoadingAuth(false);
      });
  };

  const signIn = async (email, password) => {
    setLoadingAuth(true);

    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async (value) => {
        let uid = value.user.uid;

        // indo no banco de dados e buscando as informações do usuário
        const userProfile = await firebase
          .firestore()
          .collection("users")
          .doc(uid)
          .get();

        let data = {
          uid: uid,
          name: userProfile.data().name,
          avatarUrl: userProfile.data().avatarUrl,
          email: value.user.email,
        };

        setUser(data);
        saveStorageUser(data);
        setLoadingAuth(false);
        toast.success("Bem vindo de volta :)");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Ops! Algo deu errado :( ");
        setLoadingAuth(false);
      });
  };

  /**
   * Deslogando usuário
   * removendo do localstorage
   * retornando o estado do usuário para null
   */
 