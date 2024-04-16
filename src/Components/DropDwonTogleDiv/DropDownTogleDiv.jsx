import TopHeader from '../TopHeader/TopHeader'
import './DropDownTogleDiv.css'
import ButtonViewCreateProfile from './ButtonViewCreateProfile/ButtonViewCreateProfile'
import FooterTogleDiv from './FooterTogleDiv/FooterTogleDiv'
import ButtonNavigatePages from './ButtonNavigatePages/ButtonNavigatePages'
export default function DropDownTogleDiv({ togleV }) {
    return (
        <div className={(false) ? "hidden" : "block  top-0 min-h-screen "}>
            <div className='border-b-2 py-2'>
                <TopHeader />
            </div>
            <div className="flex  justify-center  bg-gray-100 ">
                <div
                    className="w-full max-w-full rounded-lg bg-white   divide-y divide-gray-200">
                    <div>
                        <div aria-label="header" className="flex space-x-4 items-center p-4">
                            <div aria-label="avatar" className="flex mr-auto items-center space-x-4">
                                <img
                                    src="https://www.dubizzle.com.eg/assets/brandLogoWithBackground.1a8aea0bfa51e64828b5ffa35fb00dcb.png"
                                    alt="avatar Evan You"
                                    className="w-16 h-16 shrink-0 rounded-full"
                                />
                                <div className="space-y-2 flex flex-col flex-1 truncate">
                                    <div className=" relative leading-tight text-gray-900">
                                        <span className="flex">
                                            <span className="truncate relative ">
                                                Enter to your account
                                                <span
                                                    aria-label="verified"
                                                    className="absolute top-1/2 -translate-y-1/2 right-0 inline-block rounded-full"
                                                >
                                                </span>
                                            </span>
                                        </span>
                                    </div>
                                    <p className="font-normal text-base leading-tight text-gray-500 truncate">
                                        <a onClick={() => { console.log("login to account") }}>
                                            Log in to your account
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <ButtonViewCreateProfile content={"Veiw your profile"} func={() => { console.log("veiw your profile") }} />
                    </div>

                    <div aria-label="navigation" className="py-2 px-2">
                        <ButtonNavigatePages pageName={"start selling"} iconPage={
                            <svg width={"20"} height={"30"} fillRule="evenodd" data-aut-id="icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" classNameName="_2608ceeb"><path d="M670.72 128l42.67 128h182.6l42.67 42.67v554.67L896 896H128l-42.67-42.66V298.67L128 256h182.6l42.67-128h317.44zm-61.44 85.33H414.72l-42.67 128H170.66v469.33h682.67V341.33H651.94l-42.66-128zm-97.28 128c117.63 0 213.33 95.7 213.33 213.33S629.63 768 512 768s-213.33-95.7-213.33-213.33S394.37 341.33 512 341.33zm0 85.34c-70.61 0-128 57.38-128 128s57.39 128 128 128 128-57.39 128-128-57.39-128-128-128z"></path></svg>
                        } />
                        <ButtonNavigatePages pageName={"Favoriteg"} iconPage={
                            <img className='' src="https://www.dubizzle.com.eg/assets/iconHeart_noinline.752f43cc1a8fed78adeed73225a090db.svg" alt="" />
                        } />
                        <ButtonNavigatePages pageName={"My ads"} iconPage={
                            <img className='' src="	https://www.dubizzle.com.eg/assets/iconMyAds_noinline.81f6b0cc8a3d16d363fb142e1489d035.svg" alt="" />
                        } />
                        <ButtonNavigatePages pageName={"Chat"} iconPage={
                            <img className='' src="https://www.dubizzle.com.eg/assets/iconChat_noinline.31f5df4a6a21fc770ed6863958662677.svg" alt="" />

                        } />
                        <ButtonNavigatePages pageName={"Notification"} iconPage={
                            <img className='' src="https://www.dubizzle.com.eg/assets/iconNotifications_noinline.4444f6b42acbe30d772d80ef1225f574.svg" alt="" />

                        } />


                    </div>
                    <div aria-label="navigation" className="py-2 px-2 ">
                        <ButtonNavigatePages pageName={"Blog"} iconPage={
                                <img className='' src="	https://www.dubizzle.com.eg/assets/iconBlog_noinline.affa509f5dae88eca26398bb8abbe0f7.svg" alt="" />

                        } />
                        <ButtonNavigatePages pageName={"Help"} iconPage={
                                <img className='' src="https://www.dubizzle.com.eg/assets/iconHelp_noinline.f07d255148323e318808a50c52097d0c.svg" alt="" />

                        } />
                        <ButtonNavigatePages pageName={"العربيه"} iconPage={
                                <img className='' src="	https://www.dubizzle.com.eg/assets/iconLanguage_noinline.0b49698508387ab3b033212bea3ada47.svg" alt="" />

                        } />
                       
                      
                    </div>
                    <FooterTogleDiv />
                </div>
            </div>
        </div>
    )
}
