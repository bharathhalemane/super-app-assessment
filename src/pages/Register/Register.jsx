import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store/useStore";
import RegistrationForm from "../../components/RegistrationForm/RegistrationForm";
import styles from "./Register.module.css"

const Register = () => {

  return (<>
    <div className={styles.registration}>
      <div className={styles.imageSection}>
        <h1>Discover new things on Superapp</h1>
      </div>
      <div className={styles.registrationSection}>
        <RegistrationForm />
      </div>
    </div>
  </>
  );
};

export default Register;