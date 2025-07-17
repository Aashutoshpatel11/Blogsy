import React from "react";
import { Container, LogoutBtn, Logo } from "../index"
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";

const Header = function () {
    const authStatus = useSelector( (state) => (state.auth.status) )
    const navigate = useNavigate()
    const {slug} = useParams()

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
            name: 'All Post',
            slug: '/all-posts',
            active: authStatus
        },
        {
            name: 'Add Post',
            slug: '/add-post',
            active: authStatus
        },
    ]

    return(
        <header className='rounded-b-3xl text-black py-3 bg-blue-300 backdrop-blur-2xl bg-opacity-10 border-b-4' >
            <Container>
                <nav className='flex' >
                    <div className='mr-4' >
                        <Link to='/' >
                            <Logo width='70px' />
                        </Link>
                    </div>
                    <ul className='flex ml-auto' >
                        { navItems.map( (item) => 
                        item.active? (
                            <li key={item.name} >
                                <button
                                className='inline-bock px-6 py-2 duration-200 hover:bg-blue-400  hover:text-white rounded-full'
                                onClick={ () => navigate(item.slug)}
                                >{item.name}
                                </button>
                            </li>
                        ) : null
                        ) }
                        {authStatus && (
                            <li>
                                <LogoutBtn/>
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

export default Header;