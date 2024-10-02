import {
    Pill,
    Search,
    Store,
    UserRound,
    ShoppingBag,
    Menu,
} from "lucide-react";
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useEffect, useState } from "react";
import secureLocalStorage from 'react-secure-storage';

function NavBar({ logo }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isLogged, setIsLogged] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const token = localStorage.getItem('token'); // Get token from local storage
        if (token) {
            setIsLogged(true); // Set isLogged to true if token exists
        } else {
            setIsLogged(false); // Set isLogged to false if no token
        }
    }, []); // Empty dependency array means this runs once on mount
    return (
        <>
            <nav className="flex items-end px-10 py-3 justify-between">
                <Link to="/" className="w-1/5 h-full"><img src={logo} alt="logo" className="w-full h-auto " /> </Link>
                <div className="flex items-end gap-2 ml-5">
                    <button
                        className="flex gap-2 text-lg font-semibold capitalize w-[100px] items-end"
                        onClick={toggleSidebar}
                    >
                        <Menu /> menu
                    </button>
                    <Link
                        to='/shop'
                        className="flex gap-2 text-lg font-semibold capitalize w-[300px] items-end"
                    >
                        <Pill /> Pharmacy Prescriptions
                    </Link>
                </div>

                <div className="flex items-center bg-gray-100 rounded-sm h-12 mx-4 w-full">
                    <Search className="text-gray-500 w-6 h-auto mx-2" />
                    <input
                        type="text"
                        placeholder="Search everything"
                        className="border-none outline-none w-full text-gray-500 bg-gray-100 p-2"
                    />
                </div>
                <div className="flex items-center gap-4 w-2/5 h-full justify-end">
                    <div >
                        <Link to="/store-finder" className="flex flex-col items-center">
                            <Store />
                            <span>Store Finder</span>
                        </Link>
                    </div>
                    <div >
                        <Link to={isLogged ? "" : "/login"} className="flex flex-col items-center">
                            <UserRound />
                            <span>
                                {isLogged
                                    ? JSON.parse(secureLocalStorage.getItem('user')).email.slice(0, 5) 
                                    : 'Guest'}
                            </span>
                        </Link>
                    </div>
                    <div>
                        <Link to="/my-bag" className="flex flex-col items-center">
                            <ShoppingBag />
                            <span>My Bag</span>
                        </Link>
                    </div>
                </div>
            </nav>

            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </>

    );
}
export default NavBar;
