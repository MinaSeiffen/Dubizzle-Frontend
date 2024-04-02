import { useEffect, useState } from "react";

const UseGetProduct = () => {
  const [product, setProduct] = useState(null);
  const [id, setId] = useState("");
  const [userData, setUserData] = useState(null);
  const [subcategoryID, setSubcategoryID] = useState(null);
  const [subcategoryName, setSubcategoryName] = useState(null);

  async function getProduct() {
    try {
      const response = await fetch(`https://dubizzle-backend.onrender.com/products/get/${id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch product");
      }
      const { product } = await response.json();
      setProduct(product);
      setUserData(product?.sellerId);
      setSubcategoryID(product?.subCategoryId);

      const responseSubcategory = await fetch(
        `https://dubizzle-backend.onrender.com/sub-category/getId/${subcategoryID}`
      );

      if (!responseSubcategory.ok) {
        throw new Error("Failed to fetch subcategory");
      }

      const { subCategoryName } = await responseSubcategory.json();

      setSubcategoryName(subCategoryName);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    if (id !== "") {
      getProduct();
    }
  }, [id, userData, subcategoryID , subcategoryName]);

  return { product, setId, userData, subcategoryName };
};

export default UseGetProduct;
