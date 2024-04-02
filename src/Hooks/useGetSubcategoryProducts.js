import { useEffect, useState } from "react"

const useGetSubcategoryProducts = () => {
    const [subcatProducts , setSubcatProducts] = useState([])
    
    const getSubCategoryProducts = async (selectedSubCategory)=>{
        try {
            const responseSubCate = await fetch(
                `http://localhost:3000/sub-category/${selectedSubCategory}`
              );
        
              if (!responseSubCate.ok) {
                throw new Error("Failed to fetch subcategory");
              }
        
              const resCat = await responseSubCate.json();
              const subCategoryId = resCat.subCategoryId

            const responseSubcategoryProducts = await fetch(`http://localhost:3000/sub-category/id/${subCategoryId}`)

            if (!responseSubcategoryProducts.ok) {
                throw new Error("faild to get sub-category Products")
            }

            const resSubcatProducts = await responseSubcategoryProducts.json()

            const subCategoryProducts = resSubcatProducts.subcategoryProducts

            setSubcatProducts(subCategoryProducts)

        } catch (error) {
            console.log(error.message)
        }
    } 

    useEffect(() => {

    },[subcatProducts])

  return {getSubCategoryProducts , subcatProducts }
}

export default useGetSubcategoryProducts