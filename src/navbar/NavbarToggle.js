import { ArrowForward, Close, Create, Explore, KeyboardArrowRightRounded, LogoutRounded, PersonRounded, SettingsRounded, Support } from '@mui/icons-material';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { appActions } from '../context/app-slice';
import { Switch } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
// import useNavbar from '../../marketplacecomponents/navbar/useNavbar';

const NavbarToggle = ({ toggleCollapse }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const appCtx = useSelector((state) => state.app);
    const dark = appCtx.isDarkMode;
    const label = { inputProps: { 'aria-label': 'Color switch demo' } };
    // const { logo, collapsed, logoSrc, userId, toggleCollapse, visible, open, handleVisible } = useNavbar();
    const bgColor = localStorage.getItem('backgroundColor') === undefined ? 'bg-black' : localStorage.getItem('backgroundColor');

    return (
        // <>
        //     {/* <div style={{
        //         position: "fixed",
        //         right: "123px",
        //     }}
        //         className={`${!props.visible && 'hidden'
        //             } ${dark ? 'bg-black' : 'bg-white'} z-50 md:top-[85px] top-[217px] opacity-0 xl:opacity-100`}>
        //         <div style={{
        //             width: "0",
        //             height: "0",
        //             borderLeft: "5px solid transparent",
        //             borderRight: "5px solid transparent",
        //             borderBottom: "5px solid rgb(235 231 231 / 94%)",
        //             // backgroundColor:"white",

        //         }}></div>
        //     </div>
        //     <div
        //         className={`${!props.visible && 'hidden'
        //             } ${dark ? 'bg-black' : 'bg-white'} dropdownBox  z-50 flex flex-col fixed md:top-[90px] top-[223px]
        //         `}
        //         style={{ borderTop: "1px solid rgb(235 231 231 / 94%)", borderBottom: "1px solid rgb(235 231 231 / 94%)", color: dark ? 'white' : 'black' }}>
        //         {appCtx.isLoggedIn ? (<>
        //             <button
        //                 className={` ${dark ? 'bg-black text-white hover:bg-gray-600' : 'bg-white hover:bg-lightHoverGrey'} dropdownOptionsScreen transition-all ease-out duration-300`}

        //                 onClick={() => { navigate(`/profile/${props.userId}`) }}
        //             >
        //                 <div className={'flex gap-2 drop bg-blend-color-dodge ml-[30px] '}>
        //                     <PersonOutlineOutlinedIcon style={{ color: dark ? 'white' : 'black' }} className="dropdownIcon" />
        //                     <div style={{ color: dark ? 'white' : 'black' }} className="dropdownName">Profile</div>

        //                 </div>

        //             </button>
        //             <div className='flex justify-center items-center'>
        //                 <div className="bg-gray-200 w-[87%] h-[1px]"></div>
        //             </div>
        //             {/* <button
        //             className='dropdownOptionsScreen transition-all ease-out duration-300 '

        //         >
        //             <div className={'flex gap-2 drop bg-blend-color-dodge ml-[30px] '}>
        //                 <SettingsOutlinedIcon style={{color:dark?'white':'black'}} className="dropdownIcon" />
        //                 <div style={{color:dark?'white':'black'}} className="dropdownName">Settings</div>
        //             </div>

        //         </button>
        //         <div className='flex justify-center items-center'>
        //             <div className="bg-gray-200 w-[87%] h-[1px]"></div>
        //         </div>
        //         <button
        //             className='dropdownOptionsScreen transition-all ease-out duration-300 '
        //         >
        //             <div className={'flex gap-2 drop bg-blend-color-dodge ml-[30px] '}>
        //                 <ContactSupportOutlinedIcon style={{color:dark?'white':'black'}} className="dropdownIcon" />
        //                 <div style={{ color:dark?'white':'black' }} className=" dropdownName">{`Chat and Support`}</div>

        //             </div>

        //         </button> */}
        //             {/* <div className='flex justify-center items-center'>
        //             <div className="bg-gray-200 w-[87%] h-[1px]"></div>
        //         </div> */}
        //             {/* <button
        //                 className={` ${dark ? 'bg-black text-white hover:bg-gray-600' : 'bg-white hover:bg-lightHoverGrey'} dropdownOptionsScreen transition-all ease-out duration-300`}

        //                 onClick={() => { dispatch(appActions.logout(undefined)); navigate(`/signup`) }}
        //             >
        //                 <div className={'flex gap-2 drop bg-blend-color-dodge ml-[30px] '}>
        //                     <LogoutIcon style={{ color: dark ? 'white' : 'black' }} className="dropdownIcon" />
        //                     <div style={{ color: dark ? 'white' : 'black' }} className="dropdownName flex"><div>Log</div><div className="ml-[10px]">Out</div></div>

        //                 </div>

        //             </button>

        //             <div className='flex justify-center items-center'>
        //                 <div className="bg-gray-200 w-[87%] h-[1px]"></div>
        //             </div>
        //         </>) : ''
        //         }
        // <button
        //     className={` ${dark ? 'bg-black text-white hover:bg-gray-600' : 'bg-white hover:bg-lightHoverGrey'} dropdownOptionsScreen transition-all ease-out duration-300`}

        //     onClick={() => { dispatch(appActions.toggleDarkMode(undefined)) }}
        // >
        //     <div className={'flex gap-2 drop bg-blend-color-dodge ml-[30px] '}>
        //         {!dark ?
        //             <LightModeIcon style={{ color: 'black' }} className="dropdownIcon mt-[5px]" />
        //             :
        //             <DarkModeIcon style={{ color: 'white' }} className="dropdownIcon mt-[5px]" />
        //         }
        //         <div className='flex justify-between w-[84%]'>
        //             {dark ?
        //                 <div className="mt-[5px]">Dark Mode</div>
        //                 :
        //                 <div className="mt-[5px]">Light Mode</div>
        //             }
        //             <Switch {...label} defaultValue={dark} checked={dark} color="default" />

        //         </div>

        //     </div>

        // </button>
        //     </div> */}
        // </>

        <div className={`top-0 w-[100%] h-[100vh] ${dark?`bgColor`:`bg-white`}`}>
            <div className="flex justify-between items-end h-[100px] pb-[14px] ">
                <div className="flex justify-between ml-[12px] w-[100%] mr-[12px]">
                    <div className={`text-[19px] font-bold font-sans ${dark?`text-white`:`text-black`}`}>
                        Menu
                    </div>
                    <div onClick={toggleCollapse} style={{color:dark?"white":"black"}}>
                        <Close />
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <div className="bg-gray-200 w-[100%] h-[1px]"></div>
            </div>
            <Link to="/explore" className={`flex justify-between items-center pl-[12px] mr-[12px] h-[100px] ${dark ? 'bg-black text-white hover:bg-gray-600' : 'bg-white hover:bg-lightHoverGrey'} w-[100%] dropdownOptionsScreen transition-all ease-out duration-300`}>

                <div className='flex flex-col'>
                    <div>
                        <div className='flex items-center'>
                            <div><Explore style={{ fontSize: "32px" }} /></div>
                            <div>Explore</div>
                        </div>
                    </div>
                    <div className='text-[12px]'>Explore vast number of items and collections</div>
                </div>
                <div><ArrowForward /></div>
            </Link>
            <div className='flex justify-center items-center'>
                <div className="bg-gray-200 w-[100%] h-[1px]"></div>
            </div>

            <div className={`flex justify-between items-center pl-[12px] mr-[12px] h-[100px] ${dark ? 'bg-black text-white hover:bg-gray-600' : 'bg-white hover:bg-lightHoverGrey'} w-[100%] dropdownOptionsScreen transition-all ease-out duration-300`}>

                <div className='flex flex-col'>
                    <div>
                        <div className='flex items-center'>
                            <div><Create style={{ fontSize: "32px" }} /></div>
                            <div>Create</div>
                        </div>
                    </div>
                    <div className='text-[12px]'>Explore vast number of items and collections</div>
                </div>
                <div><ArrowForward /></div>
            </div>
            <div className='flex justify-center items-center'>
                <div className="bg-gray-200 w-[100%] h-[1px]"></div>
            </div>
            <div className={`flex justify-between items-center pl-[12px] mr-[12px] h-[100px] ${dark ? 'bg-black text-white hover:bg-gray-600' : 'bg-white hover:bg-lightHoverGrey'} w-[100%] dropdownOptionsScreen transition-all ease-out duration-300`}>
                <div className='flex flex-col'>
                    <div>
                        <div className='flex items-center'>
                            <div><SettingsOutlinedIcon style={{ fontSize: "32px" }} /></div>
                            <div>Settings</div>
                        </div>
                    </div>
                    <div className='text-[12px]'>Explore vast number of items and collections</div>
                </div>
                <div><ArrowForward /></div>
            </div>
            <div className='flex justify-center items-center'>
                <div className="bg-gray-200 w-[100%] h-[1px]"></div>
            </div>
            <div className={`flex justify-between items-center pl-[12px] mr-[12px] h-[100px] ${dark ? 'bg-black text-white hover:bg-gray-600' : 'bg-white hover:bg-lightHoverGrey'} w-[100%] dropdownOptionsScreen transition-all ease-out duration-300`}>
                <div className='flex flex-col'>
                    <div>
                        <div className='flex items-center'>
                            <div><Support style={{ fontSize: "32px" }} /></div>
                            <div>Support</div>
                        </div>
                    </div>
                    <div className='text-[12px]'>Explore vast number of items and collections</div>
                </div>
                <div><ArrowForward /></div>
            </div>
            <div className='flex justify-center items-center'>
                <div className="bg-gray-200 w-[100%] h-[1px]"></div>
            </div>
            <button
                className={` ${dark ? 'bg-black text-white hover:bg-gray-600' : 'bg-white hover:bg-lightHoverGrey'} w-[100%] dropdownOptionsScreen transition-all ease-out duration-300`}

                onClick={() => { dispatch(appActions.toggleDarkMode()) }}
            >
                <div className={'flex gap-2 drop bg-blend-color-dodge ml-[13px] justify-between'}>
                    <div className='flex'>
                        {!dark ?
                            <LightModeIcon style={{ color: 'black' }} className="dropdownIcon mt-[5px]" />
                            :
                            <DarkModeIcon style={{ color: 'white' }} className="dropdownIcon mt-[5px]" />
                        }
                        <div className='flex justify-between w-[84%] ml-[7px]'>
                            {dark ?
                                <div className="mt-[5px]">Dark Mode</div>
                                :
                                <div className="mt-[5px]">Light Mode</div>
                            }
                        </div>
                    </div>
                    <Switch {...label} defaultValue={dark} checked={dark} color="default" />



                </div>

            </button>
            <div className='flex justify-center items-center'>
                <div className="bg-gray-200 w-[100%] h-[1px]"></div>
            </div>
            <div className={` flex items-center ${dark ? 'bg-black text-white hover:bg-gray-600' : 'bg-white hover:bg-lightHoverGrey'} w-[100%]  dropdownOptionsScreen transition-all ease-out duration-300`}
                onClick={() => { dispatch(appActions.logout(undefined));dispatch(appActions.setCart([])); dispatch(appActions.setCartQuantity()); navigate(`/signup`) }}>
                <div className='flex flex-col'>
                    <div>
                        <div className='flex items-center'>
                            <div><LogoutIcon style={{ fontSize: "32px" }} /></div>
                            <div>Logout</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <div className="bg-gray-200 w-[100%] h-[1px]"></div>
            </div>
        </div>
    );
};

export default NavbarToggle;
