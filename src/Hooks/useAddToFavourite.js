import toast from "react-hot-toast"

const useAddToFavourite = () => {
    
    
    const addProductToFavourite = async (productId) => {
        try {
            const token = localStorage.getItem('jwt')
            if (!token) {
                toast.error("Please login first")
            }
              await fetch('http://localhost:3000/users/addFavourite',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    },
                    body: JSON.stringify({_id:productId })
                })
            //     console.log(response)
            // const { addResponse } = await response.json()
            // if (addResponse) {
            //     console.log('add product to favourite successfully');
            // }else{
            //     console.log(`kaka ${addResponse}`);
            // }
        } catch (error) {
            console.log(error.message);
            console.log('error in adding product to favourite');
        }
    }

    return {addProductToFavourite}


}

export default useAddToFavourite