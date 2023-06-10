import React from "react";
import { auth } from "../firebase";

const LogOut = () => {
  return (
    <button onClick={() => auth.signOut()} className="btn btn-secondary btn-sm">
      Logout
    </button>
  );
};

export default LogOut;
