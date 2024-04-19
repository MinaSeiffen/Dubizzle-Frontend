import "./App.css";
import Home from "./Pages/Home/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import Property from "./Pages/Property/Property";
import { Provider } from "react-redux";
import StroeConfig from "./Store/Store";
import Favorite from "./Pages/Favorite/Favorite";
import { SellPage } from "./Pages/Sell/SellPage";
import { SellFormPage } from "./Pages/SellForm/SellFormPage";
import { MenuSelectionProvider } from "./Context/MenuSelectionContext";
import { ProductDetails } from "./Pages/ProductDetails/ProductDetails";
import SubCategoryProducts from "./Pages/SubCategoryProducts/SubCategoryProducts";
import SellerDetails from "./Pages/SellerDetails/SellerDetails";
import EditProfile from "./Pages/EditProfile/EditProfile";
import useCheckingForToken from "./Hooks/useCheckingForToken";
import { useEffect } from "react";
import Chat from "./Pages/Chat/Chat";
import { SocketContextProvider } from "./Context/SocketContext";
import MyAds from "../src/Pages/MyAds/MyAds"
import DropDownTogleDiv from "../src/Components/DropDwonTogleDiv/DropDownTogleDiv"

function App() {
  const { getMyProfileFromToken, profile } = useCheckingForToken();

  useEffect(() => {
    getMyProfileFromToken();
  }, []);

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
    { path: "/togle", element:<DropDownTogleDiv togleV={true} /> },
  ]);

  useEffect(() => {}, [profile]);

  return (
    <>
      <MenuSelectionProvider>
            <SocketContextProvider>
        <Provider store={StroeConfig}>
          <RouterProvider router={routesPage}>
              <AppLayout />
          </RouterProvider>
        </Provider>
            </SocketContextProvider>
      </MenuSelectionProvider>
    </>
  );
}

export default App;
