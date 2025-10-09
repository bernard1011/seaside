import Navbar from "../components/Navbar"
import { Outlet } from "react-router";

const Mainlayout = () => {
    return <>
            <Navbar/>
            <Outlet/>
    </>
};

export default Mainlayout