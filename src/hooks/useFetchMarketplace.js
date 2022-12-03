import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { appActions } from "../context/app-slice";

export const useFetchMarketplace = () => {
  const [content, setContent] = useState();
  const [loading, setLoading] = useState(true);
  const [isFound, setIF] = useState(false);
  const [subdomain, setSubDomain] = useState('');
  const [marketplaceDomain, setDomain] = useState('');
  const [isMarketplaceFound, setIsMarketplaceFound] = useState(true);
  const dispatch = useDispatch()

  const domain = window.location.hostname;
  useEffect(() => {
    const url = `${process.env.REACT_APP_URL_MARKETPLACE_SERVICE}/marketplace/domain/localhost/detail`;
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
            // console.log('result',response.json())
            // setIsMarketplaceFound(true);

          }
          return response.json();
        })
        .then((result) => {

          console.log('result', result)
          if (result === null) {
            setIF(false);
            setIsMarketplaceFound(false);
          } else {
            setIF(true);
            // setIsMarketplaceFound(true);

          }
          if (result.subdomain) {

            setSubDomain(result.subdomain);
          }
          if (result.domain) {
            setDomain(result.domain);
          }
          setContent(result);
          // dispatch(appActions.updateColors(
          //   {
          //     backgroundColor: result.bacgroundColor,
          //     iconColor: result.iconColor.split(',')[0],
          //     themeColor: `linear-gradient(to right,${result.themeColor})`
          //   }
          // ))
        })
        .catch((error) => {
          // console.log("error", error);
          setLoading(true);
          setIsMarketplaceFound(false);
        });
    };

    if (domain) {
      fetchdata();
    }
  }, [domain]);

  return { content, loading, isFound, isMarketplaceFound, subdomain,marketplaceDomain };
};
