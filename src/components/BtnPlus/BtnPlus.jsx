import React from "react";
import { inc } from "../../Context/counterSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";

const BtnPlus = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const numericValue = parseInt(inputValue);
    if (!isNaN(numericValue)) {
      dispatch(inc(numericValue));
      setInputValue("");
    }
    
  };


  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            value={inputValue}
            type="number"
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="enter number"
          />
          <button disabled={!inputValue} >Add</button>
        </form>
       <div className="btn_wrapper">
       <button  onClick={() => dispatch(inc(1))}>
          Plus
        </button>
       </div>
      </div>
    </>
  );
};

export default BtnPlus;
