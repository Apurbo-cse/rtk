import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement , increment  } from "../redux/features/counter/counterSlice";
import { decrement as decrement2, increment as increment2 } from "../redux/features/counter/dynamicCounterSlice";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  const dynamicCount = useSelector((state) => state.dynamicCounter.count);

  return (
    <>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <p>Count: {count}</p>

      <button onClick={() => dispatch(increment2(4))}>Dynamic Increment</button>
      <button onClick={() => dispatch(decrement2(2))}>Dynamic Decrement</button>
      <p>Dynamic Count: {dynamicCount}</p>
    </>
  );
};

export default Counter;
