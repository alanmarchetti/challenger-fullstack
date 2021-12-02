import { useRef, useEffect } from "react";
import Message from "../Message";

export default function Messages({ messages, username }) {
  const messagesEnd = useRef(null);

  const scrollToBottom = () => {
    messagesEnd.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <main className="msger-chat">
      {messages.map((message, i) => (
        <Message key={i} message={message} username={username} />
      ))}
      <div ref={messagesEnd} />
    </main>
  );
}
