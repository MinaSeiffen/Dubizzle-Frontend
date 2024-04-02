import { useEffect, useState, useCallback } from 'react';

const useSearchForProducts = () => {
    const [foundProducts, setFoundProducts] = useState(null);

    const searchForProducts = useCallback(async (search , location , priceRange) => {
        try {
            const searchResponse = await fetch(`http://localhost:3000/products/search?name=${search}&&location=${location}&&priceRange=${priceRange}`);

            if (!searchResponse.ok) {
                throw new Error("Failed to fetch search results for products");
            }

            const { matchedProducts } = await searchResponse.json();
            setFoundProducts(matchedProducts);
        } catch (error) {
            console.log(error.message);
        }
    }, []);

    useEffect(() => {
    }, [foundProducts]);

    return { foundProducts, searchForProducts };
};

export default useSearchForProducts;
