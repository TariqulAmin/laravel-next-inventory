import { BrowserRouter, Routes, Route } from "react-router-dom";
import GuestLayout from "./components/GuestLayout";
import DefaultLayout from "./components/DefaultLayout";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import DashboardPage from "./pages/DashboardPage";
import InventoryListPage from "./pages/InventoryListPage";
import InventoryForm from "./pages/InventoryFrom";
import ItemListPage from "./pages/ItemListPage";
import ItemForm from "./pages/ItemForm";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<GuestLayout />}>
                    <Route path="login" element={<LoginPage />} />
                    <Route path="signup" element={<SignupPage />} />
                </Route>
                <Route path="/" element={<DefaultLayout />}>
                    <Route index element={<DashboardPage />} />
                </Route>
                <Route path="/inventories" element={<DefaultLayout />}>
                    <Route index element={<InventoryListPage />} />
                    <Route path="create" element={<InventoryForm />} />
                    <Route path="edit/:id" element={<InventoryForm />} />
                </Route>
                <Route path="/items" element={<DefaultLayout />}>
                    <Route index element={<ItemListPage />} />
                    <Route path="create" element={<ItemForm />} />
                    <Route path="edit/:id" element={<ItemForm />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
