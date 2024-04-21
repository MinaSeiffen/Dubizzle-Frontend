
import SelectComponent from './SelectComponent'
import { useForm } from 'react-hook-form'

import arrowDown from '../../assets/images/iconArrowDown_noinline.ec05eae7013321c193965ef15d4e2174.svg'
import { useEffect, useState } from 'react'
import useUpdateProfile from '../../Hooks/useUpdateProfile'
import useGetUserData from '../../Hooks/useGetUserData'
function EditProfile() {

  const yearOptions = []
  const monthOptions = []
  const dayoptions = []
  const genderoptions = ["Male", "Female", "Prefer not to say"]
  // const [day, setDay] = useState("")
  //   const [month, setMonth] = useState("")
  //   const [year, setYear] = useState("")
       
        const [updateUser, setupdateUser] = useState({
          name: "",
          email: "",
          dateOfBirth:{
            day:"",
            month:"",
            year: ""
          },
          gender: "",
          // about: "",
          phoneNumber: "",
          password: "",
          avatar: "",
          location: "",
          roles: {},
          refreshToken: "",
          likedProducts: []
        })
  // const [userDATA,setUserDATA] = useState(null)

  for(let i = 2006; i >= 1950; i--) {
    yearOptions.push(i)
  }
  for (let i = 1; i <= 12; i++) {
    monthOptions.push(i)
  }
  for (let i = 1; i <= 31; i++) {
    dayoptions.push(i)
  }

  const { register, handleSubmit ,formState: { errors } } = useForm();

  const { UpdateProfile } = useUpdateProfile()
  const submitData = (data) => {
    console.log(data)
    // e.preventDefault();
    let userInfo = {
      ...updateUser,
      name: data.name,
      email: data.email,
      dateOfBirth:{
        day: data.day,
        month: data.month,
        year: data.year,
      },
      gender: data.gender,
      // about: data.about,
      phoneNumber: data.phone
    }
    UpdateProfile(userInfo)
    setupdateUser(userInfo)
    
  };
  const { getUserData } = useGetUserData()
  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUserData()
      setupdateUser(userData)
    }
    fetchData()
    // console.log(userDATA)
  }, [getUserData])

  const yearDefaultValue = 'YYYY'
  const monthDefaultValue = 'MM'
  const dayDefaultValue = 'DD'
  const genderDefaultValue = 'Select your gender'
  const [selectedYear,setselectedYear] = useState(yearDefaultValue)
  const [selectedMonth,setselectedMonth] = useState(monthDefaultValue)
  const [selectedDay,setselectedDay] = useState(dayDefaultValue)
  const [selectedGender,setselectedGender] = useState(genderDefaultValue)
    
 

  return (
  <div className='pt-9'>
    <div className="xl:w-vw-70/100  md:w-vw-90/100 flex mx-auto mb-12 mt-5 py-4 px-6 rounded-md border border-gray-300">
      <form onSubmit={handleSubmit(submitData)} className='w-full'>
        <p className='text-xl font-bold border-0 border-b pb-4 mb-4'>Edit profile</p>
        <div className='personal-info flex gap-1 pb-10 border-b border-gray-200'>
          <div className="w-full sm:w-1/2">
            <div className='flex flex-col'>
              <label htmlFor="name">Name</label>

              <input type='text' defaultValue={updateUser.name} name='name' {...register("name", { required: true })} id='name' className='border mt-2 p-3 rounded-lg border-gray-300 hover:outline-none' />
            </div>
            <div className='flex flex-col mt-4'>
              <p className='mb-2'>Date of birth</p>
              <div className='flex w-full justify-between gap-2'>
                <select name='day' defaultValue={selectedDay}  onChange={(e)=>{setselectedDay(e.target.value)}} {...register("day")} className="text-md w-1/3  px-3 py-3 rounded-lg border flex justify-between">
                  <img src={arrowDown}  width={22} height={22} className={` ms-4 transition-all`} />
                  <option disabled hidden className="hover:cursor-pointer w-full ps-2 hover:bg-slate-100  py-1  text-sm"  >
                      DD </option>
                  {dayoptions.map((element, index) => (
                     <option key={index}  className="hover:cursor-pointer w-full ps-2 hover:bg-slate-100  py-1  text-sm"  >
                      {element} </option>
                  ))}
                </select>
                <select name='month'  defaultValue={selectedMonth}  onChange={(e)=>{setselectedMonth(e.target.value)}} {...register("month")} className="text-md w-1/3 px-3 py-3 rounded-lg border flex justify-between">
                <option  disabled hidden className="hover:cursor-pointer w-full ps-2 hover:bg-slate-100  py-1  text-sm"  >
                      MM </option>
                  {monthOptions.map((element, index) => (
                    <option key={index} className="hover:cursor-pointer border-none w-full ps-2 hover:bg-slate-100  py-1  text-sm"  >
                      {element} </option>
                  ))}
                </select>
                <select name='year' defaultValue={selectedYear}  onChange={(e)=>{setselectedYear(e.target.value)}}  {...register("year")} className="text-md w-1/3 px-3 py-3 rounded-lg border flex justify-between">
                <option disabled hidden className="hover:cursor-pointer w-full ps-2 hover:bg-slate-100  py-1  text-sm"  >
                      YYYY </option>
                  {yearOptions.map((element, index) => (
                    <option key={index} value={element} className="hover:cursor-pointer w-full ps-2 hover:bg-slate-100  py-1  text-sm"  >
                      {element} </option>
                  ))}
                </select>

              </div>
            </div>
            <div className='flex flex-col mt-4'>
              <label htmlFor="name" className='mb-2'>Gender</label>
              <select name='gender' {...register("gender")} defaultValue={selectedGender}  onChange={(e)=>{setselectedGender(e.target.value)}} className="text-md  px-3 py-3 rounded-lg border flex justify-between">
              <option disabled hidden className="hover:cursor-pointer w-full ps-2 hover:bg-slate-100  py-1  text-sm"  >
              Select your gender </option>
                {genderoptions.map((element, index) => (
                  <option key={index} value={element} className="hover:cursor-pointer w-full ps-2 hover:bg-slate-100  py-1  text-sm"  >
                    {element} </option>
                ))}
              </select>
              {/* <SelectComponent name="Select your gender"  selectedOptions={genderoptions} selectWidth="full" maxHeight="h-vh-17/100" /> */}
            </div>
            {/* <div className='mt-5'>
              <textarea name='about'  {...register("about")} defaultValue="About me" className='p-2  w-full h-28 text-sm md:h-36 border outline-none rounded-md'></textarea>
            </div> */}
          </div>
          <div className='p-4 hidden  sm:w-1/2 sm:block mt-3'>
            <div className='w-3/4 border border-gray-300 p-3 mt-1'>
              <div className='flex mb-1'>
                <svg xmlns="http://www.w3.org/2000/svg" fill='red' width="25" height="25" fillRule="evenodd" viewBox="0 0 1024 1024"><path d="M318 279.3h-54.8l-61.5-61.5v-54.9h54.8l61.6 61.5v54.9zm194-38.8l-38.8-38.8V124L512 85.3l38.8 38.8v77.6L512 240.5zm426.7 232.7L899.9 512h-77.6l-38.8-38.8 38.8-38.8H900l38.8 38.8zm-737-38.8l38.8 38.8-38.8 38.8H124l-38.8-38.8 38.8-38.8h77.6zm620.6-216.6l-61.5 61.5h-54.9v-54.9l61.6-61.5h54.8v54.9zm-200.6 404a154.9 154.9 0 0 1-47.6 32.4l-23.3 35.6v55h-77.6v-55L450 654.3a155.3 155.3 0 0 1-47.7-252 155.4 155.4 0 0 1 219.5 0 155.3 155.3 0 0 1 0 219.4zM473.2 861h77.6v-38.8h-77.6V861zM512 279.3a233 233 0 0 0-116.4 434.3V900l38.8 38.8h155.2l38.8-38.8V713.6A233 233 0 0 0 512 279.3z"></path></svg>
                <span className='font-bold text-sm mt-1'>Why is it important?</span>
              </div>
              <p className='text-xs text-gray-600'>
                Dubizzle is built on trust. Help other people get to know you.
                Tell them about the things you like. Share your favorite brands,
                books, movies, shows, music, food. And you will see the results…
              </p>
            </div>
          </div>
        </div>
        <div className='Contact pb-10 sm:border-b sm:border-gray-200'>
          <p className='text-md font-bold  mt-4 mb-2'>Contact information</p>
          <div className='block sm:flex gap-4 mb-8'>
            <div className='w-full sm:w-1/2 border mb-2 sm:mb-0 rounded-lg p-3 flex'>
              <span className='pr-3 border-r border-gray-400 mr-2 text-xs mt-1'>+20</span>
              <input name='phone' type='text' {...register("phone")} defaultValue={updateUser.phoneNumber} placeholder='Phone number' className='w-full outline-none' />
            </div>
            <div className='w-full sm:w-1/2'>
              <p className='text-xs'>This is the number for buyers contacts, reminders, and other notifications.</p>
            </div>
          </div>
          <div className='block sm:flex gap-4'>
            <div className='sm:w-1/2 mb-2 sm:mb-0 border rounded-lg p-3 '>
              <input name='email' defaultValue={updateUser.email} type='text'{...register("email", { required: true })} placeholder='hjgjgy@gmail.com' className='w-full outline-none' />
            </div>
            <div className='sm:w-1/2'>
              <p className='text-xs'>We won&apos;t reveal your email to anyone else nor use it to send you spam.</p>
            </div>
          </div>
        </div>
        {/* <div className='Optional-info pb-2 border-b border-gray-200'>
          <p className='text-md font-bold  mt-4 mb-2'>Optional information</p>
          <div className='flex mb-2'>
            <div className='w-1/2'>
              <p>Facebook</p>
              <p className='text-xs'>Sign in with Facebook and discover your trusted connections to buyers</p>
            </div>
            <div className='w-1/2'>
              <div className='p-3 text-center font-bold rounded-lg border border-red-400 w-2/3'>Contact</div>
            </div>
          </div>
          <div className='flex mb-2'>
            <div className='w-1/2'>
              <p>Google</p>
              <p className='text-xs'>Connect your Dubizzle account to your Google account for simplicity and ease</p>
            </div>
            <div className='w-1/2'>
              <div className='p-3 text-center font-bold rounded-lg border border-red-400 w-2/3'>Contact</div>
            </div>
          </div>
        </div> */}
        <div className="flex justify-between mt-4">
          <a href='Home.jsx'><div className='font-bold border-b hidden md:block border-black'>Discard</div></a>
          <button type='submit' className='p-3 h-fit text-center w-2/4 mx-auto md:w-fit md:mx-0 font-bold bg-red-600 hover:bg-red-700 rounded-lg text-white'>
            Save changes</button>
        </div>
      </form>
    </div>
    <div className="md:w-vw-74/100 sm:mx-auto mb-7 sm:mt-5 sm:py-4 px-6 rounded-md sm:border sm:border-gray-300">
      <p className='text-xl font-bold w-full border-0 sm:border-b sm:pb-4 mb-1 sm:mb-4'>Delete this account</p>
      <p className='text-sm sm:text-xl inline sm:block sm:font-bold mb-1'>Are you sure you want to delete your account?</p>
      <p className='text-sm inline sm:block'>Fill the form and your request will be directed to our Customer Support Team</p>
      <p className='mt-5 font-bold border-b w-fit block border-red-500 sm:border-black'>Submit request</p>
    </div>
  </div>)
}

export default EditProfile;