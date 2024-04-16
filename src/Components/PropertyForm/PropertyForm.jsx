import { useForm } from 'react-hook-form'
import styles from './PropertyForm.module.css'
import { useState } from 'react';
import { Button } from 'antd';
import { MdOutlineCheck } from "react-icons/md";
import { useNavigate } from 'react-router';
const PropertyForm = () => {
    const { register, handleSubmit } = useForm({ mode: 'onChange' });
    const navigate = useNavigate()
    const findProperty = (data) => {
        navigate(`/searchforproperties?propertyType=${data.propertyType}&&location=${data.location}&&Price=${data.Price}&&BedBath=${data.BedBath}&&Area=${data.Area}`)
        console.log(data)
    }
    const [formApear, setformApear] = useState(false)
    const [checkMarkBed, setCheckMarkBed] = useState([false, false, false, false, false])
    const [checkMarkBath, setCheckMarkBath] = useState([false, false, false, false, false])
    const [bed, setBed] = useState([])
    const [bath, setBath] = useState([])


    const showForm = () => {
        (formApear == false) ? setformApear(true) : setformApear(false)
    }
    const toggleMarkBed = (element, index) => {
        if (bed.length == 0)
            setBed([element])
        else {
            if (bed.includes(element)) {
                const newArr = bed.filter((ele) => ele != element)
                setBed(newArr)
            } else {
                setBed([...bed, element])
            }
        }
        const newcheckMark = [...checkMarkBed]
        newcheckMark[index] = !checkMarkBed[index]
        setCheckMarkBed(newcheckMark);
    };

    const toggleMarkBath = (element, index) => {
        if (bath.length == 0)
            setBath([element])
        else {
            if (bath.includes(element)) {
                const newArr = bath.filter((ele) => ele != element)
                setBath(newArr)
            }
            else
                setBath([...bath, element])
        }
        const newcheckMark = [...checkMarkBath]
        newcheckMark[index] = !checkMarkBath[index]
        setCheckMarkBath(newcheckMark);
    };
    const resetBedBathFunc = () => {
        setCheckMarkBath([])
        setCheckMarkBed([])
        setBath([])
        setBed([])
    }
    //////////////////////////////////////
    const minPriceOption = ['1000', '5000', '10000', '50000', '100000', '500000', '1000000', '5000000', '10000000']
    const maxPriceOption = ['10000', '50000', '100000', '500000', '1000000', '5000000', '10000000', '50000000', '100000000', '500000000']

    const [formArea, setFormArea] = useState(false)
    const [formPrice, setFormPrice] = useState(false)


    const [selectedMaxArea, setSelectedMaxArea] = useState('Any')
    const [selectedMinArea, setSelectedMinArea] = useState(0)
    const [selectedMaxPrice, setSelectedMaxPrice] = useState('Any')
    const [selectedMinPrice, setSelectedMinPrice] = useState(0)
    const [propertyPurpose,setpropertyPurpose] = useState('Sales')
  

    const areaMaximum = (element) => {
        setSelectedMaxArea(element)
    }
    const areaMinimum = (element) => {
        setSelectedMinArea(element)
    }
    const priceMaximum = (element) => {
        setSelectedMaxPrice(element)
    }
    const priceMinimum = (element) => {
        setSelectedMinPrice(element)
    }

    const showFormArea = () => {
        (formArea == false) ? setFormArea(true) : setFormArea(false)
    }
    const showFormPrice = () => {
        (formPrice == false) ? setFormPrice(true) : setFormPrice(false)
    }
    const resetPriceFunc = () => {
        setSelectedMinPrice(0)
        setSelectedMaxPrice("Any")
    }
    const resetAreaFunc = () => {
        setSelectedMinArea(0)
        setSelectedMaxArea("Any")
    }


    return (
        <form onSubmit={handleSubmit(findProperty)} className='flex flex-wrap' style={{ width: '73vw' }}>
            <div className='flex flex-col w-1/4 px-1' >
                <label className='form-label text-left'>Purpose</label>
                <select {...register('purpose')} onChange={(e)=>{setpropertyPurpose(e.target.value)}} className={styles.formControl} >
                    <option value='Sales'>Sales</option>
                    <option value='Rent'>Rent</option>
                </select>
            </div>
            <div className='flex flex-col w-2/4  px-1'>
                <label className='form-label text-left'>Location</label>
                <select {...register('location')} className={styles.formControl} >
                    <option value={'cairo'}>Cairo</option>
                    <option value={'alexandria'}>Alexandria</option>
                    <option value={'sohag'}>Sohag</option>
                    <option value={'asuit'}>Asuit</option>
                </select>
            </div>
            <div className='flex flex-col w-1/4  px-1'>
                <label className='form-label text-left'>Property type</label>
                <select {...register('propertyType')} className={styles.formControl} >
                    {propertyPurpose=="Sales" ?['Apartments for Sale','Villas For Sale'].map((element,index)=>(
                        <option key={index} value={element}>{element}</option>
                    )):['Apartments for Rent','Villas For Rent'].map((element,index)=>(
                        <option key={index} value={element}>{element}</option>))}
                </select>
            </div>
            <div className='flex flex-col w-1/4  px-1 relative' >
                <label className='form-label text-left'>Beds / Bathrooms</label>

                <input type='text'{...register('BedBath')} readOnly value={`${[...bed]}-${[...bath]}`} className={`${styles.formControl} `} onClick={showForm} />

                {formApear && <div className='absolute top-24  p-3 bg-white right-0 text-black' style={{ width: '20vw', borderRadius: "8px" }}>
                    <div className='bed text-black text-left'>
                        <p className='mb-2 font-bold text-sm'>Beds</p>
                        {[1, 2, 3, 4, 5, 6].map((element, index) => (
                            <Button key={index} className={`${styles.buttonBedBath}`} type='text' onClick={() => { toggleMarkBed(element, index) }}>
                                {checkMarkBed[index] && <MdOutlineCheck className='text-red-500 mt-1 mr-1' />}
                                {element}</Button>

                        ))}</div>
                    <div className='Baths text-black text-left'>
                        <p className='mb-2 font-bold text-sm'>Baths</p>
                        <div>
                            {[1, 2, 3, 4, 5].map((element, index) => (
                                <Button key={index} className={`${styles.buttonBedBath}`} type='text' onClick={() => { toggleMarkBath(element, index) }}>
                                    {checkMarkBath[index] && <MdOutlineCheck className='text-red-500 mt-1 mr-1' />}
                                    {element}</Button>

                            ))}
                        </div>
                    </div>
                    <div className='flex gap-2 mt-3'>
                        <div className='w-3/6 border border-red-500 p-2 hover:bg-slate-50 hover:cursor-pointer rounded-md font-bold text-sm' size='large' onClick={resetBedBathFunc}>Reset</div>
                        <div className='w-3/6 text-white p-2 hover:bg-red-700 hover:cursor-pointer bg-red-600 rounded-md font-bold text-sm' size='large' >Apply</div>
                    </div>
                </div>}
            </div>
            <div className='flex flex-col w-1/4  px-1 relative' >
                <label className='form-label text-left'>Area</label>
                <input type='text'{...register('Area')} readOnly value={`${selectedMinArea}-${selectedMaxArea}`} className={`${styles.formControl} `} onClick={showFormArea} />
                {formArea && <div className='absolute top-24  p-4 bg-white right-1 text-black' style={{ width: '20vw', borderRadius: "8px" }}>
                    <div className='bed text-black text-left'>
                        <div className='flex gap-2'>
                            <div className='w-3/6'>
                                <p className='text-sm'>Minimum</p>
                                <select className='border border-gray-400 w-full p-2 rounded-lg' onChange={(e) => { areaMinimum(e.target.value) }}>
                                    {[40, 50, 100, 150, 200].map((element, index) => (
                                        <option key={index} value={element} >{element}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='w-3/6'>
                                <p className='text-sm'>Maximum</p>
                                <select className='border border-gray-400 w-full p-2 rounded-lg' onChange={(e) => { areaMaximum(e.target.value) }}>
                                    {['Any', '1,000', '2,000', '3,000', '4,000', '5,000'].map((element, index) => (
                                        <option key={index} value={element}>{element}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-2 mt-4'>
                        <div className='w-3/6 border border-red-500 p-2 hover:bg-slate-50 hover:cursor-pointer rounded-md font-bold text-sm' size='large' onClick={resetAreaFunc}>Reset</div>
                        <div className='w-3/6 text-white p-2 hover:bg-red-700 hover:cursor-pointer bg-red-600 rounded-md font-bold text-sm' size='large' >Apply</div>
                    </div>
                </div>}
            </div>
            <div className='flex flex-col w-1/4  px-1 relative' >
                <label className='form-label text-left'>Price</label>
                <input type='text'{...register('Price')} readOnly value={`${selectedMinPrice}-${selectedMaxPrice}`} className={`${styles.formControl} `} onClick={showFormPrice} />
                {formPrice && <div className='absolute top-24  p-4 bg-white right-1 text-black' style={{ width: '20vw', borderRadius: "8px" }}>
                    <div className='bed text-black text-left'>
                        <div className='flex gap-2'>
                            <div className='w-3/6'>
                                <p className='text-sm'>Minimum</p>
                                <select className='border border-gray-400 w-full p-2 rounded-lg' onChange={(e) => { priceMinimum(e.target.value) }}>
                                    {minPriceOption.map((element, index) => (
                                        <option key={index} value={element} >{element}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='w-3/6'>
                                <p className='text-sm'>Maximum</p>
                                <select className='border border-gray-400 w-full p-2 rounded-lg' onChange={(e) => { priceMaximum(e.target.value) }}>
                                    {maxPriceOption.map((element, index) => (
                                        <option key={index} value={element}>{element}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-2 mt-4'>
                        <div className='w-3/6 border border-red-500 p-2 hover:bg-slate-50 hover:cursor-pointer rounded-md font-bold text-sm' size='large' onClick={resetPriceFunc}>Reset</div>
                        <div className='w-3/6 text-white p-2 hover:bg-red-700 hover:cursor-pointer bg-red-600 rounded-md font-bold text-sm' size='large' >Apply</div>
                    </div>
                </div>}
            </div>
            <button type='submit' className='w-1/4 text-md bg-red-500 mt-6 rounded-lg hover:bg-red-600'>Find</button>
        </form>

    );
}

export default PropertyForm;
