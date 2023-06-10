import React from "react";
import Navbar from "./components/Navbar";
import Chat from "./components/Chat";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import OnBoarding from "./components/OnBoarding";
import { useSelector } from "react-redux";

const styles = {
  appContainer: "max-w-[720px] mx-auto text-center",
  sectionContainer:
    "flex flex-col h-screen shadow-xl border relative",
};

function App() {
  const [user] = useAuthState(auth);
  const theme = useSelector((state) => state.theme.value);

  return (
    <div className={styles.appContainer} data-theme={theme}>
      <section className={styles.sectionContainer}>
        <Navbar />

        {user ? <Chat /> : <OnBoarding />}
      </section>
    </div>
  );
}

export default App;
