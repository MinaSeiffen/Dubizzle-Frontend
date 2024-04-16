import CategoriesCard from '../../Components/CategoriesCard/CategoriesCard';
import FeaturedAgencies from '../../Components/FeaturedAgencies/FeaturedAgencies';
import PropertyForm from '../../Components/PropertyForm/PropertyForm';
import styles from './Property.module.css'
// import banner from '../../assets/images/propertiesVerticalBanner.png'
const Property = () => {
    return (
        <>
            <div className='xl:px-16 px-9 mt-16 md:mt-40'>
                <div className={styles.banner} style={{ marginBottom: '50px' }}>
                    <div className='z-50 mb-5'>
                        <h1 className='font-bold mb-2 text-sm md:text-2xl xl:text-4xl'>Your next property is here.</h1>
                        <p className='text-xs md:text-xl xl:text-2xl'>Let&apos;s find a home that&apos;s perfect for you</p>
                    </div>
                    <PropertyForm />
                </div>
                <div>
                    <CategoriesCard subcatName={"Villas For Sale"} hidden={""} ></CategoriesCard>
                    <CategoriesCard subcatName={"Apartments for Sale"} hidden={""}></CategoriesCard>
                </div>
                <div>
                    <FeaturedAgencies />
                </div>
            </div>
        </>
    );
}

export default Property;
