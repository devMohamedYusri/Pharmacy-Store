import { X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import { useCategories } from '../contexts/CategoryContext';
import Loader from './Loader';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      const fetchCategories = async () => {
          try {
              const response = await fetch('http://pharmacy1.runasp.net/api/Category/GetAll');
              if (!response.ok) {
                  throw new Error('Failed to fetch categories');
              }
              const data = await response.json();
              setCategories(data);
          } catch (err) {
              setError(err.message);
          } finally {
              if(!categories){
                  setIsLoading(false);
              }
          }
      };

      fetchCategories();
  }, []);
  // Do not render anything if still loading or if there's an error
  // if (isLoading) return <Loader visible={true} />;
  if (error) return <div className="border-spacing-1 border-gray-800 pb-4 px-4">{error}</div>;

  return (
    <div className={`fixed z-50 top-0 left-0 h-full bg-gray-100 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-64`}>
      <button className="p-4 pl-56 w-fit self-start" onClick={toggleSidebar}><X /></button>
      <ul>
        {categories ? (
          categories.slice(1, 10).map((category) => (
            <Link key={category.categoryId} to="/shop">
              <li className="border-spacing-1 border-gray-800 pb-4 px-4">{category.name}</li>
            </Link>
          ))
        ) : (
          <li className="border-spacing-1 border-gray-800 pb-4 px-4">No categories available</li>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;