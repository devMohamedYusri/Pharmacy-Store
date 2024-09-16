import {
    Pill,
    Search,
    Store,
    UserRound,
    ShoppingBag,
    Menu,
} from "lucide-react";

function NavBar({ logo }) {
    return (
        <nav className="flex items-end px-10 py-3 justify-between">
            <img src={logo} alt="logo" className="w-1/12 h-auto " />
            <div className="flex items-end gap-2 ml-5">
                <a
                    href="#"
                    className="flex gap-2 text-lg font-semibold capitalize w-[100px] items-end"
                >
                    <Menu /> menu
                </a>
                <a
                    href="#"
                    className="flex gap-2 text-lg font-semibold capitalize w-[300px] items-end"
                >
                    <Pill /> Pharmacy Prescriptions
                </a>
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
                <div className="flex flex-col items-center">
                    <Store />
                    <span>Store Finder</span>
                </div>
                <div className="flex flex-col items-center">
                    <UserRound />
                    <span>Account</span>
                </div>
                <div className="flex flex-col items-center">
                    <ShoppingBag />
                    <span>My Bag</span>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
