import { Link, Navigate, Outlet } from "react-router-dom";
import UserContext from "../context/UserContext";
import { useContext, useEffect } from "react";
import axiosClient from "../axios-client.js";

function DefaultLayout() {
    const { user, token, setUser, setToken, notification } =
        useContext(UserContext);

    useEffect(() => {
        axiosClient.get("/user").then(({ data }) => {
            setUser(data);
        });
    }, []);

    if (!token) {
        return <Navigate to="/login" />;
    }
    const handleLogout = () => {
        setUser({});
        setToken(null);
    };
    return (
        <div id="defaultLayout">
            <aside>
                <Link to="/">Dashboard</Link>
                <Link to="/inventories">Inventory</Link>
                <Link to="/items">Item</Link>
            </aside>
            <div className="content">
                <header>
                    <div>Header</div>
                    <div>
                        {user.name} &nbsp; &nbsp;
                        <a
                            onClick={handleLogout}
                            className="btn-logout"
                            href="#"
                        >
                            Logout
                        </a>
                    </div>
                </header>
                <main>
                    <Outlet />
                </main>
                {notification && (
                    <div className="notification">{notification}</div>
                )}
            </div>
        </div>
    );
}

export default DefaultLayout;
