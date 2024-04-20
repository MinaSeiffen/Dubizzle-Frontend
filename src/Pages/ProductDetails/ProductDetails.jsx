import { useParams } from "react-router-dom";
import { Details } from "../../Components/Details/Details";
import { ProductDisplay } from "../../Components/ProductDisplay/ProductDisplay";
import { RelatedProducts } from "../../Components/RelatedProducts/RelatedProducts";
import { Safety } from "../../Components/Safety/Safety";
import { SellerData } from "../../Components/SellerData/SellerData";
import UseGetProduct from "../../Hooks/UseGetProduct";
import { useEffect } from "react";
import CategorySub from "../../Components/CategorySubComp/CategorySub";
import ProductDetailsFooter from "../../Components/ProductDetailsFooter/ProductDetailsFooter";

export const ProductDetails = () => {
  const { product, setId, userData, subcategoryName } = UseGetProduct();
  let { id } = useParams();

  useEffect(() => {
    setId(id);
  }, [id, setId, subcategoryName]);

  return (
    <>
       <div className="fixed z-50 md:hidden w-full block bottom-0">
       <ProductDetailsFooter product={product}/>
       </div>
      <div className="container pt-4">
        <CategorySub />
      </div>
      <div className="container md:mb-4 mb-12 max-xl:container max-xl:justify-center max-xl:items-center flex flex-col xl:flex-row ">
        <div className=" flex-col pr-3 xl:w-vw-50/100 max-w-full">
          <ProductDisplay product={product} />
          <div className="max-w-full">
            <Details product={product} />
            <RelatedProducts
              subcategoryName={subcategoryName}
              productId={product?._id}
            />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <div className="max-xl:hidden max-w-full ">
            <SellerData userData={userData} product={product} />
          </div>
          <div className="max-xl:hidden max-w-full">
            <Safety />
          </div>
        </div>
      </div>
      </>
  );
};
