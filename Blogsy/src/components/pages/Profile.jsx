import React, { useEffect, useState } from "react";
import service from '../../appwrite/auth'
import LogoutBtn from "../Header/LogoutBtn";
import {Loading} from "../index";

function Profile (){

    const [user, setUser] = useState("");
    const [loading, setLoading] = useState(true)

    useEffect( () => {
        service.getCurrentUser()
        .then( (res) => {
            setUser(res)
            setLoading(false)
    }
    )
        .catch( (err) => {
            console.log("User Profile:: getCurrentUser:: error", error);
        } )
    } , [] )

    console.log(user);

    return loading? (
        <Loading /> 
    ) : (
        <div className="min-h-screen w-screen flex flex-col justify-center items-center px-2 py-8 sm:px-6 lg:px-16 backdrop-blur-2xl">
            <div className="w-full max-w-5xl bg-transparent flex flex-col items-center">
                {/* Profile Header */}
                <div className="w-full flex items-center gap-4 mb-10">
                    {/* Avatar */}
                    <div className="border-4 border-t-red-500 border-r-blue-500 border-b-green-500 border-l-yellow-500 rounded-full animate-pulse" >
                        <div className="flex-shrink-0 w-20 h-20 sm:w-28 sm:h-28 rounded-full  flex justify-center items-center text-black/50 font-semibold text-5xl sm:text-7xl font-mono animate-none">
                            {user.name?.[0]?.toUpperCase()}
                        </div>
                    </div>

                    {/* Name and Email */}
                    <div className="flex flex-col justify-center gap-1 ml-2 sm:ml-4">
                        <div className="text-xl sm:text-3xl font-semibold text-black">{user.name}</div>
                        <div className="text-xs sm:text-sm text-black/60">{user.email}</div>
                    </div>
                </div>

                {/* User Details */}
                <div className="w-full text-black/70 space-y-4">
                    {[
                        { label: "Name", value: user.name },
                        { label: "Email", value: user.email },
                        { label: "Phone", value: user.phone || "Not Provided" },
                        { label: "Verified", value: user.emailVerification ? "Verified" : "Not Verified" },
                        { label: "Created At", value: user.$createdAt?.substring(0, 10) },
                    ].map((item, idx) => (
                        <div key={idx} className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full">
                            <div className="text-sm sm:text-base font-medium w-full sm:w-1/3 mb-1 sm:mb-0">{item.label}:</div>
                            <div className="w-full sm:w-2/3 bg-slate-950/5 rounded-full px-4 py-2 text-sm sm:text-base truncate">
                                {item.value}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Logout Button */}
            <div className="mt-10">
                <LogoutBtn classname="border border-red-500 px-6 py-2 rounded-md text-red-500 hover:bg-red-50 transition duration-200" />
            </div>
        </div>


    )
}

export default Profile;