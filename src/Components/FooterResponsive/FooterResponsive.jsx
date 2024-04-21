import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai';
import { BiLogoYoutube } from 'react-icons/bi';
import { FaInstagram, FaFacebook } from "react-icons/fa6";
import { TiSocialTwitter } from "react-icons/ti";
export default function FooterResponsive() {
    return <>
        <div className='border-t-2 md:hidden block'>
            <div className='border-b-2 px-2'>

                <div className='flex justify-between py-4 '>
                    <div className='text-xl text-wrap'>
                        <p>Follow us</p>
                    </div>
                    <div>

                        <div className='flex mb-1' style={{background:"#"}}>
                            <a className='mr-2' href='#'><TiSocialTwitter className='border text-red-600 border-red-500 rounded-full p-2 w-10 h-10' /></a>
                            <a className='mr-2' href='#'><AiFillLinkedin className='border text-red-600 border-red-500 rounded-full p-2 w-10 h-10' /></a>
                            <a className='mr-2' href='#'><FaFacebook className='border text-red-600 border-red-500 rounded-full p-2 w-10 h-10' /></a>
                            <a className='mr-2' href='#'><BiLogoYoutube className='border text-red-600 border-red-500 rounded-full p-2 w-10 h-10' /></a>
                            <a className='mr-2' href='#'><FaInstagram className='border text-red-600 border-red-500 rounded-full p-2 w-10 h-10' /></a>
                        </div>

                    </div>
                </div>
            </div>
            <div className='flex justify-center my-5 px-8'>
                <div className=' w-full  justify-center flex items-center me-2 max-w-28 bg-blue-300'>
                    <img src="https://www.dubizzle.com.eg/assets/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg" className='object-cover  min-w-28 ' alt="" />
                </div>
                <div className=' w-full  justify-center flex items-center me-2 max-w-28 bg-blue-300'>
                    <img src="https://www.dubizzle.com.eg/assets/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg" className='object-cover  min-w-28 ' alt="" />
                </div>
                <div className=' w-full  justify-center flex items-center max-w-28 bg-blue-300'>
                    <img src="https://www.dubizzle.com.eg/assets/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg" className='object-cover  min-w-28 ' alt="" />
                </div>

            </div>
        </div>
        <div className='md:hidden block'>
        <div className='grid bg-gray-400 h-10 justify-center items-center ' style={{ fontSize: "12px", background: "#edeeee" }}>
            <div>
                <span className='font-bold'> Classifieds in Egypt </span> . © 2024 Dubizzle

            </div>
        </div>
        </div>
    </>
}
