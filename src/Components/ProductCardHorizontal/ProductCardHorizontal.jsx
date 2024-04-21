import { FaRegHeart } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { BsChatDots } from "react-icons/bs";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const ProductCardHorizontal = ({ product }) => {
    useEffect(() => {}, [product]);

    const formatDateDifference = (updatedAt) => {
      const currentDate = new Date();
      const updatedDate = new Date(updatedAt);
      const timeDifference = currentDate - updatedDate;

      const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hoursDifference = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutesDifference = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );

      if (daysDifference > 0) {
        return `${daysDifference} day${daysDifference > 1 ? "s" : ""} ago`;
      } else if (hoursDifference > 0) {
        return `${hoursDifference} hour${hoursDifference > 1 ? "s" : ""} ago`;
      } else if (minutesDifference > 0) {
        return `${minutesDifference} minute${minutesDifference > 1 ? "s" : ""} ago`;
      } else {
        return 'just now';
      }
  };
  const showPrice = (number) => {
    const formattedNumber = new Intl.NumberFormat("en-EG", {
      style: "currency",
      currency: "EGP",
      minimumFractionDigits: 0, // Specifies the minimum number of fraction digits
      maximumFractionDigits: 2,
    }).format(number);
    return formattedNumber.replace(/\.00$/, "");
  };

  return (
    <>
      <div className="flex items-center justify-center mb-3">
        <div className="relative flex w-[1000px]  flex-row h-[250px] rounded-xl bg-white text-gray-700 ">
          <Link to={`/product-details/${product._id}`}>
          <div className="relative m-0 w-vw-23/100 shrink-0 overflow-hidden rounded-lg rounded-r-none bg-white bg-clip-border text-gray-700">
            <img
              src={product?.images[0]}
              alt="image"
              className="h-[250px] w-full object-cover"
              />
          </div>
          </Link>
          <div className="p-4 w-full border border-slate-20 border-l-0 rounded-r-lg">
            <div className="flex justify-between  w-full">
              <h3 className=" block font-sans text-2xl font-bold uppercase leading-relaxed tracking-normal text-red-600 antialiased">
                 {showPrice(product?.price)}
              </h3>
              <span>
                <FaRegHeart className="text-red-600 text-xl" />
              </span>
            </div>
            <h5 className="pt-2 h-vh-15/100 block font-sans text-lg font-semibold text-black">
              {product?.name && product.name.length > 80
                ? `${product.name.slice(0, 80)}...`
                : product?.name}
            </h5>

            <p className="text-sm">
              {" "}
              {product?.location}. {formatDateDifference(product.updatedAt)}
            </p>
            <div className="flex pt-2">
              <a href="#">
                <div
                  className="w-24 mr-1 flex align-center justify-center p-3 hover:bg-red-400 
                                hover:cursor-pointer text-black bg-red-100 rounded-md font-bold text-sm"
                >
                  <FiPhone className="mr-2 mt-0.5 text-red-600" />
                  Call
                </div>
              </a>
              <a href="#">
                <div
                  className="w-24 ms-1 p-3 flex align-center justify-center hover:bg-red-400 
                                hover:cursor-pointer bg-red-100 rounded-md font-bold text-sm text-black"
                >
                  <BsChatDots className="mr-2 mt-0.5 text-red-600" />
                  Chat
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCardHorizontal;
