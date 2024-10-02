import { createContext, useContext, useEffect, useState } from "react";

const CategoriesContext = createContext();

export const useCategories = () => useContext(CategoriesContext);

export const CategoriesProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch();
                const data = await response.json();
                    setCategories(data);
            } catch (err) {
                console.log("Error fetching categories:", err);
            }
        };

        fetchCategories();
    }, []);
    return (
        <CategoriesContext.Provider value={categories}>
            {children}
        </CategoriesContext.Provider>
    );
};