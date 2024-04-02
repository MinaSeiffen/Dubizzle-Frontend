import { useState } from "react";

const useGetUserWithAds = () => {
  const [userData, setUserData] = useState(null);
  const [userAds, setUserAds] = useState(null);
  const getUserWithAds = async (userId) => {
    try {
      const userResponse = await fetch(
        `http://localhost:3000/users/getUser/${userId}`
      );

      if (!userResponse.ok) {
        throw new Error("failed to get that user");
      }

      const { userData } = await userResponse.json();
      setUserData(userData);

      const productResponse = await fetch(
        `http://localhost:3000/products/getUserAds/${userId}`
      );

      if (!productResponse.ok) {
        throw new Error("failed to get Ads from that user Id");
      }

      const { Ads } = await productResponse.json();
      setUserAds(Ads);
    } catch (error) {
      console.log(error.message);
    }
  };


  return { userData, getUserWithAds, userAds };
};

export default useGetUserWithAds;
