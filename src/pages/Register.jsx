import { useState } from "react";
import { useNavigate } from "react-router";
import InputGroup from "../compenents/InputGroup";

export default function Register() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        username: "",
        password: "",
        confirmPassword: ""
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const inputs = [
        { name: "name", label: "Name", icon: "person", type: "text" },
        { name: "email", label: "Email", icon: "envelope", type: "text" },
        { name: "username", label: "Username", icon: "person-badge", type: "text" },
        { name: "password", label: "Password", icon: "lock", type: "password" },
        { name: "confirmPassword", label: "Confirm Password", icon: "shield-lock", type: "password" }
    ];

    const validate = () => {
        const errs = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@*%$#])[A-Za-z\d@*%$#]{8,}$/;
        const usernameRegex = /^\S+$/;

        if (!form.name.trim()) errs.name = "Name is required.";
        if (!form.email.trim()) errs.email = "Email is required.";
        else if (!emailRegex.test(form.email)) errs.email = "Invalid email format.";

        if (!form.username.trim()) errs.username = "Username is required.";
        else if (!usernameRegex.test(form.username)) errs.username = "Username must not contain spaces.";

        if (!form.password) errs.password = "Password is required.";
        else if (!passwordRegex.test(form.password)) {
            errs.password = "Password must be at least 8 characters, include uppercase, lowercase, a number, and a special character (*@%$#)";
        }

        if (!form.confirmPassword) errs.confirmPassword = "Confirm Password is required.";
        else if (form.confirmPassword !== form.password) {
            errs.confirmPassword = "Passwords do not match.";
        }

        return errs;
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
        } else {
            alert(JSON.stringify(form, null, 2));
            navigate("/");
        }
    };

    return (
        <>
            <h2>Register</h2>
            <form className="container-fluid" noValidate onSubmit={handleSubmit}>
                {inputs.map((input) => (
                    <InputGroup
                        key={input.name}
                        input={input}
                        form={form}
                        errors={errors}
                        handleChange={handleChange}
                    />
                ))}
                <button type="submit" className="btn btn-primary mt-3">
                    Register
                </button>
            </form>
        </>
    );
}
