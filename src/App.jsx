import React, { useEffect, useState } from 'react'
import Login from "./components/Login";
import Home from "./components/Home";
import Pra from "./components/Pra.jsx";
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Navebar from './components/Navebar.jsx';

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
        
        <Routes>
            <Route path="/login" element={<Login setToken={setToken}/>} />
            <Route path="/" element={<Home />} />
            <Route path="/card" element={<Card />} />
            <Route path='/navbar' element={<Navebar setToken={setToken}/>}/>
        </Routes>
    )
}

export default App
