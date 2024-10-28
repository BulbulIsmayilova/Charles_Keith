import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import HomeLayout from "../layout/HomeLayout";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Detail from "../pages/Detail";
import CreatAccount from "../pages/CreatAccount";
import Login from "../pages/Login";
import FindStore from "../pages/FindStore";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Notfound from "../pages/Notfound";
import Profile from "../pages/Profile";
import Wishlist from "../pages/Wishlist";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/us" element={<HomeLayout/>}>
                <Route path="/us" index element={<Home />} />
                <Route path="/us/products/:id" element={<Product/>} />
                <Route path="/us/detail/:id" element={<Detail/>}/>
                <Route path="/us/create-account" element={<CreatAccount/>}/>
                <Route path="/us/login" element={<Login/>}/>
                <Route path="/us/stores" element={<FindStore/>}/>
                <Route path="/us/cart" element={<Cart/>}/>
                <Route path="/us/check-out" element={<Checkout/>}/>
                <Route path="/us/notfound" element={<Notfound/>}/>
                <Route path="/us/profile" element={<Profile/>}/>
                <Route path="/us/wishlist" element={<Wishlist/>}/>
            </Route>
        </>
    )
)