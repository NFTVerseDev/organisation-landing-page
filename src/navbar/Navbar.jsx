import React, { useState, useEffect, useRef } from "react";
import useNavbar from "../hooks/useNavbar";
import { alpha, Button, CircularProgress, Switch } from "@mui/material";
import NavbarDropdown from  "./NavbarDropdown"
import { AccountBalanceWalletRounded, KeyboardArrowRightRounded, MenuRounded, Search, SettingsRounded, ShoppingCartCheckoutOutlined } from "@mui/icons-material";

import { Link, useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useDispatch, useSelector } from "react-redux";
import { useFetchPageData } from "../hooks/useFetchPageData";
// import ThreeDRenderer from "../../marketplacecomponents/common/ThreeDRenderer";
// import UseTaleWalletModal from "../UseTaleWalletModal/UseTaleWalletModal/useTaleWalletModal";
import { appActions } from "../context/app-slice";


function Navbar({ }) {
    const [searchFocus, setSearchFocus] = useState(true);
    const [inputValue, setInputValue] = useState("");
    const [showCart, setShowCart] = useState(false);
    const [walletConfigured, setWalletConfigured] = useState(false);
    const navigate = useNavigate();
    const [content, setContent] = useState([]);
    const appCtx = useSelector((state) => state.app);
    const dark = appCtx.isDarkMode;
    const navbarBackground = false;
    const dispatch = useDispatch();
    const { logo, collapsed, logoSrc, userId, toggleCollapse, visible, open, handleVisible } = useNavbar();
    const { result } = useFetchPageData("home");
    const marketId = 1;
    const [openModal, setOpenModal] = useState(false);
    const iconColorStyle = localStorage.getItem('iconColor') === "undefined" ? { color: 'white' } : { color: localStorage.getItem('iconColor') }
    useEffect(() => {
        if (inputValue.length >= 2) {
            setSearchFocus(true)
            const url = `${process.env.REACT_APP_URL_BLOCKCHAIN_SERVICE}/marketplace/${marketId}/nft/search/${inputValue}`;
            let myHeaders = new Headers();
            myHeaders.append("X-App-Token", "E9FE46D9-FC53-480F-9DC6-D26A7DE233A0");
            myHeaders.append("Content-Type", "application/json");

            let requestOptions = {
                method: "GET",
                headers: myHeaders,
                redirect: "follow",
            };
            fetch(url, requestOptions)
                .then((response) => {
                    return response.json();
                })
                .then((result) => {
                    setContent(result.content);
                    console.log(content);
                    return content;
                });
        } else {
            setContent([]);
            setSearchFocus(false);
        }
    }, [inputValue]);
    const bgColor = localStorage.getItem('backgroundColor') === undefined ? ' rgb(55 65 81 / var(--tw-bg-opacity))' : localStorage.getItem('backgroundColor');
    const navbarLogo = window.localStorage.getItem('navbarLogo');
    return (
        <>
            <div
                style={{ backgroundColor: dark ? bgColor : 'white' }}
                className={`${collapsed ? "h-[180px]" : "h-24"
                    } 
                    
                     ${dark ? `${!navbarBackground ? 'bg-black' : 'bg-transparent'} ` : `${!navbarBackground ? 'bg-white  border-b' : 'bg-transparent'} `
                    }  z-40 p-4 flex transition-all ease-out duration-500 navbar_container md:px-12 fixed top-0 w-full`}

            >
                <div className={" flex xl:flex-row flex-col mt-5 md:mt-0 gap-3 md:items-center justify-between w-full"}>
                    <div className={"flex flex-col md:flex-row justify-between items-center gap-5 w-[100%]"}>
                        <div className={`${collapsed ? "flex" : "hidden"}  md:flex  md:flex-row lg:gap-10 gap-5 items-center md:navbar`}>
                            <Link to={"/"}>
                                {navbarLogo &&
                                    <img src={navbarLogo} alt={"logo"} className={"h-[30px] w-[30px]"} />
                                }
                            </Link>
                            <div className="w-[20rem] md:w-[30rem] flex">
                                <input
                                    style={{ borderRadius: "8px", height: '41px' }}
                                    className={`w-[100%] pr-[10px] pl-[30px] lg:w-[471px] ${searchFocus && " outline-none bg-white border-l-2 border-r-2 border-t-2 rounded-lg py-2"} h-[48px] border-gray-700`}
                                    value={inputValue}
                                    onChange={
                                        (e) => setInputValue(e.target.value)
                                    }
                                    type={"text"}
                                    placeholder={"Search NFT's , collections , creators "}

                                />
                                <Search className="relative text-gray-300 top-[11px] right-[453px]" />
                                {content?.length > 0 ? (
                                    <div className="bg-white w-[31%] z-[100] absolute top-[68px] border-l-2 border-r-2 border-b-2 border-t-2 rounded-lg">
                                        {content?.map((nft) => {
                                            const productId = nft?.nftId;
                                            const metaData = JSON.parse(nft?.metaData);
                                            const type = metaData.mime_type?.split('/')[0];
                                            return (
                                                <Link to={`/nft/${productId}`} key={productId} >
                                                    <div className="flex w-[100%] items-center border-b-gray-300 border-b h-[68px]" >
                                                        {/* <div className="w-[35px] h-[35px]  rounded-full" style={{
                                                            backgroundImage: `url(${process.env.REACT_APP_GATEWAY_PINATA_CLOUD}/${metaData.ipfsHash})`,
                                                            backgroundSize: 'cover',
                                                         }}> */}
                                                        {/* <img src={`${process.env.REACT_APP_GATEWAY_PINATA_CLOUD}/${metaData.ipfsHash}`} alt="logo"/> */}
                                                        {/* <div className="ml-[10px] text-[20px] font-medium">{metaData.title}</div> */}
                                                        {/* </div> */}
                                                        <div className="w-[35px] h-[35px]  rounded-full" style={{ backgroundColor: type === "threeD" ? "#002f49" : "" }}>
                                                            {type === "text" ? (
                                                                <div className={"h-[100%] dark:bg-neutral-800 flex items-center justify-center"}>
                                                                    <div>
                                                                        <img src="/images/nonft.svg" alt="logo" className='object-cover rounded-full' />
                                                                    </div>
                                                                    {/* <div> No image or video found for this NFT</div> */}
                                                                </div>
                                                            ) : type === "image" ? (
                                                                metaData?.image ? (
                                                                    <img
                                                                        className=" h-[100%] object-cover rounded-full w-full dark:bg-neutral-800"
                                                                        src={`${process.env.REACT_APP_GATEWAY_PINATA_CLOUD}/${metaData?.image ? metaData?.image?.substring(7, metaData?.image?.length) : ''}`}
                                                                        alt="NFT"
                                                                    />
                                                                ) : (
                                                                    <div className={"h-[100%] p-10 flex items-center justify-center text-black font-medium"}>Image not found</div>
                                                                )
                                                            ) : type === "video" ? (
                                                                metaData?.media_url ? (
                                                                    <video
                                                                        controls
                                                                        // autoPlay
                                                                        className=" h-[100%] object-cover rounded-full w-full dark:bg-neutral-800"
                                                                        src={`${process.env.REACT_APP_GATEWAY_PINATA_CLOUD}/${metaData?.media_url ? metaData?.media_url?.substring(7, metaData?.media_url?.length) : ''}`}
                                                                    />
                                                                ) : (
                                                                    <div className={"h-[100%] p-10 flex items-center justify-center text-black font-medium"}>Video not found</div>
                                                                )
                                                            ) : type === "threeD" ? (
                                                                <img
                                                                    className=" h-[100%] w-full"
                                                                    src={`${process.env.REACT_APP_GATEWAY_PINATA_CLOUD}/${metaData?.image ? metaData?.image?.substring(7, metaData?.image?.length) : ''}`}
                                                                    alt="threeD"
                                                                />
                                                            ) : (
                                                                <div className={"h-[100%] p-10 dark:bg-neutral-800 flex items-center justify-center"}></div>
                                                            )}
                                                        </div>
                                                        <div className="ml-[10px] font-bold text-[20px]">{metaData?.name}</div>
                                                    </div>
                                                </Link>
                                            );
                                        })}
                                    </div>
                                )
                                    :
                                    searchFocus ?
                                        <div className="bg-white w-[31%] z-[100] absolute top-[68px] border-l-2 border-r-2 border-b-2 border-t-2 rounded-lg">

                                            <div className="flex w-[100%] items-center bg-white border-b-gray-300 border-b h-[68px]" >
                                                <div className="w-[100%] h-[100%] flex items-center  rounded-full ml-[10px]">
                                                    <div>No Nfts Found !!</div>
                                                </div>
                                            </div>
                                        </div>
                                        :
                                        ''
                                }
                            </div>
                        </div>
                        <button onClick={toggleCollapse} className={`md:hidden absolute top-0 left-2`} style={iconColorStyle}>
                            <MenuRounded className={`${dark ? 'text-white' : 'text-black'}`} />
                        </button>
                    </div>
                    <div className={`${collapsed ? "flex" : "hidden"}  md:flex md:gap-11 w-[100%] z-50- md:flex-row justify-center gap-3 items-center md:navbar`}>
                        {/* <Link to={"/explore"} className={`${dark ? 'text-white' : 'nav-items'}`}>
                            Explore
                        </Link>
                        <Link to={"/stats/top"} className={`${dark ? 'text-white' : 'nav-items'}`}>
                            Stats
                        </Link> */}
                        {/* <Link to="/create"
                            onClick={() => {
                                if ((appCtx.walletAddress[0]?.address === '' || appCtx.walletAddress[0]?.address === 'loading ...')) {
                                    dispatch(appActions.setWalletLoading(true));
                                }
                                else {
                                    dispatch(appActions.setWalletLoading(false));
                                }
                            }}
                            className={`${dark ? 'text-white' : 'nav-items'}`}>
                            Create
                        </Link> */}

                        {/* <div>
                            <div className="flex-column"> */}
                        <div
                            onClick={(e) => {
                                handleVisible(e);
                            }}
                        >
                            <AccountCircleIcon style={dark ? iconColorStyle : { color: "black" }} className={`cursor-pointer`} />
                            {/* <img style={{ borderRadius: "50%", height: "3rem" }} src={defaultProfilePic} alt="profile logo" /> */}
                            <NavbarDropdown visible={visible} userId={userId} iconColorStyle={iconColorStyle} />

                        </div>
                        {/* </div>
                        </div> */}

                        {/* <Link to="/wallet">
                            <AccountBalanceWalletRounded
                                className={`icon shadow-xl`}
                                style={dark ? iconColorStyle : { color: "black" }}
                                onClick={() => {
                                    if ((appCtx.walletAddress[0]?.address === '' || appCtx.walletAddress[0]?.address === 'loading ...')) {
                                        dispatch(appActions.setWalletLoading(true));
                                    }
                                    else {
                                        dispatch(appActions.setWalletLoading(false));
                                    }
                                }}
                            />
                        </Link> */}
                        {/* <button className="w-[30px] relative" onClick={() => navigate("/cart")}>
                            <ShoppingCartCheckoutOutlined
                                style={dark ? iconColorStyle : { color: "black" }}
                            />
                            <div className="absolute z-10 w-4 h-4 rounded-full background-red -top-2 -right-2 flex text-white items-center justify-center">
                                <div className="font-bold text-xs text-white z-10 " >
                                    {appCtx.cartQuantity}
                                </div>
                            </div>
                        </button> */}

                        {/* <Link to={"/"} className={"nav-items nav_link"}>
                            How it works
                        </Link> */}
                        {/* <CustomButton1  child= {"Create"} primary ={false} /> */}
                        {/* </div> */}
                        {/* <div className={"lg:gap-5 flex items-center pd-left-5 text-black"}> */}

                        {/* <Link to={"/"}>
                             <SettingsRounded className="icon" />
                        </Link> */}


                        {/* <div onClick={() => { handleLogOut() }}>
                        <ExitToAppOutlinedIcon className="w-[4rem] cursor-pointer icon" />
                        </div> */}
                    </div>
                </div>
            </div>
            {/* <UseTaleWalletModal openModal={openModal} setOpenModal={setOpenModal} walletConfigured={walletConfigured} setWalletConfigured={setWalletConfigured} /> */}
        </>
    );
}

export default Navbar;
