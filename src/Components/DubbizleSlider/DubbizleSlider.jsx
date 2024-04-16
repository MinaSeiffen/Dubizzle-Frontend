
import { Carousel } from 'antd';
import slideImage1 from '../../assets/images/dubbizleSlider1.jpeg'
import slideImage2 from '../../assets/images/dubbizleSlider2.jpeg'
import slideImage3 from '../../assets/images/dubbizleSlider3.jpeg'
const DubbizleSlider = () => {


    return (
        <>
            <Carousel autoplay autoplaySpeed={7000} className=''> { /* change the name of conatear*/}
                <div >
                    <img className='w-full rounded-md' src={slideImage1} />
                </div>
                <div>
                    <img className='w-full rounded-md' src={slideImage2} />
                </div>
                <div>
                    <img className='w-full rounded-md' src={slideImage3} />
                </div>
            </Carousel>
        </>
    );
}

export default DubbizleSlider;
