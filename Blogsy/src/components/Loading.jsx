import React from "react";

const Loading = ({className=""}) => {
    return (
        <div className={`h-screen w-full flex justify-center pt-20 font-bold text-black/50 ${className}`} >
            <div className=' w-12 h-12 border-4 animate-spin border-t-blue-500 rounded-full' >
            </div>
        </div>
    )
}

export default Loading;