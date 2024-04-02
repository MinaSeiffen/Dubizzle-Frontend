import { useState } from "react"
import arrowDown from '../../assets/images/iconArrowDown_noinline.ec05eae7013321c193965ef15d4e2174.svg'
function SelectComponent(props) {
    const { selectedOptions, name ,selectWidth,maxHeight} = props;
    const [showSortedList, setShowSortedList] = useState(false)
    const [rotated, setrotated] = useState('')
    const [selectSort, setSelectSort] = useState(`${name}`)
    const toggleSortedList = () => {
        (rotated == '') ? setrotated('rotate-180') : setrotated('')
        setShowSortedList(!showSortedList)
    }
    const handleSelect = (element) => {
        setSelectSort(element)
    }
    
    return (
     
                       <select>
                        {selectedOptions.map((element, index) => (
                            <option key={index} value={element} className="hover:cursor-pointer w-full ps-2 hover:bg-slate-100  py-1  text-sm" onClick={() => { handleSelect(element) }} >
                                {element} </option>
                        ))}
                        </select>
                
          
    )
}

export default SelectComponent