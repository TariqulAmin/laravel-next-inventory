import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axiosClient from "../axios-client";
import UserContext from "../context/UserContext";

function LoginPage() {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [message, setMessage] = useState(null);

    const { setUser, setToken } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = {
            email: email,
            password: password,
        };
        axiosClient
            .post("/login", payload)
            .then(({ data }) => {
                setUser(data.data.user);
                setToken(data.data.token);
            })
            .catch((err) => {
                const response = err.response;
                if (response) {
                    setMessage(response.data.data);
                }
            });
    };

    return (
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={handleSubmit}>
                    <h1 className="title">Login into your account</h1>

                    {message && (
                        <div className="alert">
                            {Object.keys(message).map((key) => (
                                <p key={key}>{message[key][0]}</p>
                            ))}
                        </div>
                    )}

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
                    <button className="btn btn-block">Login</button>
                    <p className="message">
                        Not registered?{" "}
                        <Link to="/signup">Create an account</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
