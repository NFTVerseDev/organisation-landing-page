import { Facebook, LinkedIn, Twitter } from '@mui/icons-material';
import React from 'react'
import { useSelector } from 'react-redux';
import InstagramIcon from '@mui/icons-material/Instagram';

export const JoinOurCommunity = ({ footerData }) => {
    const appCtx = useSelector((state) => state.app);
    const dark = appCtx.isDarkMode;
    // const {iconColor} = appCtx?.colors;
    // const iconColorStyle=iconColor?iconColor:'';
    const iconColorStyle = localStorage.getItem('iconColor') === "undefined" ? { backgroundColor: 'white',color:'white' } : { color: localStorage.getItem('iconColor') }

    // console.log(iconColor)
    return (
        <div>
            <div className="w-[100%] flex justify-center md:justify-end items-end">
                {(footerData?.discord || footerData?.twitter || footerData?.facebook || footerData?.linkedin || footerData?.instagram) ?
                    <div className="w-[320px]">
                        <div className="font-medium mb-[10px] text-center" style={{ color: dark ? "white" : "#0C0C0C", fontSize: "21px" }}>Join our community</div>
                        <div className="flex justify-between w-auto">
                            {footerData?.discord ?
                                <div
                                className={`w-auto cursor-pointer text-[${iconColorStyle}]`}
                                style={iconColorStyle}
                                    onClick={() => {
                                        window.open(`${footerData?.discord}`, "_blank");
                                    }}
                                >
                                    {/* <img src="/images/DiscordFilled.png" alt="logo" style={{ color: "#0C0C0C" }} /> */}
                                    <span className="material-icons text-4xl" > discord </span>
                                        
                                </div>
                                :
                                <div className="hidden"></div>
                            }
                            {footerData?.facebook ?
                                <div
                                    className={`w-auto cursor-pointer text-[${iconColorStyle}]`}
                                    style={{color : iconColorStyle||"white"}}
                                    onClick={() => {
                                        window.open(`${footerData?.facebook}`, "_blank");
                                    }}
                                >
                                    {/* <img src="/images/Facebook.svg" alt="logo" style={{ color: "#0C0C0C" }} /> */}
                                    <Facebook fontSize='large' style={iconColorStyle}/>
                                </div>
                                :
                                <div className="hidden"></div>
                            }
                            {footerData?.twitter ?
                                <div
                                className={`w-auto cursor-pointer text-[${iconColorStyle}]`}
                                style={{color : iconColorStyle||"white"}}
                                onClick={() => {
                                        window.open(`${footerData?.twitter}`, "_blank");
                                    }}
                                >
                                    {/* <img src="/images/TwitterFilled.png" alt="logo" style={{ color: "#0C0C0C" }} /> */}
                                    <Twitter fontSize='large' style={iconColorStyle}/>
                                </div>
                                :
                                <div className="hidden"></div>
                            }
                            {footerData?.linkedin ?
                                <div
                                    className={`w-auto cursor-pointer text-[${iconColorStyle}]`}
                                    style={{color : iconColorStyle||"white"}}
                                    onClick={() => {
                                        window.open(`${footerData?.linkedin}`, "_blank");
                                    }}
                                >
                                    {/* <img src="/images/Linkedin.svg" alt="logo" style={{ color: "#0C0C0C" }} /> */}

                                    <LinkedIn fontSize='large' style={iconColorStyle}/>

                                </div>
                                :
                                <div className="hidden"></div>
                            }
                            {footerData?.instagram ?
                                <div
                                    className="w-auto cursor-pointer"
                                    onClick={() => {
                                        window.open("https://www.instagram.com/_nftverse/", "_blank");
                                    }}
                                >
                                    <InstagramIcon fontSize='large' style={iconColorStyle} />
                                </div>
                                :
                                <div className="hidden"></div>
                            }
                        </div>
                    </div>
                    :
                    ''
                }
            </div>
        </div>
    )
}
