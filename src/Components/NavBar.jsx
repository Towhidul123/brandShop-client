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


        <button className="hover:bg-blue-gray-600 px-2 rounded-lg " onClick={toggleTheme}> Dark/light  </button>

        <li className="px-2"><NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-red-600 underline" : ""
        } to='/'>Home</NavLink></li>



        {user &&
            <>
                <li className="px-2"><NavLink className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                } to='/addProduct'>Add Product</NavLink></li>

                <li className="px-2"><NavLink className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-red-600 underline" : ""
                } to='/cart'>My Cart</NavLink></li>





            </>
        }


    </>

    return (
        <div className="bg-blue-gray-800">


            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[50] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <div className="flex flex-col md:flex-row ">
                        <div className=" flex justify-center">
                            <img src="https://i.ibb.co/zXC9bKs/logo.png" alt="logo-ct" className="w-12" />
                        </div>
                        <h2 className="font-cust font-semibold text-xs md:font-bold md:text-xl flex items-center justify-center">GrabCar </h2>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className=" menu-horizontal px-1">
                        {links}
                    </ul>
                </div>






                <div className="navbar-end">
                    {
                        user ? <>

                            <div className="px-2 flex flex-col md:flex-row items-center hover:bg-blue-gray-600  rounded-lg ">
                                <div className=" flex justify-center ">
                                    <img
                                        className="relative  inline-block h-6 w-6 rounded-md object-cover object-center "
                                        alt="Image placeholder"
                                        src={user.photoURL}
                                    />
                                </div>
                                <h2 className="">{user.displayName}</h2>
                            </div>
                            <button className="hover:bg-blue-gray-600 px-2 rounded-lg" onClick={handleLogOut}>Sign Out</button>
                        </>
                            :
                            <NavLink className="hover:bg-blue-gray-600 px-2 rounded-lg" to='/register'>Sign Up</NavLink>
                    }


                </div>


            </div>
        </div>
    );
};

export default NavBar;