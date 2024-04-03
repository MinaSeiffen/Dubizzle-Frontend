import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShareNodes } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import {
  likedProductAction,
} from "../../Store/Slices/Favorites";
import { useDispatch, useSelector } from "react-redux";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useEffect } from "react";
import useAddToFavourite from "../../Hooks/useAddToFavourite"
import useRemoveFromFavourite from "../../Hooks/useRemoveFromFavourite"

const SellerProfile = ({ userData, userAds }) => {
  const navigate = useNavigate();
  const { addProductToFavourite } = useAddToFavourite();
  const { RemoveProductFromFavourite } = useRemoveFromFavourite();

  const favourites = useSelector((state) => state.favourite.favourite);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(likedProductAction());
  }, []);

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

  return (
    <div className="max-lg:flex-col max-md:flex-col ">
      <div className="flex lg:flex-col container max-lg:container max-lg:justify-center max-lg:items-center max-md:-left-[90px] ">
        <img
          src={
            userData?.profile.avatar !== ""
              ? userData?.profile.avatar
              : `https://ui-avatars.com/api/?name=${userData.profile.name}&background=FF9C9C&color=fff`
          }
          className="relative w-[220px] top-12 object-cover rounded-3xl max-lg:w-[180px] "
          alt=""
        />
        <div className="flex max-lg:flex-col ">
        <div className="container absolute right-2/4 top-12 max-lg:left-40 max-lg:top-8 max-md:w-fit">
        <h1 className="absolute top-32 right-20 max-lg:relative max-lg:left-36 max-lg:top-36 font-bold text-5xl lg:w-28 max-lg:text-2xl max-md:left-16 max-md:top-60 max-md:w-fit max-lg:w-fit">
          {userData?.profile?.name}
        </h1>
      </div>
        <div className="relative max-lg:flex-row max-lg:left-12 max-lg:bottom-3">
          <h2 className="font-bold relative left-6 top-20 w-44 max-lg:flex-row max-lg:mb-3 max-lg:left-2 max-md:w-fit">
            {userAds?.length} published ads
          </h2>
          <button className="group relative left-2 top-24 h-12 w-[200px] overflow-hidden rounded-lg bg-red-50 text-lg shadow max-lg:w-52 max-lg:left-2 max-lg:top-20 max-md:w-[160px]">
            <div className="absolute inset-0 w-3 bg-red-500 transition-all duration-[250ms] ease-out group-hover:w-full" />
            <span className="relative text-black font-semibold max-md:text-sm group-hover:text-white">
              <FontAwesomeIcon icon={faShareNodes} /> Share profile
            </span>
          </button>
        </div>
        </div>
      </div>
      <div className="relative bottom-5 left-40 w-[1200px] max-lg:hidden">
        <hr className="relative left-[500px] border-1 border-black w-9/12"/>
      </div>
      <div className="relative lg:w-fit max-lg:top-16 max-md:container max-lg:container lg:left-[700px] max-md:-left-[75px]">
        <div className="grid max-lg:w-[580px] lg:w-[930px] lg:top-40 md:grid-cols-2 lg:grid-cols-3 max-lg:mb-16 max-md:justify-center max-md:items-center">
          {Array.isArray(userAds) && userAds.length > 0 ? (
            userAds.map((product) => (
              <div
                key={product.id}
                className="my-2 w-fit border card-category rounded-t-xl cursor-pointer max-lg:w-[200px]"
                onClick={(e) => {
                  e.stopPropagation();
                  goToDetailsPage(product._id);
                }}
              >
                <img
                  alt="example"
                  className="w-full h-40 rounded-t-xl object-cover"
                  src={product.images[0]}
                />
                <div className="p-3">
                  <div className="grid grid-flow-col justify-between mt-2">
                    <p className="font-sans text-red-600 font-bold">
                      EGP {product.price}
                    </p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        addOrRemoveFavourite(product);
                      }}
                    >
                      {check(product._id) ? <FaHeart /> : <FaRegHeart />}
                    </button>
                  </div>
                  <div className="my-1 grid items-center min-h-12 ">
                    <p className="min-w-full max-h-12 overflow-hidden">
                      {product.name}
                    </p>
                  </div>
                  <div className="flex py-1">
                    <p className="text-sm font-sans text-gray-700">
                      {product.location}
                    </p>
                  </div>
                  <div className="flex py-1">
                    <p className="text-sm text-gray-700">
                      {formatDateDifference(product.updatedAt)}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No ads to display</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SellerProfile;
