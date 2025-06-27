import React, { useState } from 'react'

function Mood() {
    const [entry, setentry] = useState([]);
    const [input, setinput] = useState("");
    console.log(entry)

    const submitHandler = () => {
        setentry([...entry, input])
        setinput("")
    }
    return (
        <>
            <div className='flex justify-content-center'>
                <form action="">
                    <textarea onClick={(e) => setinput(e.target.value)} className='border-1 p-2 w-100 m-auto' placeholder='How are you feeling are you' name="" id=""></textarea>
                    <button onClick={submitHandler} className='bg-amber-600 p-2 rounded-1 text-white'>Add</button>
                </form>
            </div>

            <div>
                {entry.map((e) => {
                    return <div>
                        {e}
                    </div>
                })}
            </div>
        </>
    )
}

export default Mood