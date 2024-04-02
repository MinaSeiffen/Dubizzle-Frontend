import { useState } from "react";
import useLogin from "./useLogin";

const useRegister = () => {
  const [data, setData] = useState(null);
  const { setToken } = useLogin();

  const registerUser = async (formData) => {
    try {
      const response = await fetch("http://localhost:3000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const { accessToken } = await response.json();
      setToken(accessToken);
      
      localStorage.setItem("jwt", accessToken);
    } catch (error) {
      throw new Error(error.message);
    }
  };

  return { setData, registerUser, data };
};

export default useRegister;
