import React from "react";

const Input = ({ setMessage, sendMessage, message }) => {
  return (
    <form>
      <input
        type="text"
        value={message}
        onChange={(e = setMessage(e.target.value))}
        onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : null)}
      />
    </form>
  );
};

export default Input;
