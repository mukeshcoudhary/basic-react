import React from 'react'

function Tost({err}) {
    return (
        <div className='flex  justify-content-end'>
            <h4 className='bg-red-700 text-red-200 p-1'>
                {err}
                {console.log(err)
                }
                
            </h4>
        </div>
    )
}

export default Tost