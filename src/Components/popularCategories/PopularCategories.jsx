import vehicle from '../../assets/images/vehicles.svg'
import Properties from '../../assets/images/property.svg'
import mobiles from '../../assets/images/mobiles.svg'
import jobs from '../../assets/images/jobs.svg'
import electronics from '../../assets/images/electronics.svg'
import furniture from '../../assets/images/furniture.svg'
import fashion from '../../assets/images/fashion.svg'
import animals from '../../assets/images/animals.svg'
import services from '../../assets/images/services.svg'
import business from '../../assets/images/business.svg'
import hobby from '../../assets/images/bikes.svg'
import kids from '../../assets/images/kids.svg'
import OneProperty from '../OneProperty/OneProperty'


export default function PopularCategories() {

    return (
        <div className=' mt-5 md:block hidden'>
            <h1 className=' font-semi bold text-2xl mb-2 mt-6 max-[667px]:text-center'>Popular Categories</h1>
            <div className='pt-3 grid justify-items-start max-[667px]:justify-items-center gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'>
                <OneProperty category="Vehicles" subCategories1="Cars for Sale" subCategories2="Cars for Rent" image={vehicle} />
                <OneProperty category="Properties" subCategories1="Apartments for Sale" subCategories2="Apartments for Rent" image={Properties} />
                <OneProperty category="Mobiles & Tablets" subCategories1="Mobile Phones" subCategories2="Tablets" image={mobiles} />
                <OneProperty category="Jobs" subCategories1="Accounting, Finance & Banking" subCategories2="Engineering" image={jobs} />
                <OneProperty category="Electronics & Appliances" subCategories1="TV - Audio - Video" subCategories2="Computers - Accessories" image={electronics} />
                <OneProperty category="Furniture & Decor" subCategories1="Bathroom" subCategories2="Bedroom" image={furniture} />
                <OneProperty category="Fashion & Beauty" subCategories1="Women’s Clothing" subCategories2="Men’s Clothing" image={fashion} />
                <OneProperty category="Pets" subCategories1="Birds - Pigeons" subCategories2="Cats" image={animals} />
                <OneProperty category="Kids & Babies" subCategories1="Baby & Mom Healthcare" subCategories2="Baby Clothing" image={kids} />
                <OneProperty category="Hobbies" subCategories1="Antiques - Collectibles" subCategories2="Bicycles" image={hobby} />
                <OneProperty category="Businesses & Industrial" subCategories1="Agriculture" subCategories2="Construction" image={business} />
                <OneProperty category="Services" subCategories1="Business" subCategories2="Car" image={services} />

            </div>
        </div>
    );
}


