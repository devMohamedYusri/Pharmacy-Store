import { useEffect, useState } from 'react';
import Comment from './Comment';
import Details from './Details';
import { useParams } from 'react-router-dom';


// Sample data for product details and comments
const sampleProduct = {
    id: 1,
    name: "Sample Product",
    description: "This is a detailed description of the sample product.",
    price: 29.99,
    shippingInfo: "Ships within 2-3 business days. Free shipping on orders over $50.",
    imageUrl: "https://via.placeholder.com/400",
};

const sampleComments = [
    { id: 1, userName: "Alice", text: "Great product! Highly recommend.", rating: 5 },
    { id: 2, userName: "Bob", text: "Decent quality for the price.", rating: 4 },
];

const ProductDetails = () => {
    const {id}=useParams();
    // State to manage new comment input
    const [newComment, setNewComment] = useState("");
    const [comments, setComments] = useState(sampleComments);
        useEffect(()=>{
        const response=fetch("http://pharmacy1.runasp.net/api/Product/id")
        .catch((err)=>{
            console.log("error ",err.message);
        })
        .finally(()=>{});
    },[])
    // Function to handle submitting a new comment
    const handleCommentSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission behavior

        // Create a new comment object
        const newCommentObj = {
            id: comments.length + 1, // Simple ID generation based on current length
            userName: "Guest", // Placeholder for username (could be replaced with actual user data)
            text: newComment,
            rating: 5, // Default rating; you can modify this to allow users to select a rating
        };

        // Update comments state with the new comment
        setComments([...comments, newCommentObj]);
        setNewComment(""); // Clear the input field after submission
    };

    return (
        <div className="container mx-auto p-5 w-[90%]">
            <Details
                imageUrl={sampleProduct.imageUrl}
                name={sampleProduct.name}
                desc={sampleProduct.description}
                shippingInfo={sampleProduct.shippingInfo} 
                />

            <div className="mt-10">
                <h2 className="text-xl font-semibold">Comments</h2>
                <form onSubmit={handleCommentSubmit} className="mt-4">
                    <textarea
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Leave a comment..."
                        rows="4"
                        className="w-full p-2 border border-gray-300 rounded-md"
                        required
                    />
                    <button type="submit" className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                        Submit Comment
                    </button>
                </form>

                <div className="mt-6">
                    {comments.map(comment => (
                        <Comment key={comment.id} PText={comment.text} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;

