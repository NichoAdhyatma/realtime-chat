import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import LogOut from "./LogOut";
import ThemeChanger from "./ThemeChanger";

const styles = {
  nav: "flex items-center justify-between p-4 bg-base-300 shadow-md",
  heading: "text-3xl text-base-content",
};

const Navbar = () => {
  const [user] = useAuthState(auth);

  return (
    <div className={styles.nav}>
      <h1 className={styles.heading}>Co Chat</h1>
      {user && <LogOut />}
      <ThemeChanger />
    </div>
  );
};

export default Navbar;
