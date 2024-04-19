import "./App.css";
import Home from "./Pages/Home/Home";
import { Route, Router, RouterProvider, createBrowserRouter } from "react-router-dom";
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
import { Switch } from "antd";
import Header from "./Components/HeaderComp/Header";
import { Toaster } from "react-hot-toast";
import { Footer } from "antd/es/layout/layout";
import { useDispatch } from "react-redux";
import { likedProductAction } from "./Store/Slices/Favorites";

function App() {
  const { getMyProfileFromToken, profile } = useCheckingForToken();

  useEffect(() => {
    getMyProfileFromToken();
  }, []);

  const [token , setToken] = useState(null)
  const getToken = () => {
    const token = localStorage.getItem("jwt");
    setToken(token);
};
const dispatch = useDispatch();
  useEffect(() => {
    getMyProfileFromToken(token);
    getToken();
  }, [profile , getMyProfileFromToken , token , getToken]);

  useEffect(() => {
    dispatch(likedProductAction());
  },[likedProductAction()])

  const routesPage = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        { index: true, element: <Home /> },
        { path: "/search/:name?", element: <SubCategoryProducts /> },
        { path: "/searchforproperties", element: <SubCategoryProducts /> },
        { path: "/sell", element: <SellPage /> },
        { path: "/chat", element: <Chat profile={profile} /> },
        { path: "/sellform", element: <SellFormPage /> },
        { path: "/product-details/:id", element: <ProductDetails /> },
        { path: "/sellerADs/:id", element: <SellerDetails /> },
        { path: "favorite", element: <Favorite /> },
        { path: "/EditProfile", element: <EditProfile /> },
        { path: "/property", element: <Property /> },
        { path: "/MyAds", element: <MyAds /> },
      ],
    },
    { path: "/togle", element: <DropDownTogleDiv togleV={true} /> },
  ]);

  useEffect(() => {}, [profile]);

  return  (
    <Router>
      <Header profile={profile}></Header>
      <div className="md:mt-32 mt-30">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/search/:name?" component={SubCategoryProducts} />
          <Route path="/searchforproperties" component={SubCategoryProducts} />
          <Route path="/sell" component={SellPage} />
          <Route path="/chat" component={Chat} />
          <Route path="/sellform" component={SellFormPage} />
          <Route path="/product-details/:id" component={ProductDetails} />
          <Route path="/sellerADs/:id" component={SellerDetails} />
          <Route path="/favorite" component={Favorite} />
          <Route path="/EditProfile" component={EditProfile} />
          <Route path="/property" component={Property} />
          <Route path="/MyAds" component={MyAds} />
          <Route path="/togle" component={DropDownTogleDiv} />
        </Switch>
        <Toaster />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
