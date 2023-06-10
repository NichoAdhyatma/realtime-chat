import React from "react";
import { auth } from "../firebase";

const styles = {
  message:
    "flex items-center shadow-xl m-4 py-2 px-3 rounded-xl",
  name: "absolute mt-[-4rem] text-gray-600 text-xs",
  sent: "bg-[#395dff] text-white flex-row-reverse text-end float-right",
  received: "bg-[#e5e5ea] text-black float-left",
};

const Message = ({ message }) => {
  const messageClass =
    message.uid === auth.currentUser.uid
      ? `${styles.sent}`
      : `${styles.received}`;
  return (
    <div>
      <div className={`${styles.message} ${messageClass}`}>
        <p className={styles.name}>{message.name}</p>
        <p>{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
