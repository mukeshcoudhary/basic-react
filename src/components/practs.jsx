import React, { useEffect, useState } from 'react'

function practs() {
    const [carddata, setcarddata] = useState()
    useEffect(() => {
        const data = fetch("https://jsonplaceholder.typicode.com/posts")
            .then((val) => val.json())
            .then((resp) => resp)
            .catch((err) => console.log(err))
        setcarddata(data)
    }), []
    return (
        <div className='flex justify-content-evenly gap-5'>
         <h6></h6>
        </div>
    )
}

export default practs