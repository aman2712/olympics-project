import React from "react";

const Message = ({ type, text }) => {
  return (
    <p style={{ color: type === "error" ? "#E23636" : "#A7DD3C" }}>{text}</p>
  );
};

export default Message;
