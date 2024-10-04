import { useState } from 'react';
import { Edit2, Trash2, PlusCircle } from 'lucide-react';

const initialComments = [
    { id: 1, author: 'John Doe', content: 'Great product!', date: '2024-10-01' },
    { id: 2, author: 'Jane Smith', content: 'Very useful.', date: '2024-10-02' },
];

const CommentsManagement = () => {
    const [comments, setComments] = useState(initialComments);
    const [newAuthor, setNewAuthor] = useState('');
    const [newContent, setNewContent] = useState('');
    const handleAddComment = () => {
        const newComment = {
            id: comments.length + 1,
            author: newAuthor,
            content: newContent,
            date: new Date().toISOString().split('T')[0], // Current date
        };
        setComments([...comments, newComment]);
        setNewAuthor('');
        setNewContent('');
    };

    const handleDeleteComment = (id) => {
        setComments(comments.filter(comment => comment.id !== id));
    };

    return (
        <div className="ml-64 p-4">
            <h1 className="text-xl font-bold mb-4">Comments Management</h1>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Author Name"
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    className="border p-2 mr-2"
                />
                <input
                    type="text"
                    placeholder="Comment Content"
                    value={newContent}
                    onChange={(e) => setNewContent(e.target.value)}
                    className="border p-2 mr-2"
                />
                <button onClick={handleAddComment} className="bg-blue-500 text-white p-2">
                    <PlusCircle className="inline mr-1" /> Add Comment
                </button>
            </div>
            <table className="min-w-full border-collapse border border-gray-200">
                <thead>
                    <tr>
                        <th className="border border-gray-200 p-2">ID</th>
                        <th className="border border-gray-200 p-2">Author</th>
                        <th className="border border-gray-200 p-2">Comment</th>
                        <th className="border border-gray-200 p-2">Date</th>
                        <th className="border border-gray-200 p-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {comments.map(comment => (
                        <tr key={comment.id}>
                            <td className="border border-gray-200 p-2">{comment.id}</td>
                            <td className="border border-gray-200 p-2">{comment.author}</td>
                            <td className="border border-gray-200 p-2">{comment.content}</td>
                            <td className="border border-gray-200 p-2">{comment.date}</td>
                            <td className="border border-gray-200 p-2">
                                <button onClick={() => console.log('Edit', comment.id)}>
                                    <Edit2 className="inline" />
                                </button>
                                <button onClick={() => handleDeleteComment(comment.id)} className="ml-2">
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

export default CommentsManagement;