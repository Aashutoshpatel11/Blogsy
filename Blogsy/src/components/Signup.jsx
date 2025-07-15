import React, {useState} from 'react'
import authService from '../appwrite/auth'
import { login as storeLogin} from '../store/authSlice'
import { Input, Button, Logo } from './index'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import GradientText from './Animation/GradientText'

function Signup() {

    const [error, setError] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()

    const signup = async(data) => {
        setError("")
        console.log(`data in signup component: ${data.email}`);
        
        try {
            const session = await authService.createAccount(data)
            console.log(session);
            
            if(session){
                const userData = await authService.getCurrentUser()
                console.log(userData);
                
                if(userData){
                    dispatch( storeLogin(userData) )
                    navigate('/')
                }
            }
        } catch (error) {
            setError(error)
            console.log(error);
        }
    }

  return (
     <div className="flex items-center justify-center h-screen">
            <div className={`mx-auto w-full max-w-lg bg-blue-300 border-b-4 rounded-xl p-10 text-black bg-opacity-10 backdrop-blur-3xl`}>
            {/* <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
                </div> */}
                {/* <h2 className="text-center text-2xl font-bold leading-tight">
                    Sign up to create account
                </h2> */}
                <GradientText
                    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                    animationSpeed={1}
                    showBorder={false}
                    className="custom-class text-3xl bg-transparent"
                    >
                    Sign up to create account
                </GradientText>
                <p className="mt-2 text-center text-base text-black/50">
                    Already have an account?&nbsp;
                    <Link
                        to="/login"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign In
                    </Link>
                </p>
                {error && (
                    <p className="text-red-600 mt-8 text-center">
                        {error?.message || String(error)}
                    </p>
                )}

                <form onSubmit={handleSubmit(signup)}>
                    <div className='space-y-5'>
                        <Input
                        label="Name"
                        placeholder="Enter your name"
                        type="text"
                        {...register("name", {
                            required: true
                        })}
                        />
                        <Input
                        label="Email"
                        placeholder="Enter your Email"
                        type="email"
                        {...register("email", {
                            required: true,
                            validate: {
                                pattern: (value) =>
                                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                    "Email address must be a valid address",
                            }
                        })}
                        />
                        <Input
                        label="Password"
                        placeholder="Enter your Password"
                        type="password"
                        {...register("password", {
                            required: true
                        })}
                        />
                        <div className='flex justify-end' >
                            <Button
                            className='bg-blue-500 hover:bg-blue-400 p-1 px-4 rounded-lg text-white hover:font-semibold ' 
                            type="submit"
                            children="Sign up"
                            />
                        </div>
                    </div>
                </form>
            </div>

    </div>
  )
}

export default Signup;