import { useEffect, useState } from "react";

export const useFetchPageData = (page) => {
  const [result, setResult] = useState();
  const [loading, setLoading] = useState(true);
  const [isFound, setIF] = useState(false);
  const [isFetchPageData,setIsFetchPageData] = useState(true);
  const domain = window.location.hostname;

  useEffect(() => {
    const url = `${process.env.REACT_APP_URL_MARKETPLACE_SERVICE}/marketplace/localhost/page/home/detail`;
    let myHeaders = new Headers();
    myHeaders.append("X-App-Token", "E9FE46D9-FC53-480F-9DC6-D26A7DE233A0");
    myHeaders.append("Content-Type", "application/json");

    let requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const fetchdata = async () => {
      fetch(url, requestOptions)
        .then((response) => {
          if (response.status === 200) {
            setLoading(false);
          }
          return response.json();
        })
        .then((result) => {
          if (result===null) {
            setIF(false);
            if(page ==='home'){
              setIsFetchPageData(false);
            }
          }
          else{
            setIF(true);
            
          }
          setResult(result);
        })
        .catch((error) => {
          // console.log("error", error);
          setLoading(true);
          if(page ==='home'){
            setIsFetchPageData(false);
          }
        });
    };
    fetchdata();
  }, [domain, page]);

  return { result, loading, isFound, isFetchPageData };
};
