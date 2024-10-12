import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [categories, setCategories] = useState(null);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://pharmacy1.runasp.net/api/Category/GetAll');
        if (!response.ok) {
          throw new Error('Failed to fetch categories');
        }
        const data = await response.json();
        setCategories(data);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className={`fixed z-50 top-0 left-0 h-full bg-blue-100 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-64`}>
      <button className="p-4 pl-56 w-fit self-start" onClick={toggleSidebar}><X /></button>
      <div className="flex flex-col justify-between">
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Categories</h2>
          <ul>
            {categories && Array.isArray(categories) && categories.length > 0 ? (
              categories.slice(1, 10).map((category) => (
                <Link key={category.categoryId} to={`/shop`}>
                  <li className="py-3 px-4 text-white hover:bg-blue-100 hover:text-black bg-blue-500 shadow-md my-1">{category.categoryName}</li>
                </Link>
              ))
            ) : (
              <li className="border-spacing-1 border-gray-800 pb-4 px-4">No categories available</li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;