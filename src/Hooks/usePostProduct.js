import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const usePostProduct = () => {
  const navigate = useNavigate();

  const addProduct = async (product, selectedSubCategory) => {
    const token = localStorage.getItem("jwt");
    if (!token) {
      navigate("/");
      toast.error("please login first")
    }
    try {
      const responseSubCate = await fetch(
        `http://localhost:3000/sub-category/${selectedSubCategory}`
      );

      if (!responseSubCate.ok) {
        throw new Error("Failed to fetch subcategory");
      }

      const resCat = await responseSubCate.json();
      product.subCategoryId = resCat.subCategoryId;

      const addProductResponse = await fetch(
        "http://localhost:3000/products/add",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(product),
        }
      );

      const addProductData = await addProductResponse.json();

      if (addProductData && addProductData.success === 1) {
        toast.success("Product Saved Successfully");
        navigate("/");
      } else {
        toast.error("There was an issue saving the product. Please try again.");
      }
    } catch (error) {
      console.error("Error saving product:", error);
    }
  };

  return { addProduct };
};

export default usePostProduct;
