import "./Main.css";
import { Link, useNavigate } from "react-router-dom";
import NFT from "../nft/NFT"
import CustomButton1 from "../uicomponents/CustomButton1";
import { useSelector } from "react-redux";
import { EastOutlined } from "@mui/icons-material";
// import CustomButton1 from "../../ui/CustomButton1";
import useFetchNf from "../hooks/useFetchNf";
import { ClaimYourRewar } from "../uicomponents/claim/ClaimYourRewar";
import { useState } from "react";
// import { WalletInformation } from "../../uicomponents/WalletInformation/WalletInformation";

export default function Main({ pageData }) {
    const appCtx = useSelector((state) => state.app);
    const [claimReward, setClaimedReward] = useState(false);
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    const ipfsUrl = urlParams.get('ipfsUrl');
    const name = urlParams.get('name');
    const description = urlParams.get('description');
    const ipfsHash = urlParams.get('ipfsHash');
    const nftData = {
        name: name,
        description: description,
    }

    const dark = appCtx.isDarkMode;
    const navigate = useNavigate();
    const { nfts } = useFetchNf();
    console.log(pageData)
    const themeColor = localStorage.getItem('themeColor') === null ? { backgroundColor: 'white', color: 'white' } : { backgroundColor: localStorage.getItem('themeColor'), color: 'white' }
    return (
        <div className="flex flex-col lg:flex-row justify-around ">
            <div className="banner_text justify-center items-center xl:items-start" >
                <h1 className="title">{pageData?.title}</h1>
                <h1 className="sub_title font-normal">{pageData?.description}</h1>
                <span className="btn_box flex gap-10">
                    <Link to="/" className="">
                        {/*<button className="main_btn">
                            <span className="btnfont">{pageData?.buttonLabel}</span>
                           </button>*/}
                        {/* <div onClick={()=>{navigate('/ihkjhkh')}} className={`w-[180px] h-[40px] pl-2 py-2 text-[20px] flex justify-center items-center bg-black`} style={themeColor} primary={true}>Claim reward</div> */}
                    </Link>

                    {/* <Link to="/">
                        <CustomButton1 primary={false} >{pageData?.buttonLabel} </CustomButton1>
                    </Link> */}

                </span>
            </div>
            <NFT imgSrc={pageData?.bannerImage} />
            <ClaimYourRewar
                claimReward={claimReward} setClaimedReward={setClaimedReward} ipfsUrl={ipfsUrl} nftData={nftData} ipfsHash={ipfsHash}
            />
        </div>
        // </div>
    );
}
