import { useFetchMarketplace } from "./useFetchMarketplace";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";


export default function useNavbar() {
    const { content } = useFetchMarketplace();
    const navigate = useNavigate();
    const [logo, setLogo] = useState();
    const [collapsed, setCollapsed] = useState(false);
    const logoSrc = content?.logo;
    const defaultProfilePic = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/summer-flowers-star-flower-1648071187.jpg";
    const userId = useSelector((state) => state.app.userDetails.userId);
    useEffect(() => {
        setLogo(logoSrc);
    }, [logoSrc]);

    const toggleCollapse = useCallback(() => {
        setCollapsed(!collapsed);
    }, [collapsed]);

    const [anchorEl, setAnchorEl] = useState(null);
    const [visible, setVisible] = useState(false);
    const handleVisible = (e) => {
        if (visible === true) {
            setVisible(false)
        }
        else {
            setVisible(true)
        }
    }
    const open = Boolean(anchorEl);
    // const handleClick = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };
    // const handleClose = () => {
    //     setAnchorEl(null);
    // };
    // console.log(visible);
    // console.log(ref,wrapperRef);

    return {
        logo,
        collapsed,
        logoSrc,
        userId,
        toggleCollapse,
        visible,
        open,
        handleVisible

    }


   
}
