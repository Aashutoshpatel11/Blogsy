import conf from './conf/conf';
import './App.css'
import React ,{ useState, useEffect } from 'react';
import authService from './appwrite/auth';
import {login, logout} from "./store/authSlice"
import {useDispatch} from "react-redux"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"

function App() {
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()
  
  useEffect( () => {
    authService.getCurrentUser()
    .then( (userData) => {
        if(userData){
          dispatch(login({userData}))
        }else{
          dispatch(logout())
        }
    } )
    .finally( () => setLoading(false) )
  } , [] )

  return !loading ? (
    <div className='h-screen w-full flex flex-wrap justify-center items-center' >
      <div className='h-full w-full block text-center' >
        <Header/>
        TODO: <main></main>
        <Footer/>
      </div>
    </div>
  ) : null
}

export default App;
