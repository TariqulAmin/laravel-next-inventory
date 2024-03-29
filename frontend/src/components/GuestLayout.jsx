import { Outlet } from "react-router-dom";
import UserContext from "../context/UserContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

function GuestLayout() {
    const { token } = useContext(UserContext);
    if (token) {
        return <Navigate to="/" />;
    }
    return (
        <div id="guestLayout">
            <Outlet />
        </div>
    );
}

export default GuestLayout;
