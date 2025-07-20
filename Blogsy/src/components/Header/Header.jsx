import React, { useEffect, useState } from "react";
import { Container, LogoutBtn, Logo } from "../index"
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import service from "../../appwrite/auth";

const Header = function () {
    const authStatus = useSelector( (state) => (state.auth.status) )
    const navigate = useNavigate()
    const {slug} = useParams()
    const[user, setUser] = useState("");
    

    useEffect( () => {
        service.getCurrentUser()
        .then( (res) => {if(res) setUser(res)} )
        .catch( (error) => {
            console.log("Header::profile::getcurrentUser::error",error);
            
        } )
    }, [authStatus] )

    const handleOnClick = () => {
        navigate(`/profile/${user.$id}`);
    }

    let navItems = [
        {
            name: 'Home',
            slug: '/',
            active: true
        },
        {
            name: 'Login',
            slug: '/login',
            active: !authStatus
        },
        {
            name: 'Signup',
            slug: '/signup',
            active: !authStatus
        },
        {
            name: 'My Post',
            slug: '/my-posts',
            active: authStatus
        },
        {
            name: 'Add Post',
            slug: '/add-post',
            active: authStatus
        },
    ]

    return(
        <header className='rounded-b-3xl px-0 py-2 text-black  bg-blue-300 backdrop-blur-2xl bg-opacity-10 border-b-4 w-screen' >
            <Container>
                <nav className='flex' >
                    <div className='' >
                        <Link to='/' >
                            <Logo className={"text-lg md:text-3xl"} />
                        </Link>
                    </div>
                    <ul className='flex ml-auto' >
                        { navItems.map( (item) => 
                        item.active? (
                            <li key={item.name} >
                                <button
                                className=' text-xs sm:text-sm inline-bock py-2 px-2 sm:px-6 sm:py-2 duration-200 hover:bg-blue-400  hover:text-white rounded-full'
                                onClick={ () => navigate(item.slug)}
                                >{item.name}
                                </button>
                            </li>
                        ) : null
                        ) }
                        {authStatus && (
                            <div className="flex justify-center items-center" >
                                <button 
                                onClick={ () => handleOnClick() }
                                className='bg-white  rounded-full w-8 h-8 ml-4 flex justify-center items-center text-black/40 font-semibold text-2xl font-mono border-2 border-t-red-500 border-r-blue-500 border-b-green-500 border-l-yellow-500' >
                                {user?.name?.[0]?.toUpperCase()}
                                </button>
                            </div>
                        )}
                        {/* <div className="flex justify-center ml-6 p-1 py-0 items-center" >
                            <ThemeBtn />
                        </div> */}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

export default Header;