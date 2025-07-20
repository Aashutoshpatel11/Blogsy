import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import authService from "../../appwrite/auth"
import { logout } from '../../store/authSlice'
import { useNavigate } from 'react-router-dom'

function LogoutBtn(classname="") {
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleOnClick = () => {
        setLoading(true)
        authService.logout()
        .then( () => {
          dispatch(logout())
          navigate('/')
          setLoading(false)
        } )
        .catch( (error) => ( 
            console.log('LogoutBtn :: Error :: ', error)
         ) )
    }
  return (
    <button
    onClick={handleOnClick}
    className={`text-xs sm:text-base inline-block py-2 px-2 sm:px-6 sm:py-2 duration-200 hover:bg-red-500 hover:text-white rounded-full ${classname}`} 
    >
        {loading? <div className=' w-full flex justify-center  font-bold text-black/50 ' >
            <div className=' w-6 h-6 border-4 animate-spin border-t-blue-500 rounded-full' >
            </div>
        </div> : "Logout" }
    </button>
  )
}

export default LogoutBtn