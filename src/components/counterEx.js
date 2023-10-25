import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  clear,
  selectCount,
} from "../Redux/counterReducer";

function CounterEx() {
  // binding/connecting React with Redux
  const stateData = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>{stateData}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>Add by 5</button>
      <br />
      <button onClick={() => dispatch(clear())}>Clear</button>
    </div>
  );
}

export default CounterEx;
