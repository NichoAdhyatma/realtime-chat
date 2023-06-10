import React from "react";
import Navbar from "./components/Navbar";
import Chat from "./components/Chat";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const styles = {
  appContainer: "max-w-[720px] mx-auto text-center",
  sectionContainer:
    "flex flex-col h-screen bg-gray-100 shadow-xl border relative",
};

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className={styles.appContainer}>
      <section className={styles.sectionContainer}>
        <Navbar />

        {user && <Chat />}
      </section>
    </div>
  );
}

export default App;
