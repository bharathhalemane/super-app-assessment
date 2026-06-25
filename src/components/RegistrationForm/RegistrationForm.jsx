import styles from "./RegistrationForm.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "../../store/useStore";


const RegistrationForm = () => {
    const setUser = useStore((state) => state.setUser)
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        username: "",
        email: "",
        mobile: ""
    });

    const [errors, setErrors] = useState({})
    const [isChecked, setIsChecked] = useState(false)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

        setErrors({
            ...errors,
            [e.target.name]: ""
        })
    };

    const handleChecked = (e) => {
        setIsChecked(!isChecked)
        setErrors({
            ...errors,
            checkbox: ""
        })
    }

    const validateForm = () => {
        const tempErrors = {}
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        const phonePatter = /^\d{10}$/

        if (!formData.name.trim()) {
            tempErrors.name = "Name field cannot be left blank."
        }

        if (!formData.username.trim()) {
            tempErrors.username = "Username field cannot be left blank."
        }

        if (!emailPattern.test(formData.email)) {
            tempErrors.email = "Please enter a valid email:"
        }

        if (!phonePatter.test(formData.mobile)) {
            tempErrors.mobile = "Mobile number must contain exactly 10 digits."
        }

        if (!isChecked) {
            tempErrors.checkbox = "Check this box if you want to proceed"
        }

        setErrors(tempErrors)
        return Object.keys(tempErrors).length === 0
    }

    const handleFormSubmission = (e) => {
        e.preventDefault()

        if (validateForm()) {
            setUser(formData)
            navigate("/categories")
        }
    }

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleFormSubmission}>

                <div className={styles.header}>
                    <h1 className={styles.title}>Super app</h1>
                    <h3 className={styles.subtitle}>
                        Create your new account
                    </h3>
                </div>

                <div className={styles.inputGroup}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        className={styles.input}
                    />
                    {
                        errors.name && (
                            <span className={styles.error}>{errors.name}</span>
                        )
                    }
                </div>
                <div className={styles.inputGroup}>
                    <input
                        type="text"
                        name="username"
                        placeholder="UserName"
                        value={formData.username}
                        onChange={handleChange}
                        className={styles.input}
                    />
                    {
                        errors.username && (
                            <span className={styles.error}>{errors.username}</span>
                        )
                    }
                </div>
                <div className={styles.inputGroup}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className={styles.input}
                    />
                    {
                        errors.email && (
                            <span className={styles.error}>{errors.email}</span>
                        )
                    }
                </div>
                <div className={styles.inputGroup}>
                    <input
                        type="tel"
                        name="mobile"
                        placeholder="Mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        className={styles.input}
                    />
                    {
                        errors.mobile && (
                            <span className={styles.error}>{errors.mobile}</span>
                        )
                    }
                </div>

                <div className={styles.checkboxContainer}>
                    <input type="checkbox" id="checkbox" checked={isChecked} onChange={handleChecked} />
                    <label htmlFor="checkbox">
                        Share my registration data with Superapp
                    </label>
                </div>
                {
                    errors.checkbox && (
                        <span className={styles.error}>{errors.checkbox}</span>
                    )
                }

                <button type="submit" className={styles.button}>
                    SIGN UP
                </button>

                <p className={styles.text}>
                    By clicking on Sign up, you agree to Superapp{" "}
                    <a href="/">Terms and Conditions of Use</a>
                </p>

                <p className={styles.text}>
                    To learn more about how Superapp collects, uses, shares and
                    protects your personal data please head Superapp{" "}
                    <a href="/">Privacy Policy</a>
                </p>

            </form>
        </div>
    );
};

export default RegistrationForm;