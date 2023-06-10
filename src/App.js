import React from "react";
import Navbar from "./components/Navbar";
import Chat from "./components/Chat";

const styles = {
  appContainer: "max-w-[720px] mx-auto text-center",
  sectionContainer:
    "flex flex-col h-screen bg-gray-100 shadow-xl border relative",
};

function App() {
  return (
    <div className={styles.appContainer}>
      <section className={styles.sectionContainer}>
        {/* Navbar */}
        <Navbar />
        {/* Chat Component */}
        <Chat/>
      </section>
    </div>
  );
}

export default App;
