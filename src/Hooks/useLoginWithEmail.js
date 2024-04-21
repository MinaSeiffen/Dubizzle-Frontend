import useLogin from "./useLogin";
import toast from "react-hot-toast"


const useLoginWithEmail = () => {
    const {setToken , setData} = useLogin()

    const loginUser = async (formData) => {
        try {
            const response = await fetch("https://dubizzle-backend.onrender.com/api/login/email-password", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: formData.email,
                    password: formData.password,
                }),
            });
            
          const { accessToken , message } = await response.json();
          
          if (!response.ok) {
            toast.error(message)
            window.location.reload();
              setToken(null);
              setData(null)
              localStorage.removeItem("jwt");
          }

          setToken(accessToken);
          localStorage.setItem("jwt", accessToken )
          window.location.reload();
        } catch (error) {
          throw new Error(error.message);
        }
      };

  return {loginUser} 
}

export default useLoginWithEmail