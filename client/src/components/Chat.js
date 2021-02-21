import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import { ChatOuterContainer, ChatInnerContainer } from "../styles/chat";
import InfoBar from "./InfoBar";
import Messages from "./Messages";
import Input from "./Input";

let socket;
const ENDPOINT = "localhost:5000" || process.env.REACT_APP_PORT;

const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    // console.log(name, room);

    socket = io(ENDPOINT);

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, () => {});

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => {
        setMessage("");
      });
    }
  };

  console.log(message, messages);

  return (
    <ChatOuterContainer>
      <ChatInnerContainer>
        <InfoBar room={room} />
        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </ChatInnerContainer>
    </ChatOuterContainer>
  );
};

export default Chat;
