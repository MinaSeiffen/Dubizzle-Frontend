import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './MinMAxFormArea.module.css'


const MinMAxFormArea = (props) => {
    const [formArea, setFormArea] = useState(false)
    const [selectedMaxArea, setSelectedMaxArea] = useState('Any')
    const [selectedMinArea, setSelectedMinArea] = useState(0)

    const { register } = useForm({ mode: 'onChange' });

    const showFormArea = () => {
        (formArea == false) ? setFormArea(true) : setFormArea(false)
    }
    const areaMaximum = (element) => {
        setSelectedMaxArea(element)
    }
    const areaMinimum = (element) => {
        setSelectedMinArea(element)
    }
    const resetFunc = () => {
        //
    }
    const jac = () => {
        const minAreaLength = Array.from(selectedMinArea).length
        const maxAreaLength = Array.from(selectedMaxArea).length

        if (props.name == 'Area')
            return `${selectedMinArea}-${selectedMaxArea}`
        else if (props.name == 'Price') {
            let selectedMin = Number(selectedMinArea.toString().replace(/,/g, ''))
            let selectedMax = Number(selectedMaxArea.toString().replace(/,/g, ''))
            if (minAreaLength >= 5 && minAreaLength <= 8) {
                setSelectedMinArea(`${selectedMin / 1000}K`)
            } else if (minAreaLength > 8) {
                setSelectedMinArea(`${selectedMin / 1000000}M`)
            }
            else if (maxAreaLength >= 5 && maxAreaLength <= 8) {
                setSelectedMaxArea(`${selectedMax / 1000}K`)
            } else if (maxAreaLength > 8) {
                setSelectedMaxArea(`${selectedMax / 1000000}M`)
            }

            return `${selectedMinArea}-${selectedMaxArea}`
        }
    }
    return (
        <div>
            <div className='flex flex-col w-full  px-1 relative' >
                <label className='form-label text-left'>{props.name}</label>

                <input type='text'{...register(`${props.name}`)} readOnly value={`${jac()}(${props.missure})`} className={`${styles.formControl} `} onClick={showFormArea} />

                {formArea && <div className='absolute top-24  p-4 bg-white right-1 text-black' style={{ width: '20vw', borderRadius: "8px" }}>
                    <div className='bed text-black text-left'>
                        <div className='flex gap-2'>
                            <div className='w-3/6'>
                                <p className='text-sm'>Minimum</p>
                                <select className='border border-gray-400 w-full p-2 rounded-lg' onChange={(e) => { areaMinimum(e.target.value) }}>
                                    {props.minOption.map((element, index) => (
                                        <option key={index} value={element} >{element}</option>
                                    ))}
                                </select>
                            </div>
                            <div className='w-3/6'>
                                <p className='text-sm'>Maximum</p>
                                <select className='border border-gray-400 w-full p-2 rounded-lg' onChange={(e) => { areaMaximum(e.target.value) }}>
                                    {props.maxOption.map((element, index) => (
                                        <option key={index} value={element}>{element}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-2 mt-4'>
                        <div className='w-3/6 border border-red-500 p-2 hover:bg-slate-50 hover:cursor-pointer rounded-md font-bold text-sm' size='large' onClick={resetFunc}>Reset</div>
                        <div className='w-3/6 text-white p-2 hover:bg-red-700 hover:cursor-pointer bg-red-600 rounded-md font-bold text-sm' size='large'>Apply</div>
                    </div>
                </div>}
            </div>
        </div>
    );
}

export default MinMAxFormArea;
