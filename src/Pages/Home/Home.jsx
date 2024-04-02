
import './Home.css'
import CategorySub from '../../Components/CategorySubComp/CategorySub'

import DubbizleSlider from '../../Components/DubbizleSlider/DubbizleSlider'
import PopularCategories from '../../Components/popularCategories/PopularCategories'
import CategoriesCard from '../../Components/CategoriesCard/CategoriesCard'
import { useEffect, useState } from 'react'
import slideImage from '../../assets/images/dubbizleSlider.jpg'


export default function Home() {


    const [Category, setCategory] = useState([])
    const [Products, setProducts] = useState([])

    // async function getProducts() {
    //     await fetch("http://localhost:3000/products/get").then((res) => {
    //         return res.json()
    //     }).then((data) => {

    //         setProducts(data.slice(0, 4))
    //         console.log(Products)
    //     }
    //     )
    //         .catch((err) => { console.log(err) })
    // }

    // http://localhost:3000/categories
    async function getCategory() {
        await fetch("http://localhost:3000/categories")
            .then((res) => {
                return res.json()
            })
            .then(({ AllCategories }) => {

                console.log(AllCategories.slice(1, 4))
                setCategory(AllCategories.slice(1, 4))
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return <>

        <div style={{ position: 'relative', marginBottom: '200px' }} className='md:mt-36 md:container '  >

            <CategorySub></CategorySub>
            <DubbizleSlider name="home" img={slideImage} />
            <PopularCategories></PopularCategories>


            <CategoriesCard subcatName={"Cars for sale"} hidden={""} ></CategoriesCard>
            <CategoriesCard subcatName={"Cars for Rent"} hidden={""}></CategoriesCard>
            <CategoriesCard subcatName={"Apartments for Rent"} hidden={""}></CategoriesCard>
            <CategoriesCard subcatName={"Apartments for Sale"} hidden={""}></CategoriesCard>
            <CategoriesCard subcatName={"Villas For Sale"} hidden={""} ></CategoriesCard>
            <CategoriesCard subcatName={"Villas For Rent"} hidden={""}></CategoriesCard>

        </div>

    </>
}


