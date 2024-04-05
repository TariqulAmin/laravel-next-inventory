import { useState, useContext } from "react";
import Link from "next/link";
import axiosClient from "../axios-client";
import UserContext from "../context/UserContext";
import GuestLayout from "../components/GuestLayout";

function Signup() {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [confirmPassword, setConfirmPassword] = useState(null);
    const [errors, setErrors] = useState(null);

    const { setUser, setToken } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = {
            name: name,
            email: email,
            password: password,
            password_confirmation: confirmPassword,
        };
        axiosClient
            .post("/signup", payload)
            .then(({ data }) => {
                setUser(data.data.user);
                setToken(data.data.token);
            })
            .catch((err) => {
                const response = err.response;
                if (response) {
                    setErrors(response.data.data);
                }
            });
    };

    return (
        <GuestLayout>
            <div className="login-signup-form animated fadeInDown">
                <div className="form" onSubmit={handleSubmit}>
                    <form>
                        <h1 className="title">Signup for Free</h1>
                        {errors && (
                            <div className="alert">
                                {Object.keys(errors).map((key) => (
                                    <p key={key}>{errors[key][0]}</p>
                                ))}
                            </div>
                        )}
                        <input
                            type="text"
                            placeholder="Full Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Repeat Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <button className="btn btn-block">Signup</button>
                        <p className="message">
                            Already registered? <Link href="/login">Sign In</Link>
                        </p>
                    </form>
                </div>
            </div>
        </GuestLayout>
    );
}

export default Signup;
