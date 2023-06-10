import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./SignIn";
import LogOut from "./LogOut";

const styles = {
  nav: "flex items-center justify-between p-4 bg-gray-800",
  heading: "text-3xl text-white",
};

const Navbar = () => {
  const [user] = useAuthState(auth);

  return (
    <div className={styles.nav}>
      <h1 className={styles.heading}>Co Chat</h1>
      {user ? <LogOut /> : <SignIn />}
    </div>
  );
};

export default Navbar;
