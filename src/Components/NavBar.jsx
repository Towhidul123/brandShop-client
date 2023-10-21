import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import ThemeToggle from "./ThemeToggle";





const NavBar = ({ toggleTheme }) => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () =>
        logOut()
            .then(() => console.log("User logged out"))
            .catch(error => console.log(error))


    const links = <>
        <li><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-600 underline" : ""
        } to='/'>Home</NavLink></li>


        {user &&
            <>
                <li><NavLink className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                } to='/addProduct'>Add Product</NavLink></li>

                <li><NavLink className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                } to='/cart'>My Cart</NavLink></li>




            </>
        }


    </>

    return (
        <div>


            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <div className="flex flex-col md:flex-row ">
                        <img src="https://i.ibb.co/hVTyJh0/images.png" alt="logo-ct" className="w-10" />
                        <h2 className="font-cust font-bold text-xl">GrabCar </h2>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>

             
                  <button className="btn" onClick={toggleTheme}> Dark/light  </button>
                    


             

                <div className="navbar-end">
                    {
                        user ? <>

                            <div className="px-2 flex flex-col items-center">
                                <img
                                    className="relative mr-4 inline-block h-6 w-6 rounded-md object-cover object-center"
                                    alt="Image placeholder"
                                    src={user.photoURL}
                                />
                                <h2>{user.displayName}</h2>
                            </div>
                            <button className="btn" onClick={handleLogOut}>Sign Out</button>
                        </>
                            :
                            <NavLink className="btn" to='/register'>Sign Up</NavLink>
                    }


                </div>


            </div>
        </div>
    );
};

export default NavBar;