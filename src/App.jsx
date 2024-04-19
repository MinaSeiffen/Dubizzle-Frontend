import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppLayout from "./AppLayout";
import Home from "./Pages/Home/Home";
import SubCategoryProducts from "./Pages/SubCategoryProducts/SubCategoryProducts";
import SellPage from "./Pages/Sell/SellPage";
import Chat from "./Pages/Chat/Chat";
import SellFormPage from "./Pages/SellForm/SellFormPage";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import SellerDetails from "./Pages/SellerDetails/SellerDetails";
import Favorite from "./Pages/Favorite/Favorite";
import EditProfile from "./Pages/EditProfile/EditProfile";
import Property from "./Pages/Property/Property";
import MyAds from "../src/Pages/MyAds/MyAds";
import DropDownTogleDiv from "../src/Components/DropDwonTogleDiv/DropDownTogleDiv";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={AppLayout} />
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
    </Router>
  );
}

export default App;
