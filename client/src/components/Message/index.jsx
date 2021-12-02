import React from "react";
import ReactEmoji from 'react-emoji';

export default function Message({ message: { user, textContent }, username }) {
  let sendByThisUser = false;
  const trimmedUserName = username.trim().toLowerCase();

  if (user === trimmedUserName) {
    sendByThisUser = true;
  }

  return (
    <>
      {!sendByThisUser ? (
        <div className="msg left-msg">
          <div className="msg-bubble">
            <div className="msg-info">
              <div className="msg-info-name">
                <u>{user}</u>
              </div>
            </div>
            <div className="msg-text">{ReactEmoji.emojify(textContent)}</div>
          </div>
        </div>
      ) : (
        <div className="msg right-msg">
          <div className="msg-bubble">
            <div className="msg-info">
              <div className="msg-info-name">
                <u>{user}</u>
              </div>
            </div>
            <div className="msg-text">{ReactEmoji.emojify(textContent)}</div>
          </div>
        </div>
      )}
    </>
  );
}
