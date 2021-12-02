import React from "react";

export default function Header({ roomId }) {
  return (
    <header className="msger-header">
      <div className="msger-header-title">ICON CHAT SIMPLES [{roomId}]</div>
      <div className="msger-geader-options">
        <span>
          <a href="/">Sair</a>
        </span>
      </div>
    </header>
  );
}
