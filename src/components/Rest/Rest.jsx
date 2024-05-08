import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { res } from "../../Context/counterSlice";

const Rest = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
  <>
     <div className='btn_wrapper'>
         <button disabled={counter === 0}  onClick={() => dispatch(res())} >res</button>
     </div> 
  </>
  )
}

export default Rest