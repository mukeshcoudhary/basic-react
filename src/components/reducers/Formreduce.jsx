import React from 'react'

export const initialstate ={
    page:1,
    name:"",
    email:"",
    city:"",
    address:"",
}

function Formreduce(state,action) {
switch (action.type) {
    case 'UPDATE_DATA':
        return {...state,[action.name]:action.value}
    case 'NEXT_PAGE':
        return {...state,page:state.page+1}
    case 'PREV_PAGE':
        return {...state,page:state.page-1}
    case 'RESET':
        return initialstate

    default:
        return state
}
}

export default Formreduce