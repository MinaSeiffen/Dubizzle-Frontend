import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import { LoginSocialFacebook } from "reactjs-social-login";
import { FacebookLoginButton } from "react-social-login-buttons";
import { useForm } from "react-hook-form";

function Login({
  setFacebook,
  setGoogle,
  login,
  registerUser,
  setData,
  loginUser,
}) {
  const [googleProfile, setGoogleProfile] = useState("");
  const [facebookProfile, setFacebookProfile] = useState("");

  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [signUpWithEmail, setSignUpWithEmail] = useState(false);
  const [loginWithEmail, setLoginWithEmail] = useState(false);
  const [showFacebookLogin, setShowFacebookLogin] = useState(false);
  const [showGoogleLogin, setShowGoogleLogin] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm();

  const handleSignUpWithEmail = () => {
    setSignUpWithEmail(true);
  };
  const handleLoginWithEmail = () => {
    setLoginWithEmail(true);
  };

  const openLogin = () => {
    if (!isLoggedIn) {
      setShowLogin(true);
    } else {
      setIsLoggedIn(!isLoggedIn);
      setShowLogin(false);
      setFacebookProfile(null);
      setGoogleProfile(null);
    }
  };

  const closeLogin = () => {
    setSignUpWithEmail(false);
    setShowSignUp(false);
    setShowLogin(false);
    setLoginWithEmail(false);
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse?.credential);
    // setGoogleProfile(decoded);
    setIsLoggedIn(true);
    setShowLogin(false);
    await setGoogle(decoded);
    login(decoded.email);
  };

  const handleFacebookSuccess = async (response) => {
    setFacebookProfile(response.data);
    setIsLoggedIn(true);
    setShowLogin(false);
    setFacebook(response.data);
    login(response.data.email);
  };

  const handleSignUp = () => {
    setShowLogin(false);
    setShowSignUp(true);
  };

  const handleLogin = () => {
    setShowSignUp(false);
    setShowLogin(true);
  };

  const onSubmit = (data) => {
    setData(data.email);
    registerUser(data);
    setSignUpWithEmail(false);
  };

  const onSubmitEmail = (data) => {
    setData(data.email);
    loginUser(data);
    setLoginWithEmail(false);
  };

  const handleGoogleButtonClick = () => {
    setShowGoogleLogin(!showGoogleLogin);
  };

  const handleFaceBookButtonClick = () => {
    setShowFacebookLogin(!showFacebookLogin);
  };

  return (
    <div className="relative top-4 z-50">
      <button onClick={openLogin}>{isLoggedIn ? "Logout" : "Login"}</button>
      {showLogin && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white shadow rounded-lg lg:w-1/3 md:w-1/2 w-full p-10">
            <div className="flex justify-end">
              <button
                className="text-gray-500 hover:text-gray-600 focus:outline-none"
                onClick={closeLogin}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <p className="text-2xl items-center flex font-extrabold leading-6 justify-center text-gray-800">
              Login to{" "}
              <span className="text-red-500 text-3xl">
                D<span className="text-black">ubizzle</span>
              </span>
            </p>
            <div className="flex flex-col justify-center items-center my-4">
              <div
                className="flex flex-row bg-white px-24 py-3 w-[385px] text-black border rounded-md border-red-500 justify-start items-center cursor-pointer"
                onClick={handleGoogleButtonClick}
              >
                <svg
                  viewBox="-0.5 0 48 48"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  fill="#000000"
                  width={32}
                  height={32}
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>Google-color</title>{" "}
                    <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                    <g
                      id="Icons"
                      stroke="none"
                      strokeWidth={1}
                      fill="none"
                      fillRule="evenodd"
                    >
                      {" "}
                      <g
                        id="Color-"
                        transform="translate(-401.000000, -860.000000)"
                      >
                        {" "}
                        <g
                          id="Google"
                          transform="translate(401.000000, 860.000000)"
                        >
                          {" "}
                          <path
                            d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                            id="Fill-1"
                            fill="#FBBC05"
                          >
                            {" "}
                          </path>{" "}
                          <path
                            d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                            id="Fill-2"
                            fill="#EB4335"
                          >
                            {" "}
                          </path>{" "}
                          <path
                            d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                            id="Fill-3"
                            fill="#34A853"
                          >
                            {" "}
                          </path>{" "}
                          <path
                            d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                            id="Fill-4"
                            fill="#4285F4"
                          >
                            {" "}
                          </path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
                Login With Google
              </div>

              {showGoogleLogin && (
                <div className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 flex justify-center items-center w-96 mt-4">
                  <GoogleLogin
                    onSuccess={handleGoogleSuccess}
                    onError={() => {
                      console.log("Login Failed");
                    }}
                  />
                </div>
              )}
            </div>

            <div className="flex flex-col justify-center items-center my-4">
              <div
                className="flex flex-row bg-white px-24 py-3 w-[385px] text-black border rounded-md border-red-500 justify-start items-center cursor-pointer"
                onClick={handleFaceBookButtonClick}
              >
                <svg
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  width={32}
                  height={32}
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fill="#1877F2"
                      d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z"
                    />
                    <path
                      fill="#ffffff"
                      d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z"
                    />
                  </g>
                </svg>
                Login With Facebook
              </div>
              {!facebookProfile && showFacebookLogin ? (
                <LoginSocialFacebook
                  appId="757792036288625"
                  onResolve={handleFacebookSuccess}
                  onReject={(error) => {
                    console.log(error);
                  }}
                >
                  <FacebookLoginButton />
                </LoginSocialFacebook>
              ) : (
                ""
              )}
            </div>

            <div>
              {facebookProfile && isLoggedIn ? (
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width={32}
                    height={32}
                    fill="#1877F2"
                  >
                    <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                  </svg>
                  <span>{facebookProfile.name}</span>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="flex justify-center items-center">
              <hr className="border-t-1 border-black w-1/3" />
              <p className="font-bold text-black"> OR </p>
              <hr className="border-t-1 border-black w-1/3" />
            </div>
            <div className="flex justify-center items-center w-full my-4">
              <button
                className="flex flex-row bg-white px-24 py-3 w-[480px] text-black border rounded-md border-red-500 justify-start items-center"
                onClick={handleLoginWithEmail}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ef0101"
                  width={32}
                  height={32}
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M4 9.00005L10.2 13.65C11.2667 14.45 12.7333 14.45 13.8 13.65L20 9"
                      stroke="#cc0000"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />{" "}
                    <path
                      d="M3 9.17681C3 8.45047 3.39378 7.78123 4.02871 7.42849L11.0287 3.5396C11.6328 3.20402 12.3672 3.20402 12.9713 3.5396L19.9713 7.42849C20.6062 7.78123 21 8.45047 21 9.17681V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V9.17681Z"
                      stroke="#cc0000"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />{" "}
                  </g>
                </svg>
                Login with Email
              </button>
            </div>
            <div>
              <p
                className="text-lg text-red-600 flex justify-center items-center cursor-pointer"
                onClick={handleSignUp}
              >
                New to Dubizzle? Create Account here
              </p>
            </div>
          </div>
        </div>
      )}
      {showSignUp && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white shadow rounded-lg lg:w-1/3 md:w-1/2 w-full p-10">
            <div className="flex justify-end">
              <button
                className="text-gray-500 hover:text-gray-600 focus:outline-none"
                onClick={closeLogin}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <p className="text-2xl items-center flex font-extrabold leading-6 justify-center text-gray-800">
              Sign Up to{" "}
              <span className="text-red-500 text-3xl">
                D<span className="text-black">ubizzle</span>
              </span>
            </p>
            <div className="flex flex-col justify-center items-center my-4">
              <div
                className="flex flex-row bg-white px-24 py-3 w-[385px] text-black border rounded-md border-red-500 justify-start items-center cursor-pointer"
                onClick={handleGoogleButtonClick}
              >
                <svg
                  viewBox="-0.5 0 48 48"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  fill="#000000"
                  width={32}
                  height={32}
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <title>Google-color</title>{" "}
                    <desc>Created with Sketch.</desc> <defs> </defs>{" "}
                    <g
                      id="Icons"
                      stroke="none"
                      strokeWidth={1}
                      fill="none"
                      fillRule="evenodd"
                    >
                      {" "}
                      <g
                        id="Color-"
                        transform="translate(-401.000000, -860.000000)"
                      >
                        {" "}
                        <g
                          id="Google"
                          transform="translate(401.000000, 860.000000)"
                        >
                          {" "}
                          <path
                            d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24"
                            id="Fill-1"
                            fill="#FBBC05"
                          >
                            {" "}
                          </path>{" "}
                          <path
                            d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333"
                            id="Fill-2"
                            fill="#EB4335"
                          >
                            {" "}
                          </path>{" "}
                          <path
                            d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667"
                            id="Fill-3"
                            fill="#34A853"
                          >
                            {" "}
                          </path>{" "}
                          <path
                            d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24"
                            id="Fill-4"
                            fill="#4285F4"
                          >
                            {" "}
                          </path>{" "}
                        </g>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>
                </svg>
                Login With Google
              </div>

              {showGoogleLogin && (
                <div className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 flex justify-center items-center w-96 mt-4">
                  <GoogleLogin
                    onSuccess={handleGoogleSuccess}
                    onError={() => {
                      console.log("Login Failed");
                    }}
                  />
                </div>
              )}
            </div>

            <div className="flex flex-col justify-center items-center my-4">
              <div
                className="flex flex-row bg-white px-24 py-3 w-[385px] text-black border rounded-md border-red-500 justify-start items-center cursor-pointer"
                onClick={handleFaceBookButtonClick}
              >
                <svg
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  width={32}
                  height={32}
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="SVGRepo_iconCarrier">
                    <path
                      fill="#1877F2"
                      d="M15 8a7 7 0 00-7-7 7 7 0 00-1.094 13.915v-4.892H5.13V8h1.777V6.458c0-1.754 1.045-2.724 2.644-2.724.766 0 1.567.137 1.567.137v1.723h-.883c-.87 0-1.14.54-1.14 1.093V8h1.941l-.31 2.023H9.094v4.892A7.001 7.001 0 0015 8z"
                    />
                    <path
                      fill="#ffffff"
                      d="M10.725 10.023L11.035 8H9.094V6.687c0-.553.27-1.093 1.14-1.093h.883V3.87s-.801-.137-1.567-.137c-1.6 0-2.644.97-2.644 2.724V8H5.13v2.023h1.777v4.892a7.037 7.037 0 002.188 0v-4.892h1.63z"
                    />
                  </g>
                </svg>
                Login With Facebook
              </div>
              {!facebookProfile && showFacebookLogin ? (
                <LoginSocialFacebook
                  appId="757792036288625"
                  onResolve={handleFacebookSuccess}
                  onReject={(error) => {
                    console.log(error);
                  }}
                >
                  <FacebookLoginButton />
                </LoginSocialFacebook>
              ) : (
                ""
              )}
            </div>

            <div>
              {facebookProfile && isLoggedIn ? (
                <div className="flex justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width={32}
                    height={32}
                    fill="#1877F2"
                  >
                    <path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" />
                  </svg>
                  <span>{facebookProfile.name}</span>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="flex justify-center items-center">
              <hr className="border-t-1 border-black w-1/3" />
              <p className="font-bold text-black"> OR </p>
              <hr className="border-t-1 border-black w-1/3" />
            </div>
            <div className="flex justify-center items-center w-full my-2">
              <button
                className="flex flex-row bg-white px-24 py-3 w-[480px] text-black border rounded-md border-red-500 justify-start items-center"
                onClick={handleSignUpWithEmail}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#ef0101"
                  width={32}
                  height={32}
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M4 9.00005L10.2 13.65C11.2667 14.45 12.7333 14.45 13.8 13.65L20 9"
                      stroke="#cc0000"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />{" "}
                    <path
                      d="M3 9.17681C3 8.45047 3.39378 7.78123 4.02871 7.42849L11.0287 3.5396C11.6328 3.20402 12.3672 3.20402 12.9713 3.5396L19.9713 7.42849C20.6062 7.78123 21 8.45047 21 9.17681V17C21 18.1046 20.1046 19 19 19H5C3.89543 19 3 18.1046 3 17V9.17681Z"
                      stroke="#cc0000"
                      strokeWidth={2}
                      strokeLinecap="round"
                    />{" "}
                  </g>
                </svg>
                Sign Up with Email
              </button>
            </div>
            <div>
              <p
                className="text-lg text-red-600 flex justify-center items-center cursor-pointer"
                onClick={handleLogin}
              >
                Have an Account? Login here
              </p>
            </div>
          </div>
        </div>
      )}
      {signUpWithEmail && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white shadow rounded-lg lg:w-1/3 md:w-1/2 w-full p-10">
            <div className="flex justify-end">
              <button
                className="text-gray-500 hover:text-gray-600 focus:outline-none"
                onClick={closeLogin}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <p className="text-2xl items-center flex my-4 font-extrabold leading-6 justify-center text-gray-800">
              SignUp with your email
            </p>
            <div className="flex flex-col">
              <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                <label className="text-black font-bold my-2">Email:</label>
                <input
                  type="text"
                  className="bg-white text-black border rounded-lg py-2"
                  placeholder="Email Address"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
                <label className="text-black font-bold my-2">Password:</label>
                <input
                  type="password"
                  className="bg-white text-black border rounded-lg py-2"
                  placeholder="Password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long",
                    },
                    pattern: {
                      value: /^(?=.*\d)(?=.*[a-zA-Z]).{6,}$/,
                      message:
                        "Password must contain at least one letter and one number",
                    },
                  })}
                />
                {errors.password && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}
                <label className="text-black font-bold my-2">
                  Confirm Password:
                </label>
                <input
                  type="password"
                  className="bg-white text-black border rounded-lg py-2"
                  placeholder="Confirm Password"
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === getValues("password") ||
                      "Passwords do not match",
                  })}
                />
                {errors.confirmPassword && (
                  <span className="text-red-500">
                    {errors.confirmPassword.message}
                  </span>
                )}
                <button
                  type="submit"
                  className="bg-red-700 w-full text-white my-6 py-3 rounded-lg font-bold"
                >
                  Create Account
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      {loginWithEmail && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white shadow rounded-lg lg:w-1/3 md:w-1/2 w-full p-10">
            <div className="flex justify-end">
              <button
                className="text-gray-500 hover:text-gray-600 focus:outline-none"
                onClick={closeLogin}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <p className="text-2xl items-center flex my-4 font-extrabold leading-6 justify-center text-gray-800">
              Login with Email
            </p>
            <div className="flex flex-col">
              <form
                className="flex flex-col"
                onSubmit={handleSubmit(onSubmitEmail)}
              >
                <label className="text-black font-bold my-2">Email:</label>
                <input
                  type="text"
                  className="bg-white text-black border rounded-lg py-2"
                  placeholder="Email Address"
                  {...register("email", { required: "This field is required" })}
                />
                {errors.email && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
                <label className="text-black font-bold my-2">Password:</label>
                <input
                  type="password"
                  className="bg-white text-black border rounded-lg py-2"
                  placeholder="Password"
                  {...register("password", {
                    required: "This field is required",
                  })}
                />
                {errors.password && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}
                <button
                  type="submit"
                  className="bg-red-700 w-full text-white my-6 py-3 rounded-lg font-bold"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
