import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"


const useUpdateProfile = () => {
    const navigate = useNavigate()

    const UpdateProfile = async (user) => {
        const token = localStorage.getItem("jwt")

        if (!token) {
            navigate('/')
            toast.error("Login First")
        }
        try {
            const updateProfileResponse = await fetch('http://localhost:3000/users', {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                  },
                  body: JSON.stringify(user),
            });
            console.log(updateProfileResponse);
            const updateProfileData = await updateProfileResponse.json()

          
            if(updateProfileData) { 
                alert("Profile Updated Successfully");
                navigate("/");
             }
            else {
                alert("There was an issue in updatting. Please try again.");
            }
        } catch (error) {
            console.error("Error in updatting:", error);
        }
    }
    return { UpdateProfile }

}

export default useUpdateProfile