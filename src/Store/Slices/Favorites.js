import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";



export const likedProductAction = createAsyncThunk('get/likedProducts', async () => {
    try {
        const token = localStorage.getItem('jwt')
        const likedProductResponse = await fetch('http://localhost:3000/users/favourites',
            {
                method:"GET",
                headers:{
                    'Content-Type': 'application/json' , 
                    Authorization: `Bearer ${token}`
                }
            })
            if(!likedProductResponse){
                console.log("there no data fetch")
            }
            const likedProducts = await likedProductResponse.json()
            return likedProducts.favourites
    } catch (error) {
        console.log("error in getting user favourite")
    }
}
)

const FavoritesSlice = createSlice({
    name: "favourite",
    initialState: { favourite: [] },
    extraReducers:(builder)=>{
        builder.addCase(likedProductAction.fulfilled,(state,action)=> {
            state.favourite = action.payload
        })
    }
})

export default FavoritesSlice.reducer

