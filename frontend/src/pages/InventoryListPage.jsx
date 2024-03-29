import { useEffect, useState, useContext } from "react";
import axiosClient from "../axios-client.js";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";

function InventoryListPage() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const { setNotification } = useContext(UserContext);

    useEffect(() => {
        getInventories();
    }, []);

    const getInventories = () => {
        setLoading(true);
        axiosClient
            .get("/inventories")
            .then(({ data }) => {
                setLoading(false);
                setUsers(data.data);
            })
            .catch(() => {
                setLoading(false);
            });
    };

    const onDeleteClick = (inventory) => {
        if (
            !window.confirm("Are you sure you want to delete this inventory?")
        ) {
            return;
        }
        axiosClient.delete(`/inventories/${inventory.id}`).then(() => {
            setNotification("Inventory was successfully deleted");
            getInventories();
        });
    };

    return (
        <div>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <h1>Inventories</h1>
                <Link className="btn-add" to="/inventories/create">
                    Add new
                </Link>
            </div>
            <div className="card animated fadeInDown">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Create Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {loading && (
                        <tbody>
                            <tr>
                                <td colSpan="5" className="text-center">
                                    Loading...
                                </td>
                            </tr>
                        </tbody>
                    )}
                    {!loading && (
                        <tbody>
                            {users.map((u) => (
                                <tr key={u.id}>
                                    <td>{u.id}</td>
                                    <td>{u.name}</td>
                                    <td>{u.description}</td>
                                    <td>{u.created_at}</td>
                                    <td>
                                        <Link
                                            className="btn-edit"
                                            to={"/inventories/edit/" + u.id}
                                        >
                                            Edit
                                        </Link>
                                        &nbsp;
                                        <button
                                            className="btn-delete"
                                            onClick={(ev) => onDeleteClick(u)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    )}
                </table>
            </div>
        </div>
    );
}

export default InventoryListPage;
