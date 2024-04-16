import React from 'react'
import ButtonViewCreateProfile from '../ButtonViewCreateProfile/ButtonViewCreateProfile'
import { RiLogoutBoxLine } from "react-icons/ri";
export default function FooterTogleDiv({ checkLog }) {
    return (
        <div>
            <div className=''>
                <div aria-label="footer" className="pt-2 px-3">
                    <button
                        onClick={() => { }}
                        type="button"
                        className="text-white font-bold bg-red-600 flex items-center justify-center space-x-3 py-3 px-4 w-full leading-6 text-lg rounded-md"
                    >
                        Log in
                    </button>
                </div>
                <div className='mt-3'>
                    <ButtonViewCreateProfile content={"Create Account"} func={() => { console.log("hello create account") }} />

                </div>
            </div>
            <div className='hidden'>
                <div aria-label="footer" className="pt-2 px-2">
                    <nav className="grid grid-flow-col gap-1  justify-start text-xl">
                        <div className='flex me-3 items-center'>
                           <RiLogoutBoxLine/>
                           </div>
                        <div>
                            <button>
                               log out

                            </button>
                        </div>
                        <div className='flex'>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}
