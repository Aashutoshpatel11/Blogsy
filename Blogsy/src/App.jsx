import conf from './conf/conf';
import './App.css'
import React ,{ useState, useEffect } from 'react';
import authService from './appwrite/auth';
import {login, logout} from "./store/authSlice"
import {useDispatch} from "react-redux"
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { Outlet } from 'react-router-dom';
import Threads from './components/Animation/Threads';
import { Loading } from './components/index';

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
      <div className='min-h-screen w-full flex flex-wrap bg-transparent ' >
          <Threads
                amplitude={1}
                distance={0}
                enableMouseInteraction={true}
                />
            <div className='w-full block ' >
                <Header/>
                <main>
                    <Outlet/>
                </main>
                <Footer/>
          </div>
      </div>
  ) : <Loading/>

}

export default App;
