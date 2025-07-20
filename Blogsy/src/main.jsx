import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '../src/components/pages/Home.jsx'
import { AuthLayout, Login } from './components/index.js'


import AddPost from "./components/pages/AddPost.jsx";
import Signup from './components/pages/Signup.jsx'
import EditPost from "./components/pages/EditPost.jsx";
import Post from "./components/pages/Post.jsx";
import MyPosts from "./components/pages/MyPosts.jsx";
import Profile from './components/pages/Profile.jsx';
import Generate_With_AI from './components/pages/Generate_With_AI.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "login",
            element: (
                <AuthLayout authentication={false}>
                    <Login />
                </AuthLayout>
            ),
        },
        {
            path: "signup",
            element: (
                <AuthLayout authentication={false}>
                    <Signup />
                </AuthLayout>
            ),
        },
        {
            path: "my-posts",
            element: (
                <AuthLayout authentication >
                    {" "}
                    <MyPosts />
                </AuthLayout>
            ),
        },
        {
            path: "add-post",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <AddPost />
                </AuthLayout>
            ),
        },
        {
            path: "edit-post/:slug",
            element: (
                <AuthLayout authentication>
                    {" "}
                    <EditPost />
                </AuthLayout>
            ),
        },
        {
            path: "post/:slug",
            element: <Post />,
        },
        {
            path: "profile/:slug",
            element: (
                <AuthLayout authentication>
                    {""}
                    <Profile />
                </AuthLayout>
            )
        },
        {
            path: "/generate_with_ai",
            element: (
                <AuthLayout authentication >
                    {""}
                    <Generate_With_AI/>
                </AuthLayout>
            )
        }
    ],
},
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)