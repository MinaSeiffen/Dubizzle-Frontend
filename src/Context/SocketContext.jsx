import { createContext, useContext, useEffect, useState } from "react"
import io from "socket.io-client"
import useCheckingForToken from "../Hooks/useCheckingForToken";

const SocketContext = createContext()

export const useSocketContext = () => {
	return useContext(SocketContext);
};

export const SocketContextProvider = ({children}) => {
    const [socket , setSocket] = useState()
    const [onlineUsers , setOnlineUsers] = useState()
    const {profile , getMyProfileFromToken } = useCheckingForToken()

    useEffect(()=>{
        getMyProfileFromToken()
    } , [])

    useEffect(()=>{
        if (profile) {
            const socket = io("http://localhost:3000",{
                query:{
                    userId:profile?._id,
                }
            })
            setSocket(socket)
            socket.on("getOnlineUsers" , (users) =>{
                setOnlineUsers(users)
            })

            return ()=> socket.close()
        }else{
            if (socket) {
                socket.close()
                setSocket(null)
            }
        }
    },[profile])

    return (
        <SocketContext.Provider value = {{socket , onlineUsers}}>
            {children}
        </SocketContext.Provider>
    )
}
