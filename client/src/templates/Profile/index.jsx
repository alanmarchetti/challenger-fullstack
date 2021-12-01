
import Navbar from '../../components/Navbar';
import './index.css';

export default function Profile() {
    return (
        <>
        <Navbar/>
        <div className="profileContainer">
            <div className="profileContent">
                <div className="profileContentHeader">
                    Edite sua conta
                </div>
                <div className="profileContentInfoUser">
                    <input type="text" placeholder="Nome usuario"/>
                    <input type="text" placeholder="Sobrenome usuario"/>
                    <input type="text" placeholder="Telefone usuario"/>
                    <input type="text" placeholder="Cpf usuario"/>
                    <button type="submit">Atualizar</button>
                </div>
            </div>
        </div>
        </>
        
    )
}
