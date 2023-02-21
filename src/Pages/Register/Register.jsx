import React from "react";
import Logo from "../../Assets/logo/logo.svg";
import Email from "../../Assets/logo/emails.png";
import Google from "../../Assets/logo/google.png";
import Facebook from "../../Assets/logo/facebook.png";
import register from "../../Styles/RegisterStyle/Register.module.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="container">
      <div className={register.navbar__register}>
        <div className={register.logo__icon}>
          <a href="#">
            <img className={register.logo} src={Logo} alt="logo" />
          </a>
        </div>
        <div className={register.father__registers}>
          <div className={register.google}>
            <img src={Google} width={150} />
            <h3 className={register.text}>Sign up with Google</h3>
          </div>
          <div className={register.google}>
            <img src={Facebook} width={150} />
            <h3 className={register.text}>Sign up with facebook</h3>
          </div>
          <Link
            to={"/sign-up-email-password-new-user"}
            className={register.google}
          >
            <img src={Email} width={150} />
            <h3 className={register.text}>Sign up with email</h3>
          </Link>
          <Link
            to={"/sign-in-email-password-user"}
            className={register.password}
          >
            <h1 className={register.text__two}>+</h1>
            <h3 className={register.text}>Sign in</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
