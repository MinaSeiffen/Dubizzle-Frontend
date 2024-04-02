import { useParams } from "react-router-dom";
import useGetUserWithAds from "../../Hooks/useGetUserWithAds";
import { useEffect } from "react";
import SellerProfile from "../../Components/SellerProfile/SellerProfile";

const SellerDetails = () => {
  const { userData, getUserWithAds, userAds } = useGetUserWithAds();
  const { id } = useParams();

  useEffect(() => {
    getUserWithAds(id);
  }, [id]);
  return (
    <> 
    <SellerProfile userAds={userAds} userData={userData} ></SellerProfile>
    </> 
  )

}

export default SellerDetails