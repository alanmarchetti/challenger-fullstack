import Navbar from '../../components/Navbar';

import './index.css';

export default function Home() {
    return (
        <>
        <Navbar/>
        <div className="homeContainer">
           <div className="contact">

            <div className="contactInfo">
                <h4>Lista de usuários</h4>
                <span>usuario 01</span>
                <span>usuario 01</span>
                <span>usuario 01</span>
                <span>usuario 01</span>
                <span>usuario 01</span>
                <span>usuario 01</span>
                <span>usuario 01</span>
            </div>

           </div>

           <div className="beginChat">
            <input type="text" placeholder="Nome do usuário"/>
            <input type="text" placeholder="Room"/>
            <button className="initializeButtonChat">Iniciar chat</button>
           </div>

         </div>
        </>
    )
}
