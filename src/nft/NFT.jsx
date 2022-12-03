import "./NFT.css";

export default function NFT({ imgSrc }) {
  return (
    <div className={`nft_container  h-96 ${(imgSrc && imgSrc !== null)?'':'invisible'}`}>
      {(imgSrc && imgSrc !== null) ?
        <img src={imgSrc} alt="nft" className="w-full h-full object-contain" />
        :
        <img src={""} alt="nft" className="bannerImg" style={{visibility:"hidden"}} />
      }
    </div>
  )
}
