import { KeyboardArrowRightRounded, LogoutRounded, PersonRounded, SettingsRounded } from '@mui/icons-material';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import ContactSupportOutlinedIcon from '@mui/icons-material/ContactSupportOutlined';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { appActions} from "../context/app-slice"

import LoginIcon from '@mui/icons-material/Login';
import PersonAddOutlinedIcon from '@mui/icons-material/PersonAddOutlined';

const NavbarDropdown = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const appCtx = useSelector((state) => state.app);
    const dark = appCtx.isDarkMode;
    const label = { inputProps: { 'aria-label': 'Color switch demo' } };
    const bgColor = localStorage.getItem('backgroundColor') === undefined ? 'rgb(55 65 81 / var(--tw-bg-opacity))' : localStorage.getItem('backgroundColor');

    return (
        <>
            <div style={{
                position: "relative",
                right: "-7px",
            }}
                className={`${!props.visible && 'hidden'
                    } ${dark ? 'bg-transparent' : 'bg-white'} hidden z-50 md:top-[29px] top-[217px] opacity-0 xl:opacity-100`}>

                <div style={{
                    width: "0",
                    height: "0",
                    border: "5px solid transparent",
                }}></div>
            </div>
            <div
                className={`${!props.visible && 'hidden'
                    } ${dark ? 'bg-black' : 'bg-white'} dropdownBox  z-50 flex flex-col fixed md:top-[90px] top-[223px]
                `}
                style={{border: "2px solid #80808066", color: dark ? 'white' : 'black', backgroundColor: dark ? bgColor : 'white' }}
            >

                {appCtx.isLoggedIn ? (<>
                    <button
                        className={` ${dark ? 'bg-black text-white hover:text-white hover:bg-gray-600' : 'bg-white hover:bg-lightHoverGrey'} dropdownOptionsScreen transition-all ease-out duration-300`}
                        style={{ backgroundColor: dark ? bgColor : 'white' }}

                        onClick={() => { navigate(`/profile/${props.userId}/collected`) }}
                    >
                        <div className={'flex gap-2 drop bg-blend-color-dodge ml-[30px] '}>
                            <PersonOutlineOutlinedIcon style={dark ? props.iconColorStyle : { color: 'black' }} className="dropdownIcon" />
                            <div className={`dropdownName`} style={{ color: dark ? 'white' : 'black' }} >Profile</div>

                        </div>

                    </button>
                    <div className='flex justify-center items-center'>
                        <div className=" w-[95%] h-[1px]" style={{borderBottom: "2px solid #80808066"}}></div>
                    </div>
                    {/* <button
                    className='dropdownOptionsScreen transition-all ease-out duration-300 '

                >
                    <div className={'flex gap-2 drop bg-blend-color-dodge ml-[30px] '}>
                        <SettingsOutlinedIcon style={{color:dark?'white':'black'}} className="dropdownIcon" />
                        <div style={{color:dark?'white':'black'}} >Settings</div>
                    </div>

                </button>
                <div className='flex justify-center items-center'>
                    <div className="bg-gray-200 w-[95%] h-[1px]"></div>
                </div>
                <button
                    className='dropdownOptionsScreen transition-all ease-out duration-300 '
                >
                    <div className={'flex gap-2 drop bg-blend-color-dodge ml-[30px] '}>
                        <ContactSupportOutlinedIcon style={{color:dark?'white':'black'}} className="dropdownIcon" />
                        <div style={{ color:dark?'white':'black' }} className=" dropdownName">{`Chat and Support`}</div>

                    </div>

                </button> */}
                    {/* <div className='flex justify-center items-center'>
                    <div className="bg-gray-200 w-[95%] h-[1px]"></div>
                </div> */}
                    <button
                        className={` ${dark ? 'bg-black text-white hover:bg-gray-600' : 'bg-white hover:bg-lightHoverGrey'} dropdownOptionsScreen transition-all ease-out duration-300`}
                        style={{ backgroundColor: dark ? bgColor : 'white' }}

                        onClick={() => {
                            dispatch(appActions.logout(undefined));
                            dispatch(appActions.updateAuthToken(''));
                            dispatch(appActions.handleIsNewAccount(false));
                            dispatch(appActions.setWalletAddress([{ address: '' }]));
                            dispatch(appActions.setCartQuantity(0));
                            dispatch(appActions.setCart([]));
                            navigate(`/signup`)
                        }}
                    >
                        <div className={'flex gap-2 drop bg-blend-color-dodge ml-[30px] '}>
                            <LogoutIcon style={dark ? props.iconColorStyle : { color: 'black' }} className="dropdownIcon" />
                            <div className={`dropdownName flex`} style={{ color: dark ? 'white' : 'black' }}><div>Logout</div></div>

                        </div>

                    </button>

                    {/* <div className='flex justify-center items-center'>
                        <div className=" w-[95%] h-[1px]" style={{borderBottom: "2px solid #80808066"}}></div>
                    </div> */}
                </>)
                    :
                    <>
                        <button
                            className={` ${dark ? 'bg-black text-white hover:bg-gray-600' : 'bg-white hover:bg-lightHoverGrey'} dropdownOptionsScreen transition-all ease-out duration-300`}
                            style={{ backgroundColor: dark ? bgColor : 'white' }}

                            onClick={() => {
                                navigate(`/signup`)
                            }}
                        >
                            <div className={'flex gap-2 drop bg-blend-color-dodge ml-[30px] '}>
                                <PersonAddOutlinedIcon style={dark ? props.iconColorStyle : { color: 'black' }} className="dropdownIcon" />
                                <div className={`dropdownName flex`} style={{ color: dark ? 'white' : 'black' }}>SignUp</div>
                            </div>
                        </button>
                        <div className='flex justify-center items-center'>
                            <div className=" w-[95%] h-[1px]" style={{borderBottom: "2px solid #80808066"}}></div>
                        </div>
                        <button
                            className={` ${dark ? 'bg-black text-white hover:bg-gray-600' : 'bg-white hover:bg-lightHoverGrey'} dropdownOptionsScreen transition-all ease-out duration-300`}
                            style={{ backgroundColor: dark ? bgColor : 'white' }}

                            onClick={() => {
                                navigate(`/login`)

                            }}
                        >
                            <div className={'flex gap-2 drop bg-blend-color-dodge ml-[30px] '}>
                                <LoginIcon style={dark ? props.iconColorStyle : { color: 'black' }} className="dropdownIcon" />
                                <div className={`dropdownName flex`} style={{ color: dark ? 'white' : 'black' }}>Login</div>
                            </div>
                        </button>
                        {/* <div className='flex justify-center items-center'>
                            <div className=" w-[95%] h-[1px]" style={{borderBottom: "2px solid #80808066"}}></div>
                        </div> */}
                    </>
                }
                {/* <button
                    className={` ${dark ? 'bg-black text-white hover:bg-gray-600' : 'bg-white hover:bg-lightHoverGrey'} dropdownOptionsScreen transition-all ease-out duration-300`}
                    style={{ backgroundColor: dark ? bgColor : 'white' }}

                    onClick={() => { dispatch(appActions.toggleDarkMode(undefined)) }}
                >
                    <div className={'flex gap-2 drop bg-blend-color-dodge ml-[30px] '}>
                        {!dark ?
                            <LightModeIcon style={dark ? props.iconColorStyle : { color: 'black' }} className="dropdownIcon mt-[5px]" />
                            :
                            <DarkModeIcon style={dark ? props.iconColorStyle : { color: 'black' }} className="dropdownIcon mt-[5px]" />
                        }
                        <div className='flex justify-between w-[84%]'>
                            {dark ?
                                <div className="mt-[5px]" >Dark Mode</div>
                                :
                                <div className="mt-[5px]" >Light Mode</div>
                            }
                            <Switch {...label} defaultValue={dark} checked={dark} color="secondary" style={dark ? props.iconColorStyle : { color: 'white' }} />

                        </div>

                    </div>

                </button> */}
            </div>
        </>
    );
};

export default NavbarDropdown;
