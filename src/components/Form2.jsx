import React, { useState } from 'react'
import { useReducer } from 'react';
import { FaArrowCircleRight } from "react-icons/fa";
import { FaArrowCircleLeft } from "react-icons/fa";
import Formreduce, { initialstate } from './reducers/Formreduce';


function Form2() {
const [state,dispatch]=useReducer(Formreduce,initialstate)

const updatehandler=(e)=>{
    dispatch({
        type:'UPDATE_DATA',
        name :e.target.name,
        value:e.target.value


    })
}
const nexthandler=()=>dispatch({type:'NEXT_PAGE'})
const prevhandler=()=>dispatch({type:'PREV_PAGE'})
const resethandler=()=>dispatch({type:'RESET'})
    return (
        <>
            <div>
                {state.page==1?
                    <div className="m-auto text-center mt-5 p-5 bg-amber-600 text-white w-50 rounded-5" >
                        <form action="">
                            <label htmlFor="">NAME :</label> <br />
                            <input name='name' onChange={updatehandler} className='border-1 rounded-3 p-1' type="text" placeholder='ENTER YOUR NAME ' /><br /> <br />
                            <label htmlFor="">EMAIL :</label> <br />
                            <input name='email' onChange={updatehandler} className='border-1 rounded-3 p-1' type="email" placeholder='ENTER YOUR EMAIL ' /> <br /> <br />
                            <div className='flex justify-end'>
                                <button onClick={() => nexthandler()} className='pl-3 pr-3 border-1 rounded-2 pt-1 pb-1 bg-primary'><FaArrowCircleRight /></button>
                            </div>
                        </form>
                    </div> : ""}
                {state.page==2?
                    <div className="m-auto text-center mt-5 p-5 bg-amber-600 text-white w-50 rounded-5">
                        <form action="">
                            <label  htmlFor="">ADDRESS :</label> <br />
                            <input required name='address' onChange={updatehandler} className='border-1 rounded-3 p-1' type="text" placeholder='ENTER YOUR ADDRESS ' /><br /> <br />
                            <label htmlFor="">CITY :</label> <br />
                            <input name='city' onChange={updatehandler} className='border-1 rounded-3 p-1' type="text" required placeholder='ENTER YOUR city ' /> <br /> <br />
                            <div className='flex justify-between'>
                                <button onClick={() => prevhandler()} className='pl-3 pr-3 border-1 rounded-2 pt-1 pb-1 bg-primary'><FaArrowCircleLeft /></button>
                                <button onClick={() => nexthandler()} className='pl-3 pr-3 border-1 rounded-2 pt-1 pb-1 bg-primary'><FaArrowCircleRight /></button>
                            </div>
                        </form>
                    </div> : ""}
                {state.page==3?
                    <div className="m-auto mt-5 p-5 bg-amber-600 text-white w-50 rounded-5">
                        <form action="">
                            <h4>Name:  {state.name}</h4>
                            <h4>Email:  {state.email}</h4>
                            <h4>Address:  {state.address}</h4>
                            <h4>city:  {state.city}</h4>
                            <div className='flex justify-between'>
                                <button onClick={() => prevhandler()} className='pl-3 pr-3 border-1 rounded-2 pt-1 pb-1 bg-primary'><FaArrowCircleLeft /></button>
                                <button onClick={()=>alert("YOUR FORM SUBMITED SUCCESSFULLY")} className='pl-3 pr-3 border-1 rounded-2 pt-1 pb-1 bg-primary'> SUBMIT</button>
                            </div>
                        </form>
                    </div> : ""}
            </div>
        </>
    )
}
export default Form2