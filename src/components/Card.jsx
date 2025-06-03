import React from 'react'
const Card = (props) => {
  return (
    <div className='col-sm-12 col-md-4 col-lg-4  mt-4'>
      <div className='shadow card p-4 '>
      <img className='rounded-3 p-0' src={props.image}  alt="" />
      <h5 className='mt-2'>Name :-{props.name}</h5>
      <h6>Price :- {props.price}</h6>
      <h6>Model :- {props.model}</h6 >
      <button className='bg-warning p-1 mt-2 rounded-2'>Add to Cart</button>
      </div>

    </div>
  )
}

export default Card