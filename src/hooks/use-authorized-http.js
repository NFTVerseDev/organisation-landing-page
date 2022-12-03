import axios from "axios";
import { useCallback } from "react";
import { useSelector } from "react-redux";

const useAuthorizedHttp = () => {
    const appCtx = useSelector((state) => state.app);
    let config = {};    
    if ((appCtx.authToken !=='' || appCtx.authToken !=null) && appCtx.authToken) {
        config = {
            "Content-Type": "application/json",
            "X-Auth-Token": appCtx.authToken
        }
    }
    else {
        config = {
            "Content-Type": "application/json",
            "X-App-Token": "E9FE46D9-FC53-480F-9DC6-D26A7DE233A0"
        }
    }
    return useCallback(
        (requestOptions, successCallback, errorCallback, completeCallback) =>
            axios({
                method: requestOptions.method ? requestOptions.method.toLowerCase() : "GET",
                url: requestOptions.url,
                headers: config,
                data: requestOptions.data ? JSON.stringify(requestOptions.data) : null
            })
                .then((response) => {
                    successCallback && successCallback(response.data);
                    return Promise.resolve();
                })
                .catch((response) => {
                    errorCallback && errorCallback(response);
                    return Promise.reject();
                })
                .finally(() => {
                    completeCallback && completeCallback();
                }),
        [appCtx.authToken]
    );
};

export default useAuthorizedHttp;
