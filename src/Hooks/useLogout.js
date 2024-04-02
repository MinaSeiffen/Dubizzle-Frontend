import { useEffect } from "react";
import useLogin from "./useLogin";
import useRegister from "./useRegister";

const useLogout = () => {
  const { token, setToken } = useLogin();
  const {setData} = useRegister()

  useEffect(() => {
    async function readingToken(){
      const tkn = localStorage.getItem("jwt");
      setToken(tkn);
    }
    readingToken()
  }, []);

  async function logout() {
    try {
      const response = await fetch("http://localhost:3000/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });

      if (response) {
        localStorage.removeItem("jwt");
        setToken(null);
        setData(null);
        window.location.reload();
      } else {
        console.error("Logout failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  }
  return { logout };
};

export default useLogout;
