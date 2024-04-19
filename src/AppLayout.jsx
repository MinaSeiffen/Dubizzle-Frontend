import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/HeaderComp/Header";
import Footer from "./Components/FooterComp/Footer";
import { Toaster } from "react-hot-toast";
import useCheckingForToken from "./Hooks/useCheckingForToken";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { likedProductAction } from "./Store/Slices/Favorites";

export default function AppLayout() {
  const { profile } = useCheckingForToken();
  const [token, setToken] = useState(null);
  const getToken = () => {
    const token = localStorage.getItem("jwt");
    setToken(token);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    getToken();
  }, []);

  useEffect(() => {
    dispatch(likedProductAction());
  }, [dispatch]);

  return (
    <>
      <Header profile={profile}></Header>
      <div className="md:mt-32 mt-30">
        <Outlet />
        <Toaster />
      </div>
      <Footer></Footer>
    </>
  );
}
