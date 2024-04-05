import { useEffect, useState, useContext } from "react";
import axiosClient from "../../axios-client.js";
import UserContext from "../../context/UserContext";
import DefaultLayout from "../../components/DefaultLayout"
import { useRouter } from "next/router";

function ItemForm() {
    const router = useRouter();
    const { id } = router.query
    const { setNotification } = useContext(UserContext);

    const [inventories, setInventories] = useState([]);
    const [oldImage, setOldImage] = useState([]);

    const [item, setItem] = useState({
        inventory_id: "",
        name: "",
        description: "",
        image: "",
        quantity: "",
    });
    const [errors, setErrors] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axiosClient
            .get("/inventories")
            .then(({ data }) => {
                setLoading(false);
                setInventories(data.data);
            })
            .catch(() => {
                setLoading(false);
            });
    }, []);


    useEffect(() => {
        if (id) {
            setLoading(true);
            axiosClient
                .get(`/items/${id}`)
                .then(({ data }) => {
                    setLoading(false);
                    setItem(data.data);
                    setOldImage(data.data.image);
                })
                .catch(() => {
                    setLoading(false);
                });
        }
    }, [id]);


    const onSubmit = (ev) => {
        ev.preventDefault();

        if (item.id) {
            const formData = new FormData();
            formData.append("_method", "put");
            formData.append("inventory_id", item.inventory_id);
            formData.append("name", item.name);
            formData.append("description", item.description);
            formData.append("image", item.image === null ? "" : item.image);
            formData.append("quantity", item.quantity);
            axiosClient
                .post(`/items/${item.id}`, formData)
                .then(() => {
                    setNotification("Item was successfully updated");
                    router.push("/items");
                })
                .catch((err) => {
                    const response = err.response;
                    if (response) {
                        setErrors(response.data.data);
                    }
                });
        } else {
            const formData = new FormData();
            formData.append("inventory_id", item.inventory_id);
            formData.append("name", item.name);
            formData.append("description", item.description);
            formData.append("image", item.image);
            formData.append("quantity", item.quantity);
            axiosClient
                .post("/items", formData)
                .then(() => {
                    setNotification("Item was successfully created");
                    router.push("/items");
                })
                .catch((err) => {
                    const response = err.response;
                    if (response) {
                        setErrors(response.data.data);
                    }
                });
        }
    };

    return (
        <>
            <DefaultLayout>
                {item.id && <h1>Update User: {item.name}</h1>}
                {!item.id && <h1>New Item</h1>}
                <div className="card animated fadeInDown">
                    {loading && <div className="text-center">Loading...</div>}
                    {errors && (
                        <div className="alert">
                            {Object.keys(errors).map((key) => (
                                <p key={key}>{errors[key][0]}</p>
                            ))}
                        </div>
                    )}
                    {!loading && (
                        <form onSubmit={onSubmit}>
                            <select
                                value={item.inventory_id}
                                onChange={(ev) =>
                                    setItem({
                                        ...item,
                                        inventory_id: ev.target.value,
                                    })
                                }
                            >
                                <option value="">Select Inventory</option>
                                {inventories.map((inventory) => (
                                    <option key={inventory.id} value={inventory.id}>
                                        {inventory.name}
                                    </option>
                                ))}
                            </select>
                            <input
                                value={item.name}
                                onChange={(ev) =>
                                    setItem({
                                        ...item,
                                        name: ev.target.value,
                                    })
                                }
                                placeholder="Name"
                            />
                            <textarea
                                cols="30"
                                rows="10"
                                value={item.description}
                                onChange={(ev) =>
                                    setItem({
                                        ...item,
                                        description: ev.target.value,
                                    })
                                }
                                placeholder="Description"
                            ></textarea>
                            <input
                                type="file"
                                name="image"
                                onChange={(ev) =>
                                    setItem({
                                        ...item,
                                        image: ev.target.files[0],
                                    })
                                }
                                accept="image/*"
                                className="form-control"
                            />
                            {item.id && oldImage ? (
                                <img
                                    src={`http://localhost:8000/item/${oldImage}`}
                                    width={"300px"}
                                    height={"300px"}
                                />
                            ) : null}
                            <input
                                type="number"
                                value={item.quantity}
                                onChange={(ev) =>
                                    setItem({
                                        ...item,
                                        quantity: ev.target.value,
                                    })
                                }
                                placeholder="Quantity"
                            />
                            <button className="btn">Save</button>
                        </form>
                    )}
                </div>
            </DefaultLayout>
        </>
    );
}

export default ItemForm;
