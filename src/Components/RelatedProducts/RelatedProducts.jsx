import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import useGetSubcategoryProducts from "../../Hooks/useGetSubcategoryProducts";
import CategoriesCard from "../CategoriesCard/CategoriesCard";

export const RelatedProducts = ({ subcategoryName, productId }) => {
  const { getSubCategoryProducts, subcatProducts } =
    useGetSubcategoryProducts();

  useEffect(() => {
    const fetchData = async () => {
      await getSubCategoryProducts(subcategoryName);
    };

    fetchData();
  }, [subcategoryName, productId]);

  return (
    <div className="xl:w-[740px] max-md:w-[400px] p-2 relative">
      <h1 className="mt-6 mb-2 block font-sans text-3xl font-bold leading-snug tracking-normal text-black antialiased">
        Related Products
      </h1>
      {subcatProducts.length !== 0 && (
        <CategoriesCard subcatName={subcategoryName} hidden={"hidden"} />
      )}
    </div>
  );
};

export default RelatedProducts;
