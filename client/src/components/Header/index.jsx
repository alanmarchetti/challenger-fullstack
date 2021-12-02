import { Link } from 'react-router-dom'
import React from "react";
import '../chat.css'

export default function Header({ roomId }) {
  return (
    <header className="msger-header">
      <div className="msger-header-title">Bem vindo a sala: {roomId}</div>
      <div className="msger-geader-options">
        <span className="exitChat">
          <Link to="/">
            Sair da sala
          </Link>
        </span>
      </div>
    </header>
  );
}
