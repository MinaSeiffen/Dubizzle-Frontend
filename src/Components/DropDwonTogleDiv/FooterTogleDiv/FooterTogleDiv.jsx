import React, { useState } from 'react'
import ButtonViewCreateProfile from '../ButtonViewCreateProfile/ButtonViewCreateProfile'
import { RiLogoutBoxLine } from "react-icons/ri";
import useLogin from '../../../Hooks/useLogin';
import useRegister from '../../../Hooks/useRegister';
import useLoginWithEmail from '../../../Hooks/useLoginWithEmail';
import Login from '../../Login/Login';
export default function FooterTogleDiv({ checkLog, profile }) {
    const [facebook, setFacebook] = useState(null);
    const [google, setGoogle] = useState();
    const { login } = useLogin();
    const { data, setData, registerUser } = useRegister();
    const { loginUser } = useLoginWithEmail();

    return (
        <div>
            <div className=''>
                <div aria-label="footer" className="pt-2 px-3">
                   

                        <div className="flex item-center text-white font-semibold bg-red-600 justify-center h-11 space-x-3 px-4 w-full leading-6 text-lg rounded-md">
                            {!facebook && !google && !data && !profile ? (
                                <Login
                                    google={google}
                                    facebook={facebook}
                                    login={login}
                                    setFacebook={setFacebook}
                                    setGoogle={setGoogle}
                                    registerUser={registerUser}
                                    setData={setData}
                                    loginUser={loginUser}
                                />
                            ) : (
                                <div></div>
                            )}
                    </div>
                </div>
               
            </div>
            
        </div>
    )
}
