import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import { ExitToApp, Person, Settings } from '@material-ui/icons';
import "./index.css";

export default function Navbar() {
  const { user, removerLocalStorage, deleteUsers } = useContext(UserContext);

  return (
    <div className="navbarContainer">
      <div className="navbarLeft">
        
        <Link to="/" style={{ textDecoration: "none" }}>
          
          <span className="logo">ChatApp</span>
        </Link>
      </div>
     
     

      <div className="navbarRight">
        <div className="navbarLinks">
          <span className="navbarLink text"> 
          {user.name} 
          </span>
          <Link to="/profile">
            <span className="navbarLink"><Person/></span>
          </Link>
          <span className="navbarLink">
            <button
              onClick={() => removerLocalStorage()}
              className="navbarButton"
            >
            <ExitToApp/>
            </button>
          </span>
         
          <span className="navbarLink">
            <button onClick={() => deleteUsers()} className="navbarButton">
              <Settings/>
            </button>
          </span>
        </div>
        
      </div>
    </div>
  );
}
