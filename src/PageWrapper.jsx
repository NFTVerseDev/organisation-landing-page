import Navbar from "./navbar/Navbar"
import Footer from "./footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import useNavbar from "./hooks/useNavbar";



const PageWrapper = (props) => {
    const appCtx = useSelector((state) => state.app);
    const dark = appCtx.isDarkMode;
    const { logo, collapsed, logoSrc, userId, toggleCollapse, visible } = useNavbar();
    const dispatch=useDispatch();
    const bgColor = localStorage.getItem('pageBackgroundColor') === undefined ? 'rgb(40 44 52 / var(--tw-bg-opacity))' : localStorage.getItem('pageBackgroundColor');

    return (
     
        <div
            className={`${dark ? `bg-black` : "bg-white"
                } flex flex-col justify-between min-h-screen h-fit   text-gray-800`}
                    style={{backgroundColor:appCtx.isDarkMode?bgColor:'white'}}
                
        >
            <Navbar />
            <div className={`w-[95vw] mt-32 lg:w-[85vw] mx-auto flex flex-col ${props.noVerticalGap ? "my-0" : "my-10"} ${props.className} ${dark ? "text-white" :"text-black"}`}>
                {props.children}
            </div>
            <Footer />
        </div>
    );
};

export default PageWrapper;
