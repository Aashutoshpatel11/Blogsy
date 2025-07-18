import React, { useEffect, useState } from "react";
import service from '../../appwrite/auth'
import LogoutBtn from "../Header/LogoutBtn";

function Profile (){

    const [user, setUser] = useState("");

    useEffect( () => {
        service.getCurrentUser()
        .then( (res) => setUser(res) )
        .catch( (err) => {
            console.log("User Profile:: getCurrentUser:: error", error);
        } )
    } , [] )

    console.log(user);

    return (
        <div className="min-h-screen w-screen flex flex-col justify-center items-center px-2 py-8 sm:px-6 lg:px-16 backdrop-blur-2xl">
            <div className="w-full max-w-5xl bg-transparent flex flex-col items-center">
                {/* Profile Header */}
                <div className="w-full flex items-center gap-4 mb-10">
                    {/* Avatar */}
                    <div className="flex-shrink-0 w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-gradient-to-r from-[#e0aef8] to-[#8cacf6] flex justify-center items-center text-black/50 font-semibold text-5xl sm:text-7xl font-mono">
                        {user.name?.[0]?.toUpperCase()}
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

        // <div className="min-h-screen w-screen flex flex-col justify-center  backdrop-blur-2xl" >
        //     <div className="bg-transparent w-full min-h-full px-1 sm:px-10 flex flex-col items-center" >
        //         <div className="text-balck/70 w-full px-2 sm:px-96 text-sm sm:text-base" >
        //             <div className="flex items-center text-black/60" >
        //                 <div className='bg-blue-300 rounded-full w-20 sm:w-28 h-20 sm:h-28 mr-4 flex justify-center items-center text-black/50 font-semibold text-5xl sm:text-7xl font-mono bg-gradient-to-r from-[#e0aef8]  to-[#8cacf6]' >
        //                     {user.name?.[0]?.toUpperCase()}
        //                 </div>
        //                 <div className="ml-6 h-20  flex flex-col justify-evenly  " >
        //                     <div className="text-xl sm:text-3xl font-semibold " >{user.name}</div>
        //                     <div className="text-xs sm:text-sm " >{user.email}</div>
        //                 </div>
        //             </div>
        //             <ul className="flex w-full justify-between mt-6" >
        //                 <li className="w-1/3 mr-4 rounded-lg pl-4 sm:pl-4 py-1 " >Name:</li>
        //                 <li className="w-2/3  bg-slate-950 bg-opacity-5 rounded-full pl-3 sm:pl-6 py-1" >{user.name}</li>
        //             </ul>
        //             <ul className="flex w-full justify-between mt-6" >
        //                 <li className="w-1/3 mr-4 rounded-lg pl-4 sm:pl-4 py-1 " >Email:</li>
        //                 <li className="w-2/3  bg-slate-950 bg-opacity-5 rounded-full pl-3 sm:pl-6 py-1" >{user.email}</li>
        //             </ul>
        //             <ul className="flex w-full justify-between mt-6" >
        //                 <li className="w-1/3 mr-4 rounded-lg pl-4 sm:pl-4 py-1 " >Phone:</li>
        //                 <li className="w-2/3  bg-slate-950 bg-opacity-5 rounded-full pl-3 sm:pl-6 py-1" >{user.phone}</li>
        //             </ul>
        //             <ul className="flex w-full justify-between mt-6" >
        //                 <li className="w-1/3 mr-4 rounded-lg pl-4 sm:pl-4 py-1 " >Verified:</li>
        //                 <li className="w-2/3  bg-slate-950 bg-opacity-5 rounded-full pl-3 sm:pl-6 py-1" >{user.emailVerification? "Verified" : "Not Verified"}</li>
        //             </ul>
        //             <ul className="flex w-full justify-between mt-6" >
        //                 <li className="w-1/3 mr-4 rounded-lg pl-4 sm:pl-4 py-1 " >Created at:</li>
        //                 <li className="w-2/3  bg-slate-950 bg-opacity-5 rounded-full pl-3 sm:pl-6 py-1" >{user.$createdAt?.substring(0,10)}</li>
        //             </ul>
        //         </div>
        //     </div>
        //     <div className="flex justify-center items-end mt-10" >
        //         <LogoutBtn 
        //         classname="border border-red-500"
        //         />
        //     </div>
        // </div>
    )
}

export default Profile;