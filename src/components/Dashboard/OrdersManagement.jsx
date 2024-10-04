import { useState } from 'react';
import { Edit2, Trash2, PlusCircle } from 'lucide-react';

const initialOrders = [
    { id: 1, customerName: 'John Doe', totalAmount: '$100', status: 'Pending' },
    { id: 2, customerName: 'Jane Smith', totalAmount: '$200', status: 'Completed' },
];

const OrdersManagement = () => {
    const [orders, setOrders] = useState(initialOrders);
    const [newCustomerName, setNewCustomerName] = useState('');
    const [newTotalAmount, setNewTotalAmount] = useState('');
    const [newStatus, setNewStatus] = useState('Pending');

    const handleAddOrder = () => {
        const newOrder = {
            id: orders.length + 1,
            customerName: newCustomerName,
            totalAmount: newTotalAmount,
            status: newStatus,
        };
        setOrders([...orders, newOrder]);
        setNewCustomerName('');
        setNewTotalAmount('');
        setNewStatus('Pending');
    };

    const handleDeleteOrder = (id) => {
        setOrders(orders.filter(order => order.id !== id));
    };

    return (
        <div className="ml-64 p-4">
            <h1 className="text-xl font-bold mb-4">Orders Management</h1>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Customer Name"
                    value={newCustomerName}
                    onChange={(e) => setNewCustomerName(e.target.value)}
                    className="border p-2 mr-2"
                />
                <input
                    type="text"
                    placeholder="Total Amount"
                    value={newTotalAmount}
                    onChange={(e) => setNewTotalAmount(e.target.value)}
                    className="border p-2 mr-2"
                />
                <select
                    value={newStatus}
                    onChange={(e) => setNewStatus(e.target.value)}
                    className="border p-2 mr-2"
                >
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                </select>
                <button onClick={handleAddOrder} className="bg-blue-500 text-white p-2">
                    <PlusCircle className="inline mr-1" /> Add Order
                </button>
            </div>
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
                        <tr key={order.id}>
                            <td className="border border-gray-200 p-2">{order.id}</td>
                            <td className="border border-gray-200 p-2">{order.customerName}</td>
                            <td className="border border-gray-200 p-2">{order.totalAmount}</td>
                            <td className="border border-gray-200 p-2">{order.status}</td>
                            <td className="border border-gray-200 p-2">
                                <button onClick={() => console.log('Edit', order.id)}>
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
        </div>
    );
};

export default OrdersManagement;