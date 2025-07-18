import React from 'react'
import { useDispatch } from "react-redux"
import authService from "../../appwrite/auth"
import { logout } from '../../store/authSlice'
import { useNavigate } from 'react-router-dom'

function LogoutBtn() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleOnClick = () => {
        authService.logout()
        .then( dispatch(logout()) )
        .catch( (error) => ( 
            console.log('LogoutBtn :: Error :: ', error)
         ) )
         if(!error){
          navigate('/')
         }
    }
  return (
    <button
    onClick={handleOnClick}
    className='text-xs sm:text-base inline-bock py-2 px-2 sm:px-6 sm:py-2 duration-200 hover:bg-red-500 hover:text-white rounded-full'> 
        Logout
    </button>
  )
}

export default LogoutBtn