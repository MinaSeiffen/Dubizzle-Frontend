import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useRemoveFromFavourite from "../../Hooks/useRemoveFromFavourite";

import { FaRegTrashAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { LuBath } from "react-icons/lu";
import { PiBedDuotone } from "react-icons/pi";
import CategorySub from "../../Components/CategorySubComp/CategorySub";
import useGetMyAdds from "../../Hooks/useGetMyAdds";
import useDeleteProduct from "../../Hooks/useDeleteProduct";

 

function MyAds() {
  const navigate = useNavigate()
  const {adds , getMyAdds} = useGetMyAdds()
  const {deleteProduct} = useDeleteProduct()

    const showPrice = (number)=>{
    const formattedNumber = new Intl.NumberFormat('en-EG', {
       style: 'currency',
        currency: 'EGP',
        minimumFractionDigits: 0, // Specifies the minimum number of fraction digits
        maximumFractionDigits: 2 
       }).format(number);
    return formattedNumber.replace(/\.00$/, '');

  }
  const goToDetailsPage = (id) => {
    navigate(`/product-details/${id}`);
  };

  const formatDateDifference = (updatedAt) => {
    const currentDate = new Date();
    const updatedDate = new Date(updatedAt);
    const timeDifference = currentDate - updatedDate;

    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hoursDifference = Math.floor(
      (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    if (daysDifference > 0) {
      return `${daysDifference} day${daysDifference > 1 ? "s" : ""} ago`;
    } else {
      return `${hoursDifference} hour${hoursDifference > 1 ? "s" : ""} ago`;
    }
  };

  useEffect(()=>{
    getMyAdds();
  },[])

  return (
    <>
    <div className="container w-full">
    <CategorySub></CategorySub>
    <div>
      <p className="text-gray-500">Profile</p>
      <p className="text-2xl font-semibold pb-2 border-b mt-3 mb-6">Manage and view your Ads</p>
    </div>
      <div className="">
        <div className=" flex flex-wrap gap-3">
          {adds?.map((catData) => {
            return (
              catData.images[0] && (
                <div
                  key={catData.id}
                  className=" border card-category rounded-t-xl cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    goToDetailsPage(catData._id);
                  }}
                >
                  <img
                    alt="example"
                    className="w-full h-40 rounded-t-xl object-cover"
                    src={catData.images[0]}
                  />
                  <div className="p-3">
                    <div className="grid grid-flow-col justify-between mt-2">
                      <p className="font-sans text-red-600 font-bold">
                        {showPrice(catData.price)}{" "}
                      </p>
                      <button
                      onClick={(e) => {
                        e.stopPropagation();
                        deleteProduct(catData._id);
                        window.location.reload();
                      }}
                    >
                      <FaRegTrashAlt className="text-red-600 hover:text-red-700"/>
                    </button>
                    </div>
                    <div className="my-1 grid items-center min-h-12 ">
                      <p className="min-w-full max-h-12 overflow-hidden">
                        {catData.name}
                      </p>
                    </div>
                    <div className="flex py-1">
                      <p className="text-sm font-sans text-gray-700">
                        {catData.location}
                      </p>
                    </div>
                    <div className="flex py-1">
                      <p className="text-sm text-gray-700">
                        {formatDateDifference(catData.updatedAt)}
                      </p>
                    </div>
                  </div>
                </div>
              )
            );
          })}
        </div>
      </div>
    </div>
  </>
  )
}

export default MyAds