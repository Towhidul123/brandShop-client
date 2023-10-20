import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Banner from "./Banner";
import Footer from "./Footer";


const Root = () => {
    return (
        <div>

            <NavBar></NavBar>
         
            <div >
                <Outlet></Outlet>
            </div>

           

        </div>
    );
};

export default Root;