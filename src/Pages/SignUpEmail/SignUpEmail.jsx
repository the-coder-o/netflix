import { auth } from "./firebase";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";

import register from "../../Styles/SignUpEmail/signUpEmail.module.css";

const SignUpEmail = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignInUser = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigate("/home");
      })
      .catch((error) => {
        setError(error);
      });
  };

  return (
    <div className={register.register__father}>
      <div className={register.register__form}>
        <form onSubmit={handleSignInUser} className={register.form__email}>
          <h3>Sign Up</h3>
          <input
            required
            className={register.input__register}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
          />
          <input
            required
            className={register.input__register}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
          />
          <input
            required
            className={register.input__register}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Repeat password"
            type="password"
          />
          <button className={register.btn__register}>Sign Up</button>
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

export default SignUpEmail;
