import React from "react";

const  ThemeBtn = (custom_class) => {
    return( 
        <button
        className={`text-black text-xl sm:text-2xl ${custom_class} `}
        >✹</button>
    )
}

export default ThemeBtn;