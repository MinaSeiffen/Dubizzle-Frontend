import mobile from '../../assets/images/brandMobileApp.0053aa25c45ccb88f3056b71272aab15.webp'
import appGallery from '../../assets/images/iconAppGallery_noinline.6092a9d739c77147c884f1f7ab3f1771.svg'
import appStore from '../../assets/images/iconAppStoreEN_noinline.a731d99c8218d6faa0e83a6d038d08e8.svg'
import googlePlay from '../../assets/images/iconGooglePlayEN_noinline.9892833785b26dd5896b7c70b089f684.svg'
import { TiSocialTwitter } from "react-icons/ti";
import { AiFillLinkedin } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { BiLogoYoutube } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
    return <>
        <div className='md:block hidden'>
        <div className='bg-slate-50 mt-8  '>
            <div className='border-b flex justify-between max-[992px]:justify-center min-w-full container'>
                <div className='my-auto max-[992px]:hidden'>
                    <p className='text-2xl font-bold '>Find amazing deals on the go.</p>
                    <p className='tw-text-red-600 text-2xl font-bold'>Download the app now!</p>
                </div>
                <div className='grid gap-8 grid-flow-col'>
                    <div className='mr-14'>
                        <img className="size-36" src={mobile} />
                    </div>
                    <div className='grid gap-1 grid-cols-3 justify-end'>
                        <img className="size-32" src={appStore} />
                        <img className="size-32" src={googlePlay} />
                        <img className="size-32" src={appGallery} />
                    </div>
                </div>
            </div>
            <div className='pt-3 grid gap-4 justify-items-start max-[667px]:justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 container '>
                <div>
                    <p className='font-bold text-sm mb-3'>ABOUT US</p>
                    <div>
                        <a className='text-xs size-fit block pb-1 mb-1 hover:text-red-500' href='#'>About Dubizzle Group</a>
                        <a className='text-xs size-fit block pb-1 mb-1 hover:text-red-500' href='#'>Careers</a>
                        <a className='text-xs size-fit block pb-1 mb-1 hover:text-red-500' href='#'>Contact Us</a>
                        <a className='text-xs size-fit block pb-1 mb-1 hover:text-red-500' href='#'>Dubizzle for Businesses</a>
                    </div>
                </div>
                <div>
                    <p className='font-bold text-sm mb-3'>DUBIZZLE</p>
                    <div>
                        <a className='text-xs size-fit block pb-1 mb-1 hover:text-red-500' href='#'>Blog</a>
                        <a className='text-xs size-fit block pb-1 mb-1 hover:text-red-500' href='#'>Help</a>
                        <a className='text-xs size-fit block pb-1 mb-1 hover:text-red-500' href='#'>Sitemap</a>
                        <a className='text-xs size-fit block pb-1 mb-1 hover:text-red-500' href='#'>Terms of use</a>
                        <a className='text-xs size-fit block pb-1 mb-1 hover:text-red-500' href='#'>Privacy Policy</a>
                    </div>
                </div>
                <div>
                    <p className='font-bold text-sm mb-3'>COUNTRIES</p>
                    <div className='grid grid-cols-2'>
                        <div>
                            <a className='text-xs size-fit block pb-1 mb-1 hover:text-red-500' href='#'>Bahrain</a>
                            <a className='text-xs size-fit block pb-1 mb-1 hover:text-red-500' href='#'>Jordan</a>
                            <a className='text-xs size-fit block pb-1 mb-1 hover:text-red-500' href='#'>Kuwait</a>
                            <a className='text-xs size-fit block pb-1 mb-1 hover:text-red-500' href='#'>Lebanon</a>
                            <a className='text-xs size-fit block pb-1 mb-1 hover:text-red-500' href='#'>Oman</a>
                        </div>
                        <div>
                            <a className='text-xs size-fit block pb-1 mb-1 hover:text-red-500' href='#'>Qatar</a>
                            <a className='text-xs size-fit block pb-1 mb-1 hover:text-red-500' href='#'>Saudi Arabia</a>
                            <a className='text-xs size-fit block pb-1 mb-1 hover:text-red-500' href='#'>UAE</a>
                        </div>
                    </div>
                </div>
                <div>
                    <p className='font-bold text-sm mb-3'>FOLLOW US</p>
                    <div className='flex mb-1'>
                        <a className='mr-2' href='#'><TiSocialTwitter className='border text-red-600 border-red-500 rounded-full p-2 w-10 h-10' /></a>
                        <a className='mr-2' href='#'><AiFillLinkedin className='border text-red-600 border-red-500 rounded-full p-2 w-10 h-10' /></a>
                        <a className='mr-2' href='#'><FaFacebook className='border text-red-600 border-red-500 rounded-full p-2 w-10 h-10' /></a>
                        <a className='mr-2' href='#'><BiLogoYoutube className='border text-red-600 border-red-500 rounded-full p-2 w-10 h-10' /></a>
                        <a className='mr-2' href='#'><FaInstagram className='border text-red-600 border-red-500 rounded-full p-2 w-10 h-10' /></a>
                    </div>
                    <div className='flex'>
                        <img className="size-20 mr-2" src={appStore} />
                        <img className="size-20 mr-2" src={googlePlay} />
                        <img className="size-20 mr-2" src={appGallery} />
                    </div>
                </div>
            </div>
            <div className='bg-slate-100 container'>
                <div className='flex justify-end'>
                    <p className='text-xs p-4 mr-5'><span className='font-bold text-purple-600'>Classifieds in Egypt</span> &copy; 2024 Dubizzle</p>
                </div>
            </div>
        </div>
        </div>
    </>
}

export default Footer;
