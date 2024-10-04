import { useState } from 'react';
import logo from "../assets/dalida.jpg";
import Footer from './Footer';
import NavBar from './NavBar';
// Sample order data (you can replace this with your actual data)
const sampleOrders = [
    { id: 1, name: 'Product 1', quantity: 2, price: 20 },
    { id: 2, name: 'Product 2', quantity: 1, price: 50 },
    { id: 3, name: 'Product 3', quantity: 3, price: 15 },
];

const Cart = () => {
    const [orders, setOrders] = useState(sampleOrders);
    const [selectedOrder, setSelectedOrder] = useState(null);

    const removeOrder = (orderId) => {
        setOrders(orders.filter(order => order.id !== orderId));
    };

    const viewOrderDetails = (order) => {
        setSelectedOrder(order);
    };

    const closeDetails = () => {
        setSelectedOrder(null);
    };

    return (
        <>
            <NavBar logo={logo} />
        <div className="max-w-3xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Review Orders</h1>
            {orders.length === 0 ? (
                <p className="text-gray-500">Your cart is empty.</p>
            ) : (
                <ul className="space-y-4">
                    {orders.map(order => (
                        <li key={order.id} className="border rounded-md p-4 flex justify-between items-center">
                            <div>
                                <h2 className="text-lg font-semibold">{order.name}</h2>
                                <p>Quantity: {order.quantity}</p>
                                <p>Price: ${order.price * order.quantity}</p>
                            </div>
                            <div className="flex space-x-2">
                                <button 
                                    onClick={() => viewOrderDetails(order)} 
                                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                >
                                    View Details
                                </button>
                                <button 
                                    onClick={() => removeOrder(order.id)} 
                                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                                >
                                    Remove
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}

            {selectedOrder && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-6 max-w-sm w-full">
                        <h2 className="text-xl font-bold mb-4">Order Details</h2>
                        <p><strong>Product:</strong> {selectedOrder.name}</p>
                        <p><strong>Quantity:</strong> {selectedOrder.quantity}</p>
                        <p><strong>Price:</strong> ${selectedOrder.price * selectedOrder.quantity}</p>
                        <button 
                            onClick={closeDetails} 
                            className="mt-4 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    <Footer />
    </>
    );
};

export default Cart;