import { useEffect, useState } from "react";
import UseGetProduct from "../../Hooks/UseGetProduct";
import { useParams } from "react-router-dom";
import { SellerData } from "../SellerData/SellerData";
import useRemoveFromFavourite from "../../Hooks/useRemoveFromFavourite";
import useAddToFavourite from "../../Hooks/useAddToFavourite";
import { useSelector } from "react-redux";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export const Details = ({ product }) => {
  const { subcategoryName, setId, userData } = UseGetProduct();
  const { addProductToFavourite } = useAddToFavourite();
  const { RemoveProductFromFavourite } = useRemoveFromFavourite();

  const favourites = useSelector((state) => state.favourite.favourite);

  let favouritesIds = [];
  if (favourites !== undefined) {
    favouritesIds = favourites.map((product) => {
      return product._id;
    });
  }

  function check(id) {
    return favouritesIds.find((prdId) => prdId == id);
  }

  const addOrRemoveFavourite = (producId) => {
    if (!check(producId)) {
      addProductToFavourite(producId);
    } else {
      RemoveProductFromFavourite(producId);
    }
  };

  const [productData, setProductDate] = useState(null);
  const { id } = useParams();
  const showPrice = (number) => {
    const formattedNumber = new Intl.NumberFormat("en-EG", {
      style: "currency",
      currency: "EGP",
      minimumFractionDigits: 0, // Specifies the minimum number of fraction digits
      maximumFractionDigits: 2,
    }).format(number);
    return formattedNumber.replace(/\.00$/, "");
  };
  useEffect(() => {
    setId(id);
    setProductDate(product);
  }, [product, productData]);
  return (
    <div className="xl:w-[740px] max-md:w-[400px] relative">
      <div className="relative flex flex-col mb-5 h-[230px] rounded-xlspace-y-6 col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
        <div className="relative p-6">
          <div className="flex flex-row">
          <h1 className="mb-2 flex-1 font-sans text-3xl font-bold leading-snug tracking-normal text-red-500 antialiased">
            {showPrice(productData?.price)}
          </h1>
          <button
          className="flex-"
          onClick={(e) => {
            e.stopPropagation();
            addOrRemoveFavourite(productData._id);
          }}
          >
            {check(productData?._id) ? (
              <FaHeart className="text-red-500 lg:w-16 max-lg:w-8" size={29} />
            ) : (
              <FaRegHeart className="lg:w-16 max-lg:w-8" size={29} />
            )}
          </button>
            </div>

          <h3 className="block text-base font-bold leading-relaxed text-inherit antialiased">
            {productData?.name}
          </h3>
          <span className="my-5 block font-sans text-base leading-relaxed text-inherit antialiased">
            <span>
              <img
                width="25"
                height="50"
                className="absolute"
                src="https://img.icons8.com/ios/50/marker--v1.png"
                alt="marker--v1"
              />
              <span className="absolute left-14">{productData?.location}</span>
            </span>
          </span>
        </div>
      </div>
      <div className="relative flex flex-col mb-5 rounded-xlspace-y-6 col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
        <div className="p-6">
          <h1 className="mb-2 block font-sans text-3xl font-bold leading-snug tracking-normal text-black antialiased">
            Details
          </h1>
          <div className="grid grid-cols-4 max-md:grid-cols-2">
            <div>
              <p className="my-5">Price</p>
              <p className="my-5">Price Type</p>
              {(subcategoryName?.includes("Villas") ||
                subcategoryName?.includes("Apartments")) && (
                <>
                  <p className="my-5">Bathrooms</p>
                  <p className="my-5">Bedrooms</p>
                  <p className="my-5">Area</p>
                </>
              )}
            </div>
            <div>
              <p className="font-semibold my-5">
                {showPrice(productData?.price)}
              </p>
              <p className="font-semibold my-5">{productData?.price_type}</p>
              {(subcategoryName?.includes("Villas") ||
                subcategoryName?.includes("Apartments")) && (
                <>
                  <p className="font-semibold my-5">{productData?.bathRooms}</p>
                  <p className="font-semibold my-5">{productData?.bedRooms}</p>
                  <p className="font-semibold my-5">{productData?.area}</p>
                </>
              )}
            </div>
            <div>
              {subcategoryName?.includes("Cars") && (
                <>
                  <p className="my-5">Model</p>
                </>
              )}
              {(subcategoryName?.includes("Cars") ||
                subcategoryName?.includes("Mobile") ||
                subcategoryName?.includes("Tablets")) && (
                <>
                  <p className="my-5">Brand</p>
                </>
              )}
              {(subcategoryName?.includes("Villas") ||
                subcategoryName?.includes("Apartments")) && (
                <>
                  <p className="my-5">Property Type</p>
                  <p className="my-5">Amenities</p>
                </>
              )}
            </div>
            <div>
              {subcategoryName?.includes("Cars") && (
                <p className="font-semibold my-5">{productData?.model}</p>
              )}
              {(subcategoryName?.includes("Cars") ||
                subcategoryName?.includes("Mobile") ||
                subcategoryName?.includes("Tablets")) && (
                <p className="font-semibold my-5">{productData?.brand}</p>
              )}
              {(subcategoryName?.includes("Villas") ||
                subcategoryName?.includes("Apartments")) && (
                <>
                  <p className="font-semibold my-5">
                    {productData?.propertyType}
                  </p>
                  <p className="font-semibold my-5">{productData?.amenities}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col mb-5 rounded-xlspace-y-6 col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
        <div className="p-6">
          <h1 className="mb-2 block font-sans text-3xl font-bold leading-snug tracking-normal text-black antialiased">
            Description
          </h1>
          <p style={{ whiteSpace: "pre-wrap" }}>{productData?.description}</p>
        </div>
      </div>
      <div className="xl:hidden mb-5 flex-col max-md:w-[360px] xl:w-[740px]">
        <SellerData userData={userData} product={product} />
      </div>
      <div className="relative flex flex-col mb-5 rounded-xlspace-y-6 col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
        <h1 className="p-6 mb-2 block font-sans text-3xl font-bold leading-snug tracking-normal text-black antialiased">
          Location
        </h1>
        <div style={{ width: "100%" }}>
          <iframe
            width="100%"
            height={600}
            frameBorder={0}
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            src={`https://maps.google.com/maps?width=100%25&height=600&hl=en&q=${productData?.location},egypt+(Dubizzle)&t=&z=14&ie=UTF8&iwloc=B&output=embed`}
          >
            <a href="https://www.gps.ie/">gps vehicle tracker</a>
          </iframe>
        </div>
      </div>
      <div className="relative mt-3 rounded-xlspace-y-6 col-span-1 max-md:hidden ">
        <p>AD ID {productData?._id}</p>
        <p className="font-bold absolute right-0 top-0 hover:underline cursor-pointer ">
          Report this ad
        </p>
      </div>
      <hr className="relative mb-1 border-1 border-black" />
    </div>
  );
};
