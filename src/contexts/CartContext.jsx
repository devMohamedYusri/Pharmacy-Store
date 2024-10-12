import { createContext, useState } from 'react';
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    const fetchCartItems = async (userId) => {
        try {
            const response = await fetch(`https://pharmacy1.runasp.net/api/ShoppingCartItem/GetItemsByUserId/${userId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch cart items');
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Error fetching cart items:', error);
            return []; 
        }
    };

    const fetchAllOrders = async () => {
        try {
            const response = await fetch(`https://pharmacy1.runasp.net/api/Orders/GetAllAsync`);
            if (!response.ok) {
                throw new Error('Failed to fetch all orders');
            }
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.error('Error fetching all orders:', error);
            return []; 
        }
    };
    

    const addToCart = async ({ UserId, ProductId, Quantity, UnitPrice, LineTotal }) => {
        console.log('auth error in cart Item ', ProductId, UserId, Quantity, UnitPrice, LineTotal);

        try {
            const response = await fetch('https://pharmacy1.runasp.net/api/ShoppingCartItem/Add', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ProductId: ProductId,
                    Quantity: Quantity,
                    UnitPrice: UnitPrice,
                    LineTotal: LineTotal,
                    UserId: UserId
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error('Error response:', errorData); 
                throw new Error(`Failed to add item to cart: ${errorData.title || response.statusText}`);
            }

            const data = await response.json();
            console.log('Item added to cart:', data);

            
            setCartItems((prevItems) => [...prevItems, { ...data, quantity: Quantity }]);
        } catch (error) {
            console.error('Error adding item to cart:', error);
        }
    };

    
    const removeFromCart = async (id) => {
        try {
            const response = await fetch(`https://pharmacy1.runasp.net/api/ShoppingCart/DeleteById?id=${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Failed to remove item from cart');
            }

            // Update local state after successful deletion
            setCartItems((prevItems) => prevItems.filter((cartItem) => cartItem.id !== id));
        } catch (error) {
            console.error('Error removing item from cart:', error);
        }
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, fetchCartItems ,fetchAllOrders}}>
            {children}
        </CartContext.Provider>
    );
};