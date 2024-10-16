import { useContext, useEffect, useState } from 'react';
import { Edit2, Trash2 } from 'lucide-react';
import UpdateModal from './UpdateModal'; 
import { CartContext } from '../../contexts/CartContext';

const OrdersManagement = () => {
    const [orders, setOrders] = useState([]); // Change initial state to an empty array
    const [selectedOrder, setSelectedOrder] = useState(null); 
    const [isModalOpen, setIsModalOpen] = useState(false); 
    const { fetchAllOrders } = useContext(CartContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchAllOrders();
                console.log("Fetched data:", data); 
                setOrders(data); 
            } catch (error) {
                console.error("Error fetching orders:", error); 
            }
        };
        fetchData();
    }, []);

    const openModal = (order) => {
        setSelectedOrder(order);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedOrder(null);
    };

    const handleOrderUpdate = (updatedOrder) => {
        setOrders((prevOrders) =>
            prevOrders.map((order) => (order.id === updatedOrder.id ? updatedOrder : order))
        );
        closeModal(); 
    };

    const handleDeleteOrder = (id) => {
        setOrders(orders.filter(order => order.id !== id));
    };

    const orderFields = [
        { name: 'customerName', label: 'Customer Name', type: 'text' },
        { name: 'totalAmount', label: 'Total Amount', type: 'text' },
        { name: 'status', label: 'Status', type: 'select', options: ['Pending', 'Completed'] }, 
    ];

    return (
        <div className="ml-64 p-4">
            <h1 className="text-xl font-bold mb-4">Orders Management</h1>

            <table className="min-w-full border-collapse border border-gray-200">
                <thead>
                    <tr>
                        <th className="border border-gray-200 p-2">ID</th>
                        <th className="border border-gray-200 p-2">Customer Name</th>
                        <th className="border border-gray-200 p-2">Total Amount</th>
                        <th className="border border-gray-200 p-2">Status</th>
                        <th className="border border-gray-200 p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.orderId}>
                            <td className="border border-gray-200 p-2">{order.orderId}</td>
                            <td className="border border-gray-200 p-2">{order.userName}</td>
                            <td className="border border-gray-200 p-2">{order.totalAmount}</td>
                            <td className="border border-gray-200 p-2">{order.orderStatus}</td>
                            <td className="border border-gray-200 p-2">
                                <button onClick={() => openModal(order)} className="mr-2">
                                    <Edit2 className="inline" />
                                </button>
                                <button onClick={() => handleDeleteOrder(order.id)} className="ml-2">
                                    <Trash2 className="inline text-red-500" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isModalOpen && (
                <UpdateModal
                    isOpen={isModalOpen}
                    closeModal={closeModal}
                    fields={orderFields} 
                    initialData={selectedOrder}
                    onSubmit={handleOrderUpdate}
                />
            )}
        </div>
    );
};

export default OrdersManagement;
