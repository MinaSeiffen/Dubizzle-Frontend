import { useNavigate } from "react-router-dom";
import icon from "../../assets/7.png";
import { useState } from "react";

export const SellerData = ({ userData, product }) => {
  const navigate = useNavigate()
  const [isShow , setIsShow] = useState(false)

  function getYearFromDate(dateString) {
    const date = new Date(dateString);
    return date.getFullYear();
  }

  const goToUserADs = (id) => {
    navigate(`/sellerADs/${id}`)
  };

  const handleShowPhone = () => {
    setIsShow(!isShow);
  }

  const handleChatting = ()=>{
    navigate(`/chat`)
  }

  return (
    <div className="flex-col max-md:w-[400px] relative mt-6 space-y-6 col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
      <div className="flex w-full items-center justify-between space-x-6 p-6">
          <div className="flex-1 truncate cursor-pointer" onClick={()=>{goToUserADs(userData?._id)}}>
            <div className="flex items-center space-x-3">
              <h3 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {userData?.profile.name}
              </h3>
              <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-red-600 ring-1 ring-inset ring-green-600/20">
                member
              </span>
            </div>
            <p className="mt-1 truncate text-sm text-gray-500">
              since {userData && getYearFromDate(userData.createdAt)}
            </p>
            <p className="mt-1 truncate text-sm text-gray-500">
              Comm.ID: {userData?._id}
            </p>
            <h2 className="mt-4 text-sm text-red-600">
              See Profile
              <img
                src={icon}
                className="absolute top-32 left-28 text-red-600"
                alt=""
              />
            </h2>
          </div>
        
        <img
          className="h-24 relative -top-3 w-28 flex-shrink-0"
          src={
            userData?.profile.avatar !== ""
              ? userData?.profile.avatar
              : `https://ui-avatars.com/api/?name=${userData.profile.name}&background=FF9C9C&color=fff`
          }
          alt=""
        />
      </div>
      <div>
        <div className="-mt-px flex h-fit w-full flex-col items-center ">
          {(product?.contact_type.includes("both") ||
            product?.contact_type.includes("chat")) && (
            <div className="flex my-2 h-[50px] justify-center items-center cursor-pointer bg-red-300 rounded-2xl hover:bg-red-400">
              <a
                onClick={()=>{handleChatting()}}
                className="relative -mr-px inline-flex max-md:w-[320px] md:w-[480px] flex-1 items-center justify-center gap-x-1 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
              >
                <svg
                  className="h-5 w-5 text-red-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M3 4a2 2 0 00-2 2v1.161l8.441 4.221a1.25 1.25 0 001.118 0L19 7.162V6a2 2 0 00-2-2H3z" />
                  <path d="M19 8.839l-7.77 3.885a2.75 2.75 0 01-2.46 0L1 8.839V14a2 2 0 002 2h14a2 2 0 002-2V8.839z" />
                </svg>
                Chat
              </a>
            </div>
          )}
          {(product?.contact_type.includes("both") ||
            product?.contact_type.includes("phone")) && (
            <div className="flex my-2 h-[50px] justify-center cursor-pointer items-center bg-red-300 rounded-2xl hover:bg-red-400">
              <span
                className="relative -mr-px inline-flex max-md:w-[320px] md:w-[480px] flex-1 items-center justify-center gap-x-1 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                onClick={handleShowPhone}
              >
                <svg
                  className="h-5 w-5 text-red-600"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15c-1.149 0-2.263-.15-3.326-.43A13.022 13.022 0 012.43 8.326 13.019 13.019 0 012 5V3.5z"
                    clipRule="evenodd"
                  />
                </svg>
                {isShow ? product?.phoneNumber : "Show Phone Number" }
                
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
