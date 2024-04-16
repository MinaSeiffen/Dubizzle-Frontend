import { useEffect, useState } from "react";
import { FaRegBell } from "react-icons/fa";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";
import { BsFillBuildingFill } from "react-icons/bs";
import { BsList } from "react-icons/bs";

import {
  IoLocation,
  IoSearchSharp,
  IoChatbubbleOutline,
} from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";

import "../CategorySubComp/CategorySub.css";
import "./Header.css";
import DropDownList from "../DropDownListComp/DropDownList";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Login from "../Login/Login";
import useLogin from "../../Hooks/useLogin";
import useRegister from "../../Hooks/useRegister";
import useLoginWithEmail from "../../Hooks/useLoginWithEmail";
import ProfileToggle from "./ProfileToggle";
import Properties from '../../assets/images/property.svg'
import TopHeader from "../TopHeader/TopHeader";

export default function Header({ profile }) {
  const [isOpen, setIsOpen] = useState(false);
  const [facebook, setFacebook] = useState(null);
  const [google, setGoogle] = useState();
  const { login } = useLogin();
  const { data, setData, registerUser } = useRegister();
  const { loginUser } = useLoginWithEmail();
  const [searchQuery, setSearchQuery] = useState("");
  const [sellButton, setSellButton] = useState('hidden');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/search/${searchQuery}`)
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const togglebutton = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {}, [profile]);

 const location = useLocation()
//  console.log(location.pathname)

useEffect(() => {
  if (location.pathname === "/") {
    setSellButton('block');
  }else {
    setSellButton('hidden'); // Ensure it's visible when not on "/EditProfile"
  }
}, [location.pathname]);

 


  return (
    <>
      <div className="relative w-full">
        <div className="bg-white border-b  z-10 md:fixed   sm:top-0 pt-3 w-full ">
        <div className='md:border-0 border-b-2 md:p-0 pb-3'>
                <TopHeader/>
            </div>
          
          <div className="my-2 mx-2 md:container">
            <div className="md:grid md:grid-flow-col md:gap-1 dis-flex">
              <div className="md:flex md:justify-center z-99">
                <DropDownList
                  props={
                    <button
                      onClick={togglebutton}
                      className=" grid items-center grid-flow-col w-full border h-12 hover:shadow-md rounded-lg text-red-500 font-bold justify-evenly max-w-full"
                    >
                      <IoLocation className="text-red-500" />
                      Egypt
                      {isOpen ? <FaAngleDown /> : <FaAngleUp />}
                    </button>
                  }
                ></DropDownList>
              </div>

              <div className="flex col-span-2 hidecontent">
                <input
                className="h-12 px-4 w-full border rounded-xl rounded-e-none "
                  type="text"
                  value={searchQuery}
                  onChange={handleChange}
                  placeholder="Find Cars, Mobile Phones and more..."
                />
                <button
                  className="bg-red-600 flex justify-center items-center p-2 h-12 rounded-e-lg"
                  onClick={handleSearch}
                >
                  <IoIosSearch className="text-white text-3xl" />
                </button>
              </div>

              <div className=" grid grid-flow-col ">
                <div className="md:grid md:h-12 md:font-bold text-xl md:text-center items-center sm:visible hidden">
                  <button>English</button>
                </div>
                <div className="text-center hidecontent">
<Link to={"/chat"}>
                  <button className=" text-center ">
                    <IoChatbubbleOutline className="h-12 font-bold text-xl" />
                  </button>
</Link>
                </div>
                <div className=" md:text-center ">
                  <button className="text-center">
                    <FaRegBell className="h-12 text-xl" />
                  </button>
                </div>
                <div className="md:relative hidecontent">
                  <div className="flex item-center h-3 font-bold">
                    {!facebook && !google && !data && !profile ? (
                      <Login
                        google={google}
                        facebook={facebook}
                        login={login}
                        setFacebook={setFacebook}
                        setGoogle={setGoogle}
                        registerUser={registerUser}
                        setData={setData}
                        loginUser={loginUser}
                      />
                    ) : (
                      <ProfileToggle setData={setData} setFacebook={setFacebook} setGoogle={setGoogle} profile={profile} />
                    )}
                  </div>
                </div>

                 <button
                  onClick={() => {
                    navigate("/sell");
                  }}
                  className={`col-span-3 h-12 border ${sellButton}  md:block bg-red-600 hover:bg-red-700 rounded-lg text-white font-bold tt1`}
                >
                  Sell
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="show-input-responsive ">
        <div className="px-2 " style={{ paddingTop: "5px" }}>
          <div className="mb-4 flex align-baseline border-gray-400 border-2 rounded p-1 mt-3 ">
            <div className="text-gray-400 text-3xl pt-1">
              <IoSearchSharp />
            </div>
            <input
              className="appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none "
              id="username"
              type="text"
              placeholder={"What are you looking for?"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
