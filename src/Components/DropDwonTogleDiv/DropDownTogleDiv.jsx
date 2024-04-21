import TopHeader from '../TopHeader/TopHeader'
import './DropDownTogleDiv.css'
import ButtonViewCreateProfile from './ButtonViewCreateProfile/ButtonViewCreateProfile'
import FooterTogleDiv from './FooterTogleDiv/FooterTogleDiv'
import ButtonNavigatePages from './ButtonNavigatePages/ButtonNavigatePages'
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
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

  
export default function DropDownTogleDiv({ togleV , setGoogle, setFacebook, setData, profile }) {
    const { logout } = useLogout();
    
  const navigate = useNavigate();
const handleLogout = async () => {
    await logout();
    setGoogle(null);
    setFacebook(null);
    setData(null);
  };
  useEffect(() => {}, [profile]);
    return (
        <div className={(false) ? "hidden" : "block  top-0 min-h-screen "}>
            <div className='border-b-2 py-2'>
                <TopHeader />
            </div>
      {profile && <div className="relative mt-3 ms-2">
          <div className="profile absolute right-0 bg-white text-black   top-0 rounded-sm w-vw-100/100  h-vh-75/100">
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
              {/* <div className="flex items-center ps-4 h-12 bg-red-50 hover:bg-slate-100 cursor-pointer">
                <img src={Wallet} width={23} height={21} />
                <div className="ms-3 h-10">
                  <p style={{ marginTop: "-2px" }}>Dubbizle Wallet</p>
                  <p className="text-xs">Balance: EGP 0</p>
                </div>
              </div> */}
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
              {/* <div className="flex items-center ps-4 h-11 hover:bg-slate-100 cursor-pointer">
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
              </div> */}
            </div>

            {/* <div className="blogHelp border-b border-gray-300">
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
            </div> */}
            <div className="flex items-center ps-4 h-11 hover:bg-slate-100 cursor-pointer">
              <div className="w-6 flex justify-center">
                <img src={Logout} width={23} height={24} />
              </div>
              <p className="ms-3 cursor-pointer" onClick={handleLogout}>
                Logout
              </p>
            </div>
          </div>
      </div>}
      

      {!profile && <div className="flex  justify-center  bg-gray-100 ">
                <div
                    className="w-full max-w-full rounded-lg bg-white   divide-y divide-gray-200">
                    <div>
                        <div aria-label="header" className="flex space-x-4 items-center p-4">
                            <div aria-label="avatar" className="flex mr-auto items-center space-x-4">
                                <img
                                    src="https://www.dubizzle.com.eg/assets/brandLogoWithBackground.1a8aea0bfa51e64828b5ffa35fb00dcb.png"
                                    alt="avatar Evan You"
                                    className="w-16 h-16 shrink-0 rounded-full"
                                />
                                <div className="space-y-2 flex flex-col flex-1 truncate">
                                    <div className=" relative leading-tight text-gray-900">
                                        <span className="flex">
                                            <span className="truncate relative ">
                                                Enter to your account
                                                <span
                                                    aria-label="verified"
                                                    className="absolute top-1/2 -translate-y-1/2 right-0 inline-block rounded-full"
                                                >
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                    <p className="font-normal text-base leading-tight text-gray-500 truncate">
                                        <a onClick={() => { console.log("login to account") }}>
                                            Log in to your account
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <ButtonViewCreateProfile content={"Veiw your profile"} func={() => { console.log("veiw your profile") }} /> */}
                    </div>

                    {/* <div aria-label="navigation" className="py-2 px-2">
                        <ButtonNavigatePages pageName={"start selling"} iconPage={
                            <svg width={"20"} height={"30"} fillRule="evenodd" data-aut-id="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" classNameName="_2608ceeb"><path d="M670.72 128l42.67 128h182.6l42.67 42.67v554.67L896 896H128l-42.67-42.66V298.67L128 256h182.6l42.67-128h317.44zm-61.44 85.33H414.72l-42.67 128H170.66v469.33h682.67V341.33H651.94l-42.66-128zm-97.28 128c117.63 0 213.33 95.7 213.33 213.33S629.63 768 512 768s-213.33-95.7-213.33-213.33S394.37 341.33 512 341.33zm0 85.34c-70.61 0-128 57.38-128 128s57.39 128 128 128 128-57.39 128-128-57.39-128-128-128z"></path></svg>
                        } />
                        
                        
                        <ButtonNavigatePages pageName={"Chat"} iconPage={
                            <img className='' src="https://www.dubizzle.com.eg/assets/iconChat_noinline.31f5df4a6a21fc770ed6863958662677.svg" alt="" />

                        } />
                        


                    </div> */}
                    {/* <div aria-label="navigation" className="py-2 px-2 ">
                        <ButtonNavigatePages pageName={"Blog"} iconPage={
                                <img className='' src="	https://www.dubizzle.com.eg/assets/iconBlog_noinline.affa509f5dae88eca26398bb8abbe0f7.svg" alt="" />

                        } />
                        
                      
                    </div> */}
                    <FooterTogleDiv profile={profile}/>
                </div>
            </div>}
      






        </div>
    )
}
