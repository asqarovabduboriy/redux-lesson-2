import React from 'react'
import  { useSelector } from 'react-redux'


const Count = () => {
    const Count = useSelector((state) => state.counter.value)

  return (
   <>
       <div className="count">
             <p>{Count}</p> 
       </div>

   </>
  )
}

export default Count