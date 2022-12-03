import React from "react";
import { useSelector } from "react-redux";

function CustomButton1({ onClick, child, type, disabled,className, primary, ...props }) {
    const appCtx = useSelector((state) => state.app);
    const dark = appCtx.isDarkMode;
    const iconColorStyle = localStorage.getItem('iconColor');
    // className={` bg-gradient-to-r from-light to-dark text-white ${dark?'':''}`}
    const themeColor = localStorage.getItem('themeColor') === null ? { backgroundColor: 'white',color:'black',border:"2px solid black" } : { background: localStorage.getItem('themeColor'),color:'white' }
    console.log(localStorage.getItem('themeColor'));
    
    return (
        <button
            {...props}
            disabled={disabled}
            onClick={onClick}
            type={type}
            style={themeColor }
            className={` ${className} rounded-lg py-2 px-4 ease-in-out duration-300 border border-black`}
        >
            {child}
            {props.children}
        </button>
    );
}

export default CustomButton1;
