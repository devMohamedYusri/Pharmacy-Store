import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCategories } from '../contexts/CategoryContext';
import { useEffect, useState } from 'react';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const categories = useCategories();
  // console.log("Sidebar received:", categories);
  
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (categories === undefined) {
      setIsLoading(true); 
    } else if (Array.isArray(categories)) {
      if (categories.length > 0) {
        setIsLoading(false); 
      } else {
        setIsLoading(false);
      }
    } else {
      setError("Unexpected data format.");
      setIsLoading(false);
    }
  }, [categories]); 

  return (
    <div className={`fixed z-50 top-0 left-0 h-full bg-gray-100 transition-transform transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-64`}>
      <button className="p-4 pl-56 w-fit self-start" onClick={toggleSidebar}><X /></button>
      <ul>
        {isLoading ? (
          <li className="border-spacing-1 border-gray-800 pb-4 px-4">Loading...</li>
        ) : error ? (
          <li className="border-spacing-1 border-gray-800 pb-4 px-4">{error}</li>
        ) : (
          categories.length > 0 ? ( 
            categories.map((category) => (
              <Link key={category.categoryId} to="/shop">
                <li className="border-spacing-1 border-gray-800 pb-4 px-4">{category.name}</li>
              </Link>
            ))
          ) : (
            <li className="border-spacing-1 border-gray-800 pb-4 px-4">No categories available</li> // Handle empty categories
          )
        )}
      </ul>
    </div>
  );
};

export default Sidebar;