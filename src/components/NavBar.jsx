import { Pill, Search, UserRound, ShoppingBag, Menu, LogOut } from "lucide-react";
import { Link, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import { useEffect, useState } from "react";
import secureLocalStorage from 'react-secure-storage';
import Button from "../design/Button";
import Loader from "./Loader";
import { useAuth } from '../contexts/AuthContext'
import { CartContext } from '../contexts/CartContext';
import { useContext } from "react";

function NavBar({ logo }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isLogged, setIsLogged] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [DropOpen, setDropDown] = useState(false);
    const [loading, setLoading] = useState(false);
    const { isAuth } = useAuth();
    const { fetchCartItems } = useContext(CartContext);
    const [CartData, setCartData] = useState(null);
    const [focus, setFocus] = useState(false);
    const [search, setSearch] = useState(null);
    const handleLogout = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 200);
        secureLocalStorage.removeItem('user');
        localStorage.removeItem('token');
        toggleDropdown();
        window.location.reload();
    };

    const toggleDropdown = () => {
        setDropDown(!DropOpen);
    };

    const toggleCart = async () => {
        const id = JSON.parse(secureLocalStorage.getItem('user')).userId;
        const data = await fetchCartItems(id);
        setCartData(data);
        setIsOpen(!isOpen);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsLogged(true);
        } else {
            setIsLogged(false);
        }
    }, []);

    const userName = () => {
        if (isLogged) {
            try {
                return JSON.parse(secureLocalStorage.getItem('user')).firstName;
            } catch (error) {
                console.log("Cannot JSON parse the user data", error);
                return 'Guest';
            }
        }
        return 'Guest';
    };

    const SearchBar = async (content) => {
        console.log(content, 'from search ')
        if (content) {
            const fetchProducts = async () => {
                try {
                    const response = await fetch(`https://pharmacy1.runasp.net/api/Product/getbyname?s=${content}`);
                    const data = await response.json();
                    setSearch(data.slice(1,17));
                    console.log(data);
                } catch (error) {
                    console.log("error is ", error)
                }
            };
            fetchProducts();
            setFocus(true);
        } else {
            setFocus(false);
        }
    };


    const changed = (e) => {
        SearchBar(e.target.value);
    }
    return (
        <>
            {loading ? <Loader visible={loading} /> : <>
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

                    <div className="flex items-center bg-gray-100 rounded-sm h-12 mx-4 w-full relative">
                        <Search className="text-gray-500 w-6 h-auto mx-2" />
                        <input
                            type="text"
                            placeholder="Search everything"
                            className="border-none outline-none w-full text-gray-500 bg-gray-100 p-2"
                            onChange={changed}
                        />
                        {search && focus && (
                            <div className="absolute top-full left-0 w-full bg-blue-400 shadow-lg mt-2 z-50">
                                {search.map((item) => (
                                    <Link key={item.productId} to={`/product/details/${item.productId}`} className="p-2 text-white hover:bg-blue-100 hover:text-black bg-blue-500 w-full block">
                                        {item.productName}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="flex items-center gap-4 w-2/5 h-full justify-end">
                        <div >
                            <Link to={isLogged ? "" : "/login"} onClick={toggleDropdown} className="flex flex-col items-center">
                                <UserRound />
                                <span>
                                    {userName()}
                                </span>
                            </Link>
                            {DropOpen && isLogged && (
                                <div className="absolute right-0 z-10 w-64 mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
                                    <ul className="py-1">
                                        <button onClick={handleLogout} className="flex items-center w-full px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                                            <LogOut className="mr-2" />
                                            Logout
                                        </button>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div>
                            <button className="flex flex-col items-center" onClick={toggleCart} >
                                <ShoppingBag />
                                <span>My Bag</span>
                            </button>
                            {isOpen && (
                                <div className="absolute right-0 z-10 w-64 mt-2 bg-white border border-gray-300 rounded-md shadow-lg">
                                    <ul className="py-1">
                                        {CartData && Array.isArray(CartData) && CartData.length > 0 ? (
                                            CartData.map(item => (
                                                <li key={item.orderId} className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer">
                                                    {item.productName} {/* Ensure this matches the data structure */}
                                                </li>
                                            ))
                                        ) : (
                                            <span>not found</span>
                                        )}
                                    </ul>
                                    <Link to="/cart">
                                        <Button text="show Cart" className={"mt-3 px-10 py-2 w-full bg-blue-600 hover:bg-blue-200"} type="button" />
                                    </Link>
                                </div>
                            )}
                        </div>
                    </div>
                </nav>
                {isAuth ? <div className="w-full h-10">
                    <Link to="/dashboard">
                        <Button text="go to Dashboard" className={"mt-3 px-10 py-2 w-full bg-blue-600 hover:bg-blue-200"} type="button" />
                    </Link>
                </div> : <></>}
                <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
            </>}</>

    );
}
export default NavBar;
