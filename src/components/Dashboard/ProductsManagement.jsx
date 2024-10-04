import { useState } from 'react';
import { Edit2, Trash2, PlusCircle } from 'lucide-react';

const initialProducts = [
    { id: 1, name: 'Product A', price: '$10' },
    { id: 2, name: 'Product B', price: '$20' },
];

const ViewProducts = () => {
    const [products, setProducts] = useState(initialProducts);
    const [newProductName, setNewProductName] = useState('');
    const [newProductPrice, setNewProductPrice] = useState('');

    const handleAddProduct = () => {
        const newProduct = {
            id: products.length + 1,
            name: newProductName,
            price: newProductPrice,
        };
        setProducts([...products, newProduct]);
        setNewProductName('');
        setNewProductPrice('');
    };

    const handleDeleteProduct = (id) => {
        setProducts(products.filter(product => product.id !== id));
    };

    return (
        <div className="ml-64 p-4">
            <h1 className="text-xl font-bold mb-4">Product Management</h1>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Product Name"
                    value={newProductName}
                    onChange={(e) => setNewProductName(e.target.value)}
                    className="border p-2 mr-2"
                />
                <input
                    type="text"
                    placeholder="Price"
                    value={newProductPrice}
                    onChange={(e) => setNewProductPrice(e.target.value)}
                    className="border p-2 mr-2"
                />
                <button onClick={handleAddProduct} className="bg-blue-500 text-white p-2">
                    <PlusCircle className="inline mr-1" /> Add Product
                </button>
            </div>
            <table className="min-w-full border-collapse border border-gray-200">
                <thead>
                    <tr>
                        <th className="border border-gray-200 p-2">ID</th>
                        <th className="border border-gray-200 p-2">Name</th>
                        <th className="border border-gray-200 p-2">Price</th>
                        <th className="border border-gray-200 p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td className="border border-gray-200 p-2">{product.id}</td>
                            <td className="border border-gray-200 p-2">{product.name}</td>
                            <td className="border border-gray-200 p-2">{product.price}</td>
                            <td className="border border-gray-200 p-2">
                                <button onClick={() => console.log('Edit', product.id)}>
                                    <Edit2 className="inline" />
                                </button>
                                <button onClick={() => handleDeleteProduct(product.id)} className="ml-2">
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

export default ViewProducts;