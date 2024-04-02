
import { Carousel } from 'antd';

const DubbizleSlider = (props) => {


    return (
        <>
            <Carousel autoplay autoplaySpeed={7000} className=''> { /* change the name of conatear*/}
                <div >
                    <img className='w-full' src={props.img} />
                </div>
                <div>
                    <img className='w-full' src={props.img} />
                </div>
            </Carousel>
        </>
    );
}

export default DubbizleSlider;
