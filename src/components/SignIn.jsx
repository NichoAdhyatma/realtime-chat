import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import React from 'react';
import GoogleButton from 'react-google-button';
import {auth} from "../firebase"

const styles = {
  wrapper: 'flex justify-center'
}

const googleSignIn = () => {
  const provider =  new GoogleAuthProvider()
  signInWithRedirect(auth, provider)
}

const SignIn = () => {
  return (
    <div className={styles.wrapper}>
      <GoogleButton onClick={googleSignIn}/>
    </div>
  );
}

export default SignIn;
