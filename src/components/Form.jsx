import React, { useState } from 'react'
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";


function Form() {
    const [page, setPage] = useState(1)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [address, setAddress] = useState("")
    const [pincode, setPincode] = useState("")
    return (
        <>
            <div>
                {page == 1 ?
                    <div className="m-auto text-center mt-5 p-5 bg-amber-600 text-white w-50 rounded-5" >
                        <form action="">
                            <label htmlFor="">NAME :</label> <br />
                            <input onChange={(e) => setName(e.target.value)} className='border-1 rounded-3 p-1' type="text" placeholder='ENTER YOUR NAME ' /><br /> <br />
                            <label htmlFor="">EMAIL :</label> <br />
                            <input onChange={(e) => setEmail(e.target.value)} className='border-1 rounded-3 p-1' type="email" placeholder='ENTER YOUR EMAIL ' /> <br /> <br />
                            <label htmlFor="">PASSWORD :</label> <br />
                            <input onChange={(e) => setPassword(e.target.value)} className='border-1 rounded-3 p-1 ' type="password" placeholder='ENTER YOUR PASSWORD ' />
                            <div className='flex justify-content-end'>
                                <button onClick={() => setPage(page + 1)} className='pl-3 pr-3 border-1 rounded-2 pt-1 pb-1 bg-primary'><FaArrowCircleRight /></button>
                            </div>
                        </form>
                    </div> : ""}
                {page == 2 ?
                    <div className="m-auto text-center mt-5 p-5 bg-amber-600 text-white w-50 rounded-5">
                        <form action="">
                            <label htmlFor="">ADDRESS :</label> <br />
                            <input onChange={(e) => setAddress(e.target.value)} className='border-1 rounded-3 p-1' type="text" placeholder='ENTER YOUR ADDRESS ' /><br /> <br />
                            <label htmlFor="">PINCODE :</label> <br />
                            <input onChange={(e) => setPincode(e.target.value)} className='border-1 rounded-3 p-1' type="email" placeholder='ENTER YOUR PINCODE ' /> <br /> <br />
                            <div className='flex justify-between'>
                                <button onClick={() => setPage(page - 1)} className='pl-3 pr-3 border-1 rounded-2 pt-1 pb-1 bg-primary'><FaArrowCircleLeft /></button>
                                <button onClick={() => setPage(page + 1)} className='pl-3 pr-3 border-1 rounded-2 pt-1 pb-1 bg-primary'><FaArrowCircleRight /></button>
                            </div>
                        </form>
                    </div> : ""}
                {page == 3 ?
                    <div className="m-auto mt-5 p-5 bg-amber-600 text-white w-50 rounded-5">
                        <form action="">
                            <h4>Name:  {name}</h4>
                            <h4>Email:  {email}</h4>
                            <h4>Password:  {password}</h4>
                            <h4>Address:  {address}</h4>
                            <h4>Pincode:  {pincode}</h4>
                            <div className='flex justify-between'>
                                <button onClick={() => setPage(page - 1)} className='pl-3 pr-3 border-1 rounded-2 pt-1 pb-1 bg-primary'><FaArrowCircleLeft /></button>
                                <button className='pl-3 pr-3 border-1 rounded-2 pt-1 pb-1 bg-primary'> SUBMIT</button>
                            </div>
                        </form>
                    </div> : ""}
            </div>
        </>
    )
}

export default Form