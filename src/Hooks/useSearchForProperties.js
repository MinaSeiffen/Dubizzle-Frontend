import { useEffect, useState } from "react"

const useSearchForProperties = () => {
    const [foundProperties, setFoundProperties] = useState(null)

    const searchForProperties = async(propertyType , locationParam , priceRange , bedBath , area)=>{
        const [bedRooms = "", bathRooms = ""] = bedBath.split("-")
        
        try {
            const searchResponse = await fetch(`http://localhost:3000/products/search/${propertyType}?location=${locationParam}&rangePrice=${priceRange}&bedRooms=${bedRooms}&area=${area}&bathRooms=${bathRooms}`)
            
            console.log(propertyType , locationParam , priceRange , bedBath , area , bedRooms , bathRooms)
            if (searchResponse.ok) {
                const {matchedProducts} = await searchResponse.json();
                setFoundProperties(matchedProducts)
            }
        } catch (error) {
            console.log(error.message)
        }
    }
    
    useEffect(()=>{

    },[foundProperties])

  return {foundProperties , searchForProperties}
}

export default useSearchForProperties