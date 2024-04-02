
import './CategorySub.css'

export default function CategorySub() {
    let cat = [
        'Vehicles',
        'Properties',
        'Mobiles & Tablets',
        'Jobs',
        'Electronics & Appliances',
        'Furniture & Decor',
        'More Categories'
    ]
    let cat2 = [
        { name: 'Vehicles', img: "https://www.dubizzle.com.eg/assets/vehicles_noinline.f0509d15f4ed1cd4cb243005f067d354.svg" },
        { name: 'Properties', img: "https://www.dubizzle.com.eg/assets/property-for-rent_noinline.afd1b8bf81720cc538aba324a684f145.svg" },
        { name: 'Mobiles & Tablets', img: "	https://www.dubizzle.com.eg/assets/mobiles_noinline.09d825b23596fb63149b624156d2b3a9.svg" },
        { name: 'Jobs', img: "https://www.dubizzle.com.eg/assets/jobs_noinline.6dd8e91ce71156d44df7794f802bab46.svg" },
        { name: 'Electronics & Appliances', img: "https://www.dubizzle.com.eg/assets/electronics_noinline.c7ce1083110c746b61c464da1aee2cac.svg" },
        { name: 'Furniture & Decor', img: "https://www.dubizzle.com.eg/assets/furniture_noinline.4b36f5f518ccf6cdd3a14a4eeb4da403.svg" },
        { name: 'More Categories', img: "https://www.dubizzle.com.eg/assets/property-for-rent_noinline.afd1b8bf81720cc538aba324a684f145.svg" },
        { name: 'More Categories', img: "https://www.dubizzle.com.eg/assets/property-for-rent_noinline.afd1b8bf81720cc538aba324a684f145.svg" },

    ]
    let objarr = [
        { id: 1, name: 'sub 1', mliv: ['multi 1', 'multi 2', 'multi 3', 'multi 4'], },
        { id: 2, name: 'sub 2', mliv: ['multi 1', 'multi 2', 'multi 3', 'multi 4'], },
        { id: 3, name: 'sub 3', mliv: ['multi 1', 'multi 2', 'multi 3', 'multi 4'], },
        { id: 4, name: 'sub 4', mliv: ['multi 1', 'multi 2', 'multi 3', 'multi 4'], }]

    return <>
        <div className='md:block hidden'>
            <div className='mb-5 flex-wrap flex text-x font-bold justify-between'>
                {cat.map((catigory, key) => {
                    return <div className="dropdown">

                        <p className='text-wrap fs-6 fw-bold' key={key}>{catigory}</p>

                        <div className="dropdown-content">
                            {objarr.map((sub, i) => {

                                return <a className='' href="#" key={i}>{sub.name}

                                </a>
                            })}

                        </div>
                    </div>
                })}

            </div>
        </div>
        <div className='md:hidden'>


            <div className='ps-1 mb-2 '><p className='text-xl '>Explore categories</p></div>
            <div className='min-h-fit overflow-x-scroll hide-scrollbar'>
                <div className='grid grid-flow-col my-3 gap-4 px-2'>
                    {cat2.map((category2, key) => {
                        return <div
                            className='flex flex-col sm:min-w-20 min-w-10 sm:max-w-35 max-w-20 sm:mx-2 mx-2' onClick={()=>{console.log("hello")}}>
                            <div className='flex justify-center rounded bg-red-100'>
                                <img src={category2.img} className='sm:p-2 p-2 category-icons' />
                            </div>
                            <div>
                                <p className='text-style'>{category2.name}</p>
                            </div>
                        </div>

                    })}


                </div>
            </div>
        </div>
    </>
}
