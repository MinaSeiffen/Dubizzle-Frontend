import { useEffect, useState } from 'react'
import useConversation from '../Zustand/useConversation'
import toast from "react-hot-toast"

const useSendMessage = () => {
    const [loading , setLoading] = useState(false)
    const {messages , setMessages , selectedConversation} = useConversation()
    const token = localStorage.getItem("jwt");
    
    const sendMessages= async (message) => {
        setLoading(true)
        try {

            const res = await fetch(`http://localhost:3000/chat/send/${selectedConversation._id}`,{
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                  },
                body: JSON.stringify({message})
            })

            const data = await res.json()
            if (data.error) {
                throw new Error(data.error)
            }

            setMessages([...messages , data])

            
        } catch (error) {
            toast.error(error.message)
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        console.log(messages , selectedConversation)
    },[])

    return {loading , sendMessages}
}

export default useSendMessage