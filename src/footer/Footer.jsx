
import { Link, useNavigate } from "react-router-dom";
import "./Footer.css";

import { DoneOutline, Person } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import useNavbar from "../hooks/useNavbar";
import { CircularProgress } from "@mui/material";
import { toast } from "react-toastify";
import useAuthorizedHttp from "../hooks/use-authorized-http";

import { JoinOurCommunity } from "../uicomponents/JoinOurCommunity";


export default function Footer() {
    const appCtx = useSelector((state) => state.app);
    // const { content } = useFetchMarketplace();
    const { logo } = useNavbar();
    const [sendEmail, setSendEmail] = useState(false);
    const marketplaceId = appCtx.marketplaceId;
    const dispatch = useDispatch();
    const [emailAddress, setEmailAddress] = useState("");
    // const [footerData, setFooterData] = useState('');
    const dark = appCtx.isDarkMode;
    const footerData = appCtx.footerData;
    const iconColor = appCtx.colors?.iconColor
    const makeAuthorizedRequest = useAuthorizedHttp();


    const navigate = useNavigate();

    const emailSubscription = (e) => {
        e.preventDefault();

        const data =
        {
            "email": emailAddress,
            "marketplaceId": marketplaceId,
            "subscriptionStatus": true,
            "verified": false
        }

        const url = `${process.env.REACT_APP_URL_MARKETPLACE_SERVICE}/marketplace/email/subscription/save`
        let myHeaders = new Headers();
        myHeaders.append("X-App-Token", "E9FE46D9-FC53-480F-9DC6-D26A7DE233A0");
        myHeaders.append("Content-Type", "application/json");
        let requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: JSON.stringify(data)
        };
        fetch(url, requestOptions)
            .then((res) => {
                if (res.status === 200) {
                    res.json();
                    console.log(res);
                    setSendEmail(true);
                }
                else {
                    toast('server busy')
                }
            })
            .catch(err => console.log(err))


    }
    const navbarLogo = window.localStorage.getItem('navbarLogo');
    const bgColor = footerData?.backgroundColor === null ? 'rgb(55 65 81 / var(--tw-bg-opacity))' : footerData?.backgroundColor;
    const iconColorStyle= localStorage.getItem('iconColor') === 'undefined'?{}:{color:localStorage.getItem('iconColor'),border:`2px solid ${localStorage.getItem('iconColor')}`}
    
    return (
        <>
            {appCtx.version === 'mobile' ?
                <div className={`${dark ? 'text-white bg-black' : 'text-black bg-white'} footer flex-col w-[100%] xl:w-[820px]`} style={{
                    backgroundColor: dark ? bgColor : "#F2F2F2",
                    color: dark ? "white" : "black",
                    opacity: "1",
                    marginTop: "0px"
                }}>
                    <div className={`md:flex-row flex flex-col w-[100%]`}>
                        <div className="flex flex-col justify-center items-center md:items-start w-[100%]">
                            <div className="stayInLoop ml-[7px] mb-[10px] text-center w-[100%]" style={{ color: dark ? "white" : "black" }}>Stay in the loop</div>
                            <div className="w-[100%]">
                                {!sendEmail ?
                                    <form onSubmit={(e) => emailSubscription(e)}>
                                        <input
                                            onChange={(e) => setEmailAddress(e.target.value)}
                                            type="email"
                                            className="inputParentDiv w-[100%] h-[56px] pl-[28px] pr-[220px] border-lime-500 outline-none"
                                            placeholder="Enter your Email ID"
                                        />
                                        <input
                                            type="submit"
                                            className="w-[100%] h-[56px] mt-[12px] text-lime-500 bg-black p-[10px] border-lime-500 cursor-pointer rounded-[35px] px-5 border top-0"
                                            value="Subscribe"
                                            style={iconColorStyle}
                                        ></input>
                                    </form>
                                    :
                                    <div className="flex text-green-500"><DoneOutline className="text-green-500" /> <p className="text-green-500 mx-3" style={{ color: "#4de64d" }}>Successfully subscribed for newsletter</p> </div>

                                }
                            </div>
                        </div>

                    </div>
                    <div className="w-[100%] flex justify-center md:justify-end items-end">
                        <div className="w-[100%] flex sm:flex-col justify-between items-center">
                            {(footerData?.discord && footerData?.facebook && footerData?.twitter) ?
                                <div className="font-medium mb-[10px] text-center" style={{ color: dark ? "white" : "#0C0C0C", fontSize: "15px" }}>Join our community</div>
                                :
                                ''
                            }
                            <div className="flex justify-between w-[160px]">
                                {footerData?.discord ?
                                    <div
                                        className="w-auto cursor-pointer"
                                        onClick={() => {
                                            window.open(`${footerData?.discord}`, "_blank");
                                        }}
                                    >
                                        <img src="/images/DiscordFilled.png" alt="logo" style={{ color: "#0C0C0C" }} />
                                    </div>
                                    :
                                    ''
                                }
                                {footerData?.facebook ?
                                    <div
                                        className="w-auto cursor-pointer"
                                        onClick={() => {
                                            window.open(`${footerData?.facebook}`, "_blank");
                                        }}
                                    >
                                        <img src="/images/Facebook.svg" alt="logo" style={{ color: "#0C0C0C" }} />
                                    </div>
                                    :
                                    ''
                                }
                                {footerData?.twitter ?
                                    <div
                                        className="w-auto cursor-pointer"
                                        onClick={() => {
                                            window.open(`${footerData?.twitter}`, "_blank");
                                        }}
                                    >
                                        <img src="/images/TwitterFilled.png" alt="logo" style={{ color: "#0C0C0C" }} />
                                    </div>
                                    :
                                    ''
                                }

                                {/* <div
                                className="w-auto cursor-pointer"
                                onClick={() => {
                                    window.open("https://www.linkedin.com/company/nftverse/", "_blank");
                                }}
                            >
                                <img src="/images/Linkedin.svg" alt="logo" style={{ color: "#0C0C0C" }} />
                            </div> */}
                                {/* <div
                                className="w-auto cursor-pointer"
                                onClick={() => {
                                    window.open("https://www.instagram.com/_nftverse/", "_blank");
                                }}
                            >
                                <img src="/images/Instagram.svg" alt="logo" style={{ color: "#0C0C0C" }} />
                            </div> */}
                                {/* {footerData?.location ?
                                    <div className="">
                                        <GoogleMaps footerData={footerData} />
                                    </div>
                                    :
                                    <div className="flex justify-center items-center w-[100%] xl:w-[99.5%]">
                                        <div className="bg-gray-300 w-[100%] h-[2px]"></div>
                                    </div>
                                } */}
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center xl:mt-[-17px] w-[100%]">
                        <div className="bg-gray-300 w-[100%] h-[2px]"></div>
                    </div>
                    <div className="flex justify-center items-center xl:mt-[-10px]" style={{ flexDirection: "column" }}>
                        <div className="flex justify-center items-center" style={{ color: "#0C0C0C" }} onClick={() => { navigate('/') }}>
                            <div>
                                {/* {appCtx.logo &&
                                    <img src={appCtx.logo} alt={"logo"} className={" h-[40px] w-[40px]"} />
                                } */}
                                {/* <img src={logo} alt="logo" className="w-[47px]" /></div> */}
                            </div>
                            <div className="ml-[10px] font-bold" style={{ color: dark ? "white" : "#0C0C0C" }}>{appCtx.marketplaceName}</div>
                        </div>
                        {/* <div style={{ color: dark?"white":"#0C0C0C", marginTop: "10px" }} className="font-medium">&#169; NFTVerse,Inc</div> */}
                    </div>
                </div>
                :
                <>
                    {/* ${dark ? 'text-white bg-black' : 'text-black '} */}
                    <div className={` h-[22rem]] footer flex-col border-t border-slate-500`}
                        style={{
                            backgroundColor: dark ? bgColor : "#F2F2F2",
                            color: dark ? "white" : "black",
                            opacity: "1"
                        }}>
                        <div className={`justify-between items-center md:flex-row flex flex-col w-[100%]`}>
                            <div className="flex flex-col justify-center items-center md:items-start w-[70%]">
                                <div className="stayInLoop ml-[7px] mb-[10px]" style={{ color: dark ? "white" : "black" }}>Stay in the loop</div>
                                <div className="relative">
                                    {!sendEmail ?
                                        <form onSubmit={(e) => emailSubscription(e)}>
                                            <input
                                                onChange={(e) => setEmailAddress(e.target.value)}
                                                type="email"
                                                className="inputParentDiv w-[393px] md:w-[480px] pl-[28px] pr-[220px]  outline-none"
                                                style={{border: `solid 1px ${iconColor}`}}
                                                placeholder="Enter your Email ID"
                                            />
                                            <input
                                                type="submit"
                                                style={{border: `solid 1px ${iconColor}` ,color:iconColor|| "white"}}
                                                className="absolute right-0  bg-black p-[10px] cursor-pointer rounded-[35px] px-5 border top-0"
                                                value="Subscribe"
                                            />
                                        </form>
                                        :
                                        <div className="flex text-green-500"><DoneOutline className="text-green-500" /> <p className="text-green-500 mx-3" style={{ color: "#4de64d" }}>Successfully subscribed for newsletter</p> </div>

                                    }
                                </div>
                            </div>
                            {!footerData?.address ?
                                ''
                                :
                                <>
                                    <div className="flex flex-col w-[100%] md:w-[41%] ">
                                        <div className="text-xl font-bold">Speak to us</div>
                                        <div className="text-sm mt-[10px]">
                                            {footerData?.email}
                                        </div>
                                        <div className="text-sm mt-[10px]">
                                            {footerData?.mobile}
                                        </div>
                                    </div>
                                    <div className="flex flex-col w-[100%] md:w-[41%] ">
                                        <div className="text-xl font-bold">Location</div>
                                        <div className="text-sm mt-[10px]">
                                            {footerData?.address}
                                        </div>
                                    </div>
                                </>

                            }
                        </div>
                        {/* {footerData?.location ?
                            <div className="">
                                <GoogleMaps footerData={footerData} />
                            </div>
                            :
                            <div className="flex justify-center items-center w-[100%] xl:w-[99.5%]">
                                <div className="bg-gray-300 w-[100%] h-[2px]"></div>
                            </div>
                        } */}

                        <div className={` ${footerData?.location ? "mt-[64px] md:mt-[85px]" : ""} flex justify-between w-[100%]`}>
                            <div>{`Copyright`} &#169; {`${appCtx.marketplaceName}`}</div>
                            <JoinOurCommunity footerData={footerData} />
                        </div>

                        <div className="flex justify-center items-center" style={{ flexDirection: "column" }}>
                            <div className="flex justify-center items-center cursor-pointer" style={{ color: "#0C0C0C" }} onClick={() => { navigate('/') }}>
                                <div>
                                    {navbarLogo &&
                                        <img src={navbarLogo} alt={"logo"} className={"max-h-[47px] min-w-[47px]"} /> 
                                    }
                                    {/* <img src={logo} alt="logo" className="w-[47px]" /></div> */}
                                </div>
                                <div className="ml-[10px] font-bold" style={{ color: dark ? "white" : "#0C0C0C" }}>{appCtx.marketplaceName}</div>
                            </div>
                            {/* <div style={{ color: dark?"white":"#0C0C0C", marginTop: "10px" }} className="font-medium">&#169; NFTVerse,Inc</div> */}
                        </div>
                    </div>

                </>
            }
        </>

    );
}
//  {/* <div className={"w-[95vw] lg:w-[85vw] mx-auto flex flex-col md:flex-row gap-10 md:gap-44"}>
//                 <div>
//                     <div className={"text-xl md:text-2xl font-semibold mb-10"}>Footer</div>
//                     <p>
//                         Fuel the rise of the <br /> Digital Content World
//                     </p>
//                 </div>
//                 <div className="flex gap-10 md:gap-32">
//                     <div className="flex flex-col gap-2">
//                         <div className={"text-xl md:text-2xl font-semibold mb-10"}>ABOUT</div>
//                         <Link to="/about">About Us</Link>
//                         <Link to="/blog">Blog</Link>
//                         <Link to="/tos">Term of Service</Link>
//                         <Link to="/ppo">Privacy Policy</Link>
//                         <Link to="/faq">FAQs</Link>
//                     </div>
//                     <div className="">
//                         <div className={"text-xl md:text-2xl font-semibold mb-10"}>CONTACT US</div>
//                         <div className="flex flex-col gap-2">
//                             <p>
//                                 <a href="mailto:neelkamal06_@gmail.com">
//                                     <EmailIcon />
//                                     neelkamal06_@gmail.com
//                                 </a>
//                             </p>
//                             <p>
//                                 <CallIcon />
//                                 (+91) 9686840628
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </div> */}