import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decriment } from "../../Context/counterSlice";
import { useState } from "react";

const Btn = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    let number = parseInt(value);
    if (!isNaN(number)) {
      dispatch(decriment(number));
      setValue("");
    }
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <input
            value={value}
            type="number"
            onChange={(e) => setValue(e.target.value)}
            placeholder="enter number"
          />
          <button disabled={value === ""}>add</button>
        </form>
        <div className="btn_wrapper">
          <button
            onSubmit={handleSubmit}
            disabled={counter === 0}
            onClick={() => dispatch(decriment(1))}
          >
            Minus
          </button>
        </div>
      </div>
    </>
  );
};

export default Btn;
