import { useEffect, useState, useContext } from "react";
import axiosClient from "../axios-client.js";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";

function ItemListPage() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);
    const { setNotification } = useContext(UserContext);

    useEffect(() => {
        getItems();
    }, []);

    const getItems = () => {
        setLoading(true);
        axiosClient
            .get("/items")
            .then(({ data }) => {
                setLoading(false);
                setItems(data.data);
            })
            .catch(() => {
                setLoading(false);
            });
    };

    const onDeleteClick = (inventory) => {
        if (!window.confirm("Are you sure you want to delete this item?")) {
            return;
        }
        axiosClient.delete(`/items/${inventory.id}`).then(() => {
            setNotification("Item was successfully deleted");
            getItems();
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
                <h1>Items</h1>
                <Link className="btn-add" to="/items/create">
                    Add new
                </Link>
            </div>
            <div className="card animated fadeInDown">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            {/* <th>Inventory Name</th> */}
                            <th>Name</th>
                            <th>Description</th>
                            <th>Image</th>
                            <th>Queantity</th>
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
                            {items.map((u) => (
                                <tr key={u.id}>
                                    <td>{u.id}</td>
                                    {/* <td>{u.inventory_id}</td> */}
                                    <td>{u.name}</td>
                                    <td>{u.description}</td>
                                    <td>
                                        {u.image ? (
                                            <img
                                                src={`http://localhost:8000/item/${u.image}`}
                                                width={"50px"}
                                                height={"50px"}
                                            />
                                        ) : null}
                                    </td>
                                    <td>{u.quantity}</td>
                                    <td>
                                        <Link
                                            className="btn-edit"
                                            to={"/items/edit/" + u.id}
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

export default ItemListPage;
