import React, {useState} from 'react'
import authService from '../appwrite/auth'
import { login as storeLogin } from '../store/authSlice'
import { Input, Logo, Button } from './index'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import GradientText from './Animation/GradientText'

function Login() {

    const [error, setError] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()

    const Login = async function (data) {
        setError("")
        try {
            const session = await authService.login(data)
            if(session){
                const userData = await authService.getCurrentUser()
                if(userData){
                    dispatch( storeLogin(userData) )
                    navigate('/')
                }
            }
        } catch (error) {
            setError(error)
        }
    }

  return (
    <div
    className='flex items-center justify-center ws h-screen '
    >
        <div className={`mx-auto w-full bg-blue-300 max-w-lg border-b-4 rounded-xl p-10 text-black/50 bg-opacity-10 backdrop-blur-2xl`}>
            {/* <div className="mb-2 flex justify-center">
                <span className="inline-block w-full max-w-[100px]">
                    <Logo width="100%" />
                </span>
            </div> */}
            {/* <h2 className="text-center text-2xl font-bold leading-tight">
                Sign in to your account
            </h2> */}
            <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={1}
                showBorder={false}
                className="custom-class text-3xl bg-transparent"
                >
                Sign in to your account
            </GradientText>
            <p className="mt-2 text-center text-base text-black/50">
                Don&apos;t have any account?&nbsp;
                <Link
                    to="/signup"
                    className="font-medium text-primary transition-all duration-200 hover:underline"
                >
                    Sign Up
                </Link>
            </p>
            {error && <p className="text-red-600 mt-8 text-center">{error?.message}</p>}
            <form onSubmit={ handleSubmit(Login) } className='mt-8' >
                <div className='space-y-5' >
                    <Input 
                    label="Email"
                    type="email"
                    placeholder="Enter your email"
                    {...register("email", {
                        required: true,
                        validate: {
                        Pattern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                    })}
                    />
                    <Input 
                    label="Password"
                    type="password"
                    placeholder="Enter password"
                    {...register("password", {
                        required: true
                    })}
                    />
                    <button
                    className='bg-blue-500 hover:bg-blue-400 p-1 px-4 rounded-lg text-white '  
                    type='submit'
                    children="Login"
                    />
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login