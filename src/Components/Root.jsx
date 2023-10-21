import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Banner from "./Banner";
import Footer from "./Footer";


const Root = () => {

    const toggleTheme = () =>{
        document.documentElement.classList.toggle("dark")
    }


    return (
        <div className="bg-white dark:bg-gray-600">

            <NavBar toggleTheme={toggleTheme}></NavBar>
         
            <div >
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
           

        </div>
    );
};

export default Root;