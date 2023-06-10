import React, { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const styles = {
  form: "h-14 w-full flex text-xl absolute bottom-0",
  input: "w-full text-xl p-3 bg-gray-900 text-white outline-none border-none",
  button: "w-[20%] bg-green-500",
};

const SendMessage = ({scroll}) => {
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, displayName } = auth.currentUser;
    input !== "" &&
      (await addDoc(collection(db, "messages"), {
        text: input,
        name: displayName,
        uid,
        timestamp: serverTimestamp(),
      }));

    setInput("");
    scroll.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <form onSubmit={sendMessage} className={styles.form}>
        <input
          required={true}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className={styles.input}
          type="text"
          placeholder="Masukan Pesan mu disini..."
        />
        {input !== "" && (
          <button className={styles.button} type="submit">
            Kirim
          </button>
        )}
      </form>
    </div>
  );
};

export default SendMessage;
