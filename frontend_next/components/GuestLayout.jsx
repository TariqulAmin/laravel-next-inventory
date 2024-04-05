import UserContext from "../context/UserContext";
import { useContext } from "react";
import { useRouter } from "next/router";

function GuestLayout({ children }) {
    const { token } = useContext(UserContext);
    const router = useRouter();

    if (token) {
        router.push("/");
    }
    return <div id="guestLayout">{children}</div>;
}

export default GuestLayout;
