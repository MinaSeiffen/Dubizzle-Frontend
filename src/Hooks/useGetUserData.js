import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

const useGetUserData = () => {
  
    const navigate = useNavigate()
  
    const  getUserData = async () =>{
        try {
            const token = localStorage.getItem("jwt")
            if(!token){
                navigate('/')
                toast.error('Please login first!')
            }
            const userDataResponse = await fetch('http://localhost:3000/users/user',
            {
                method:'GET',
                headers:{
                    'Content-Type':'application/json',
                    Authorization:`Bearer ${token}`
                }
            })

            const userData = await userDataResponse.json()
            return userData;
        } catch (error) {
            console.log("error in getting user data")
        }
    }
    return {getUserData}
    
}

export default useGetUserData