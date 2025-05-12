import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Protected({ children, authentication=true }) {

    const [loader, setLoader] = useState(true)
    const navigate = useNavigate()
    const authStatus = useSelector( (state) => state.auth.status )

    useEffect( () => {
        if( authentication !== authStatus ){
            navigate( authentication? '/login': '/' )
        }
        setLoader(false)
    }, [authStatus, authentication, navigate] )

  return loader? <h1>Loading...</h1> : <>{children}</>
}

export default Protected