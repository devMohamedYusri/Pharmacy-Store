import secureLocalStorage from 'react-secure-storage';
import image from '../assets/cash-icon.png';
import { useEffect } from 'react';
function Comment({PText}) {
    const [Comments,setComments]=useState([]);
    
    // const rating=5;
    const userData = secureLocalStorage.getItem('user');
    
    const userName = userData && JSON.parse(userData).email ? 
        JSON.parse(userData).email.slice(0, 5) : 'Guest';
    return (
        <div className="border-b border-gray-300 py-3 shadow-md p-2 pt-4">
            <div className='flex items-center'>
                <img src={image} alt="image" className="w-10 h-10 rounded-full"/>
                <h3 className="font-semibold capitalize pl-2">{userName}</h3>

            </div>
            <p className="text-gray-400 font-semibold ml-5">{PText}</p>
            {/* <p className="text-sm text-gray-500">Rating: {rating} / 5</p> */}
        </div>
    )
}

export default Comment
