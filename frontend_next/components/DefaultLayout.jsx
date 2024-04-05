import UserContext from "../context/UserContext";
import { useContext, useEffect } from "react";
import axiosClient from "../axios-client.js";
import { useRouter } from "next/router";
import Link from "next/link";

function DefaultLayout({ children }) {
    const { user, token, setUser, setToken, notification } =
        useContext(UserContext);
    const router = useRouter();

    useEffect(() => {
        axiosClient.get("/user").then(({ data }) => {
            setUser(data);
        });
    }, []);

    useEffect(() => {
        if (!token) {
            router.push("/login");
        }
    }, [token]);

    const handleLogout = () => {
        setUser({});
        setToken(null);
    };
    return (
        <div id="defaultLayout">
            <aside>
                <Link href="/">Dashboard</Link>
                <Link href="/inventories">Inventory</Link>
                <Link href="/items">Item</Link>
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
                <main>{children}</main>
                {notification && (
                    <div className="notification">{notification}</div>
                )}
            </div>
        </div>
    );
}

export default DefaultLayout;
