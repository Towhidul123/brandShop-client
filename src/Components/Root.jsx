import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";


const Root = () => {
    return (
        <div className="container mx-auto m-0 p-0">
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;