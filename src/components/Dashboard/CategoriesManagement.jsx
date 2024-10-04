import { useState } from 'react';
import { Edit2, Trash2, PlusCircle } from 'lucide-react';

const initialCategories = [
    { id: 1, name: 'Electronics' },
    { id: 2, name: 'Clothing' },
];

const CategoriesManagement = () => {
    const [categories, setCategories] = useState(initialCategories);
    const [newCategoryName, setNewCategoryName] = useState('');

    const handleAddCategory = () => {
        const newCategory = {
            id: categories.length + 1,
            name: newCategoryName,
        };
        setCategories([...categories, newCategory]);
        setNewCategoryName('');
    };

    const handleDeleteCategory = (id) => {
        setCategories(categories.filter(category => category.id !== id));
    };

    return (
        <div className="ml-64 p-4">
            <h1 className="text-xl font-bold mb-4">Categories Management</h1>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Category Name"
                    value={newCategoryName}
                    onChange={(e) => setNewCategoryName(e.target.value)}
                    className="border p-2 mr-2"
                />
                <button onClick={handleAddCategory} className="bg-blue-500 text-white p-2">
                    <PlusCircle className="inline mr-1" /> Add Category
                </button>
            </div>
            <table className="min-w-full border-collapse border border-gray-200">
                <thead>
                    <tr>
                        <th className="border border-gray-200 p-2">ID</th>
                        <th className="border border-gray-200 p-2">Category Name</th>
                        <th className="border border-gray-200 p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map(category => (
                        <tr key={category.id}>
                            <td className="border border-gray-200 p-2">{category.id}</td>
                            <td className="border border-gray-200 p-2">{category.name}</td>
                            <td className="border border-gray-200 p-2">
                                <button onClick={() => console.log('Edit', category.id)}>
                                    <Edit2 className="inline" />
                                </button>
                                <button onClick={() => handleDeleteCategory(category.id)} className="ml-2">
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

export default CategoriesManagement;