import { useState } from "react"

const useGetMyAdds = () => {
    const [adds , setAdds] = useState(null)

    const getMyAdds = async ()=>{
        const token = localStorage.getItem('jwt')
        console.log(token)
        try {
            if (token){
                const addsResponse = await fetch(`https://dubizzle-backend.onrender.com/products/getmyadds`,{
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                })
                
                if (addsResponse.ok) {
                    const {myProducts} = await addsResponse.json()
                    setAdds(myProducts)
                }
            }
        } catch (error) {
            console.log(error.message)
        }
    }

  return {getMyAdds , adds}
}

export default useGetMyAdds