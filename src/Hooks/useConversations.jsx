import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useGetConversations = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);
    const token = localStorage.getItem("jwt");
    if (!token) {
      navigate("/");
      toast.error("please login first")
    }

    useEffect(() => {
        const getConversations = async () => {
            setLoading(true);
            try {
                const res = await fetch("http://localhost:3000/users/sideBar" , {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                      },
                });
                const data = await res.json();
                
                if (data.error) {
                    throw new Error(data.error);
                }
                setConversations(data.allUsers);
            } catch (error) {
                console.log(error.message)
            } finally {
                setLoading(false);
            }
        };

        getConversations();
    }, []);

    return { loading, conversations };
};

export default useGetConversations;
