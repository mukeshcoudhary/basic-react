import React, { lazy, Suspense, useEffect, useState } from 'react'
// import Login from "./components/Login";
const Login = React.lazy(() => import("./components/Login"))
import { memo } from 'react';
// import Card from "./components/Card.jsx";
import Form from "./components/Form.jsx";
// import Home from "./components/Home";
const Home = React.lazy(() => import("./components/Home"))
// import Pra from "./components/Pra.jsx";
import { BrowserRouter, Routes, Route, useNavigate, Link } from 'react-router-dom';
import Notes from './components/Notes.jsx';
import Github from './components/Github.jsx';
import Form2 from './components/Form2.jsx';
import Feedback from './components/Feedback.jsx';
import Mood from './components/Mood.jsx';
// import Weather from './components/Weather.jsx';
// import Navebar from './components/Navebar.jsx';
const Navebar = lazy(() => import("./components/Navebar.jsx"))
const Weather = lazy(() => import("./components/Weather.jsx"))
// import Card from './components/Card.jsx'
const Card = React.lazy(() => import("./components/Card.jsx"))
function App() {
    const [token, setToken] = useState(false)
    // const [toastMsg, setToastMsg] = useState(false)
    // console.log(token)   
    const navigate = useNavigate();
    useEffect(() => {
        if (token) {
            navigate("/")
        } else {
            navigate("/login")
        }
    }, [token])
    return (
        <>
        {/* <Pra/> */}
            <Suspense fallback={<div className='flex justify-center'><h1>Loding...</h1></div>}>
                <Routes>
                    <Route path="/navbar" element={<Navebar setToken={setToken} />} />
                    <Route path="/login" element={<Login setToken={setToken} />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/weather" element={<Weather />} />
                    <Route path="/card" element={<Card />} />
                    <Route path="/Form" element={<Form />} />
                    <Route path="/Form2" element={<Form2 />} />
                    <Route path="/Notes" element={<Notes />} />
                    <Route path="/Github" element={<Github />} />
                    <Route path="/Feedback" element={<Feedback />} />
                    <Route path="/Mood" element={<Mood />} />
                </Routes>
            </Suspense>
        </>
    )
}
export default memo(App)


