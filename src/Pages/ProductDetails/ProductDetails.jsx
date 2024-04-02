import { useParams } from "react-router-dom";
import { Details } from "../../Components/Details/Details";
import { ProductDisplay } from "../../Components/ProductDisplay/ProductDisplay";
import { RelatedProducts } from "../../Components/RelatedProducts/RelatedProducts";
import { Safety } from "../../Components/Safety/Safety";
import { SellerData } from "../../Components/SellerData/SellerData";
import UseGetProduct from "../../Hooks/UseGetProduct";
import { useEffect } from "react";
import CategorySub from "../../Components/CategorySubComp/CategorySub";

export const ProductDetails = () => {
  const { product, setId, userData, subcategoryName } = UseGetProduct();
  let { id } = useParams();

  useEffect(() => {
    setId(id);
  }, [id, setId, subcategoryName]);

  return (
    <>
      <div className="container pt-4">
        <CategorySub />
      </div>
      <div className="container max-xl:container max-xl:justify-center max-xl:items-center flex flex-col xl:flex-row ">
        <div className="flex-col mr-3 xl:w-full">
          <ProductDisplay product={product} />
          <div className="flex-1">
            <Details product={product} />
            <RelatedProducts
              subcategoryName={subcategoryName}
              productId={product?._id}
            />
          </div>
        </div>
        <div className="md:flex flex-col">
          <div className="md:w-[517px] max-xl:hidden">
            <SellerData userData={userData} product={product} />
          </div>
          <div className="max-xl:hidden">
            <Safety />
          </div>
        </div>
      </div>
    </>
  );
};
