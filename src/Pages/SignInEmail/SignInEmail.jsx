import { auth } from "../SignUpEmail/firebase";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

import signIn from "../../Styles/SignInEmail/signInEmail.module.css";

const SignInEmail = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignInUser = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/home");
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <div className={signIn.signIn__father}>
      <div className={signIn.signIn__form}>
        <form onSubmit={handleSignInUser} className={signIn.form__email}>
          <h3>Sign Up</h3>
          <input
            required
            className={signIn.input__signIn}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
          />
          <input
            required
            className={signIn.input__signIn}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
          />
          <input
            required
            className={signIn.input__signIn}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Repeat password"
            type="password"
          />
          <button className={signIn.btn__signIn}>Sign Up</button>
          {error && (
            <span>
              Email or password error, password must be at least 6 digits long
            </span>
          )}
        </form>
      </div>
    </div>
  );
};

export default SignInEmail;
