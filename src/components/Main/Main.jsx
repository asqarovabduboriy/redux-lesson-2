import React, { useState } from "react";
import { inc, res, decriment } from "../../Context/counterSlice";
import { useDispatch, useSelector } from "react-redux";

const Main = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);

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
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            placeholder="enter number"
          />
        </form>
        <button onClick={() => dispatch(inc(1))}>increment</button>
        <button disabled={counter === 0} onClick={() => dispatch(decriment())}>
          decrement
        </button>
        <button disabled={counter === 0} onClick={() => dispatch(res())}>
          reset
        </button>
      </div>
    </>
  );
};

export default Main;
