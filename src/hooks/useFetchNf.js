import React, { useEffect, useState } from 'react'

function useFetchNf() {
    const [nfts,setNfts] = useState([])
    useEffect(()=>{
        const url = `${process.env.REACT_APP_URL_BLOCKCHAIN_SERVICE}/marketplace/3/nft/list`;
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
                setNfts(result?.data)
            })
            .catch((error) => {
                console.log("error", error);
                
            });
        
        // else{
        //     setSelectedCategoryFilteritems([null])
        // }
    },[])
    return {
        nfts
    }
}

export default useFetchNf