import { AccountBalanceOutlined, Create, Explore, Home, Search } from '@mui/icons-material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { appActions } from '../../context/app-slice';
import UseTaleWalletModal from '../../uicomponents/UseTaleWalletModal/UseTaleWalletModal/useTaleWalletModal';
import useNavbar from '../navbar/useNavbar';

export const FooterNavigation = () => {
    const { logo, collapsed, logoSrc, userId, toggleCollapse, visible, open, handleVisible } = useNavbar();
    const [openModal, setOpenModal] = useState(false);
    const [walletConfigured, setWalletConfigured] = useState(false);
    const appCtx = useSelector((state) => state.app);
    const dark = appCtx.isDarkMode;
    const page = appCtx.page;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const hexColorFilter = localStorage.getItem('hexColorFilter');
    
    return (
        <div className={`${appCtx.page === 'search' ? `h-[67px]` : `${appCtx.page==='product'?`h-[0px]`:`h-[84px]`}`}`}>
            <div className={`xl:w-[820px] flex justify-around items-center z-50 h-[70px] border-t-2 border-t-gray-200 fixed w-[100%] bottom-[0px] ${dark ? `bg-black text-white` : `bg-white text-black`}`}>
                <div className='flex flex-col justify-center items-center' onClick={() => {
                    navigate('/')
                    dispatch(appActions.selectPage('Home'))
                }}>
                    <div className='w-[30px]' style={{filter:dark?hexColorFilter:''}}>
                        {!dark ?
                            (<>
                                {page === 'Home' ?
                                    <img src='/images/homefooterhover.svg' />
                                    :
                                    <img src='/images/homefooter.svg' />}
                            </>)
                            :
                            (<>
                                {page === 'Home' ?
                                    <img src='/images/homedarkhover.svg' />
                                    :
                                    <img src='/images/homedark.svg' />}
                            </>)
                        }
                    </div>
                    <div className='text-[12px]'>Home</div>
                </div>
                <div className='flex flex-col justify-center items-center'
                    onClick={() => {
                        navigate('/explore')
                        dispatch(appActions.selectPage('explore'))
                    }}>
                    <div className='w-[30px]' style={{filter:dark?hexColorFilter:''}}>
                        {!dark ? (<>
                            {page === 'explore' ?
                                <img src='/images/explorefooterhover.svg' className='w-[100%]'/>
                                :
                                <img src='/images/explorefooter.svg' />}
                        </>)
                            :
                            (<>
                                {page === 'explore' ?
                                    <img src='/images/exploredarkhover.svg' className='w-[100%]'/>
                                    :
                                    <img src='/images/exploredark.svg' />}
                            </>)
                        }
                    </div>
                    <div className='text-[12px]'>Explore</div>
                </div>
                <div className='flex flex-col justify-center items-center'>
                    <Link className='w-[30px]' to='/create' style={{filter:dark?hexColorFilter:''}}>
                        {!dark ? (<>
                            {page === 'create' ?
                                <img src='/images/createfooterhover.svg' />
                                :
                                <img src='/images/createfooter.svg'/>}
                        </>)
                            :
                            (<>
                                {page === 'create' ?
                                    <img src='/images/createdarkhover.svg' />
                                    :
                                    <img src='/images/createdark.svg' />}
                            </>)
                        }
                    </Link>
                    <div className='text-[12px]'>Create</div>
                </div>
                <Link to="/wallet" className='flex flex-col justify-center items-center' 
                 onClick={() => {
                    if ((appCtx.walletAddress[0]?.address === '' || appCtx.walletAddress[0]?.address === 'loading ...')) {
                        dispatch(appActions.setWalletLoading(true));
                        setOpenModal(true)
                    }
                    else {
                        dispatch(appActions.setWalletLoading(false));
                        setOpenModal(false);
                    }
                }}
                >
                    <div className='w-[30px]' style={{filter:dark?hexColorFilter:''}}>
                        {!dark ? (<>
                            {page === 'wallet' ?
                                <img src='/images/walletlighthover.svg' />
                                :
                                <img src='/images/walletdark.svg' />}
                        </>)
                            :
                            (<>
                                {page === 'wallet' ?
                                    <img src='/images/walletdarkhover.svg' />
                                    :
                                    <img src='/images/walletwhite.svg' />}
                            </>)
                        }
                    </div>
                    <div className='text-[12px]'>Wallet</div>
                </Link>
                <div className='flex flex-col justify-center items-center'
                    onClick={() => {
                        navigate(`/profile/${userId}`)
                        dispatch(appActions.selectPage('Profile'))
                    }}>
                    <div className='w-[30px]' style={{filter:dark?hexColorFilter:''}}>
                        {!dark ? (<>
                            {page === 'Profile' ?
                                <img src='/images/profilefooterhover.svg' />
                                :
                                <img src='/images/profilefooter.svg' />}
                        </>)
                            :
                            (<>
                                {page === 'Profile' ?
                                    <img src='/images/profiledarkhover.svg' />
                                    :
                                    <img src='/images/profiledark.svg' />}
                            </>)
                        }
                    </div>
                    <div className='text-[12px]'>Profile</div>
                </div>
            </div>
            <UseTaleWalletModal openModal={openModal} setOpenModal={setOpenModal} walletConfigured={walletConfigured} setWalletConfigured={setWalletConfigured} />

        </div>
    )
}
