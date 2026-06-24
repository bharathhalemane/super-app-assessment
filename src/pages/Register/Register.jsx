import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store/useStore";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import style from "./Register.module.css"

const Register = () => {

  return (<>
    <div className={style.registration}>
      <div className={style.imageSection}>
        <h1>Discover new things on Superapp</h1>
      </div>
      <div className={style.registrationSection}>
        <RegistrationForm />
      </div>
    </div>
  </>
  );
};

export default Register;