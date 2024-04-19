import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./AppLayout";
import Property from "./Pages/Property/Property";
import Favorite from "./Pages/Favorite/Favorite";
import { SellPage } from "./Pages/Sell/SellPage";
import { SellFormPage } from "./Pages/SellForm/SellFormPage";
import { ProductDetails } from "./Pages/ProductDetails/ProductDetails";
import SubCategoryProducts from "./Pages/SubCategoryProducts/SubCategoryProducts";
import SellerDetails from "./Pages/SellerDetails/SellerDetails";
import EditProfile from "./Pages/EditProfile/EditProfile";
import useCheckingForToken from "./Hooks/useCheckingForToken";
import { useEffect, useState } from "react";
import Chat from "./Pages/Chat/Chat";
import MyAds from "../src/Pages/MyAds/MyAds";
import DropDownTogleDiv from "../src/Components/DropDwonTogleDiv/DropDownTogleDiv";
import { Toaster } from "react-hot-toast";
import { Footer } from "antd/es/layout/layout";
import { useDispatch } from "react-redux";
import { likedProductAction } from "./Store/Slices/Favorites";

function App() {
  const { getMyProfileFromToken, profile } = useCheckingForToken();
  const [token, setToken] = useState(null);
  const getToken = () => {
    const token = localStorage.getItem("jwt");
    setToken(token);
  };
  const dispatch = useDispatch();

  useEffect(() => {
    getMyProfileFromToken();
    getToken();
    dispatch(likedProductAction());
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <AppLayout>
              <Route index element={<Home />} />
              <Route path="search/:name?" element={<SubCategoryProducts />} />
              <Route path="searchforproperties" element={<SubCategoryProducts />} />
              <Route path="sell" element={<SellPage />} />
              <Route path="chat" element={<Chat profile={profile} />} />
              <Route path="sellform" element={<SellFormPage />} />
              <Route path="product-details/:id" element={<ProductDetails />} />
              <Route path="sellerADs/:id" element={<SellerDetails />} />
              <Route path="favorite" element={<Favorite />} />
              <Route path="EditProfile" element={<EditProfile />} />
              <Route path="property" element={<Property />} />
              <Route path="MyAds" element={<MyAds />} />
            </AppLayout>
          }
        />
        <Route path="/togle" element={<DropDownTogleDiv togleV={true} />} />
      </Routes>
      <Toaster />
      <Footer />
    </Router>
  );
}

export default App;
