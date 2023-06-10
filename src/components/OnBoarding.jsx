import React from "react";
import OnBoardImage from "../assets/Messaging-rafiki.png";
import SignIn from "./SignIn";

const OnBoarding = () => {
  return (
    <div className="flex flex-col items-center p-4 gap-4">
      <div>
        <img src={OnBoardImage} alt="onboard" className="w-80" />
      </div>
      <div>
        <h1 className="text-xl font-semibold">
          Selemata Datang di Aplikasi CoChat
        </h1>
        <p className="text-xs text-base-content mt-2">
          Daftar menggunakan akun google dengan menekan tombol dibawah
        </p>
      </div>
      <SignIn />
    </div>
  );
};

export default OnBoarding;
