import React, { useState } from "react";
import { Link } from "react-router-dom";
import { JoinContainer, JoinInnerBox, JoinTitle } from "../styles/join";

const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const handleRoomCreate = (e) => {
    if (!name || !room) {
      e.preventDefault();
      alert(`Name or room is valid. Check again ._.?`);
    } else {
      console.log("create");
    }
  };

  return (
    <JoinContainer>
      <JoinInnerBox>
        <JoinTitle>Join</JoinTitle>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="room"
          onChange={(e) => setRoom(e.target.value)}
        />
        <Link
          onClick={(e) => handleRoomCreate(e)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button type="submit"> Sign In</button>
        </Link>
      </JoinInnerBox>
    </JoinContainer>
  );
};

export default Join;
