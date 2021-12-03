import { useState, useEffect } from "react";
import { useParams } from "react-router";
import io from "socket.io-client";

import Header from "../../components/Header";
import Messages from "../../components/Messages";
import MessageInput from "../../components/MessageInput";

let socket;

export default function ChatPlatForm() {
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const params = useParams();

  useEffect(() => {
    const { username, roomId } = params;
    socket = io("http://localhost:4444");
    setUsername(username);
    setRoomId(roomId);
    socket.emit("join", { username, roomId }, (error) => {
      if (error) alert(error);
    });
  }, [params]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <section className="msger">
      <Header roomId={roomId} />
      <Messages messages={messages} username={username} />
      <MessageInput
        sendMessage={sendMessage}
        message={message}
        setMessage={setMessage}
      />
    </section>
  );
}
