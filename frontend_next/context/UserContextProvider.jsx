import { useState, useEffect } from "react";
import UserContext from "./UserContext";

// eslint-disable-next-line react/prop-types
function UserContextProvider({ children }) {
    const [user, setUser] = useState({});
    const [token, _setToken] = useState(null);
    const [notification, _setNotification] = useState("");

    useEffect(() => {
        _setToken(localStorage.getItem("ACCESS_TOKEN"));
    }, []);

    const setToken = (token) => {
        _setToken(token);
        if (token) {
            localStorage.setItem("ACCESS_TOKEN", token);
        } else {
            localStorage.removeItem("ACCESS_TOKEN");
        }
    };
    const setNotification = (message) => {
        _setNotification(message);

        setTimeout(() => {
            _setNotification("");
        }, 5000);
    };
    return (
        <UserContext.Provider
            value={{
                user,
                setUser,
                token,
                setToken,
                notification,
                setNotification,
            }}
        >
            {children}
        </UserContext.Provider>
    );
}

export default UserContextProvider;
