import arrowDown from "../../assets/images/iconArrowDown_noinline.ec05eae7013321c193965ef15d4e2174.svg";
import Wallet from "../../assets/images/iconWallet.svg";
import myAds from "../../assets/images/iconMyAds.svg";
import Heart from "../../assets/images/iconHeart.svg";
import BusinessPackage from "../../assets/images/iconBusinessPackage.svg";
import BoughtPackage from "../../assets/images/iconBoughtPackage.svg";
import Blog from "../../assets/images/iconBlog.svg";
import Help from "../../assets/images/iconHelp.svg";
import Filters from "../../assets/images/iconFilters.svg";
import Logout from "../../assets/images/iconLogout.svg";
import { LuEye } from "react-icons/lu";
import useLogout from "../../Hooks/useLogout";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ProfileToggle({ setGoogle, setFacebook, setData, profile }) {
  const { logout } = useLogout();
  const [showProfileList, setShowProfileList] = useState(false);
  const [rotated, setrotated] = useState("");
  const navigate = useNavigate();

  const toggleProfileList = () => {
    rotated == "" ? setrotated("rotate-180") : setrotated("");
    setShowProfileList(!showProfileList);
  };

  const handleLogout = async () => {
    await logout();
    setGoogle(null);
    setFacebook(null);
    setData(null);
  };

  return (
    <>
      <div onClick={toggleProfileList} className="relative mt-3 ms-2">
        <p className="font-bold text-sm hover:cursor-pointer flex">
          <span className="bg-red-50 text-red-600 w-8 h-8 flex justify-center items-center  rounded-full">
            {" "}
            {profile?.profile.name.slice(0, 1).toUpperCase()}{" "}
          </span>
          <img
            src={arrowDown}
            width={25}
            height={25}
            className={`${rotated} ms-2 transition-all`}
          />
        </p>

        {showProfileList && (
          <div className="profile absolute right-0 bg-white text-black shadow-2xl overflow-y-scroll  top-12 rounded-sm w-vw-21/100  h-vh-80/100">
            <div className="border-b pb-4 border-gray-300">
              <div className="name flex p-4 gap-4 items-center  relative text-sm">
                <span className="bg-red-50 text-2xl font-bold text-red-600 w-16 h-16 flex justify-center items-center  rounded-full">
                  {profile?.profile.name.slice(0, 1).toUpperCase()}
                </span>
                <div>
                  <p className="text-md">Hello,</p>
                  <p className="text-xl font-bold">
                    {profile?.profile.name.charAt(0).toUpperCase() +
                      profile?.profile.name.slice(1).toUpperCase()}
                  </p>
                </div>
              </div>
              <div className="edit px-4">
                <p
                  className=" cursor-pointer font-semibold text-sm text-center border border-red-500
                             p-2 hover:bg-red-50 rounded-lg"
                  onClick={() => {
                    navigate("/EditProfile");
                  }}
                >
                  View and edit profile
                </p>
              </div>
            </div>
            <div className="border-b border-gray-300">
              <div className="flex items-center ps-4 h-12 bg-red-50 hover:bg-slate-100 cursor-pointer">
                <img src={Wallet} width={23} height={21} />
                <div className="ms-3 h-10">
                  <p style={{ marginTop: "-2px" }}>Dubbizle Wallet</p>
                  <p className="text-xs">Balance: EGP 0</p>
                </div>
              </div>
              <div className="flex items-center ps-4 h-11 hover:bg-slate-100 cursor-pointer">
                <div className="w-6 flex justify-center">
                  <img src={myAds} width={23} height={24} />
                </div>
                <p className="ms-3"
                  onClick={() => {
                    navigate("/MyAds");
                  }}>
                  My Ads</p>
              </div>
              <div className="flex items-center ps-4 h-11 hover:bg-slate-100 cursor-pointer">
                <div className="w-6 flex justify-center">
                  <img src={Heart} width={23} height={24} />
                </div>
                <p
                  className="ms-3"
                  onClick={() => {
                    navigate("/favorite");
                  }}
                >
                  Favourite
                </p>
              </div>
              <div className="flex items-center ps-4 h-11 hover:bg-slate-100 cursor-pointer">
                <div className="w-6 flex justify-center">
                  <LuEye className="w-6 h-5" />
                </div>
                <p className="ms-3">Public Profile</p>
              </div>
              <div className="flex items-center ps-4 h-11 hover:bg-slate-100 cursor-pointer">
                <div className="w-6 flex justify-center">
                  <img src={BusinessPackage} width={22} height={24} />
                </div>
                <p className="ms-3">Buy Discounted Packages</p>
              </div>
              <div className="flex items-center ps-4 h-11 hover:bg-slate-100 cursor-pointer">
                <div className="w-6 flex justify-center">
                  <img src={BoughtPackage} width={23} height={24} />
                </div>
                <p className="ms-3">Bought Packages & Billing</p>
              </div>
            </div>

            <div className="blogHelp border-b border-gray-300">
              <div className="flex items-center ps-4 h-11 hover:bg-slate-100 cursor-pointer">
                <div className="w-6 flex justify-center">
                  <img src={Blog} width={23} height={24} />
                </div>
                <p className="ms-3">Blog</p>
              </div>
              <div className="flex items-center ps-4 h-11 hover:bg-slate-100 cursor-pointer">
                <div className="w-6 flex justify-center">
                  <img src={Help} width={23} height={24} />
                </div>
                <p className="ms-3">Help</p>
              </div>
              <div className="flex items-center ps-4 h-11 hover:bg-slate-100 cursor-pointer">
                <div className="w-6 flex justify-center">
                  <img src={Filters} width={23} height={24} />
                </div>
                <p className="ms-3">Setting</p>
              </div>
            </div>
            <div className="flex items-center ps-4 h-11 hover:bg-slate-100 cursor-pointer">
              <div className="w-6 flex justify-center">
                <img src={Logout} width={23} height={24} />
              </div>
              <p className="ms-3 cursor-pointer" onClick={handleLogout}>
                Logout
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default ProfileToggle;
