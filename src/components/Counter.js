import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import {sliceActions} from "../store/index";

const Counter = () => {
  const counter = useSelector((state) => state.counter.count);
  const toggler = useSelector((state) => state.counter.countShown);
  const dispatch = useDispatch();
  const toggleCounterHandler = () => {
    dispatch(sliceActions.toggler());
  };

  const incrementHandler = () => {
    dispatch(sliceActions.increment());
  };

  const increase = () => {
    dispatch(sliceActions.increment(5));
  };

  const decrementtHandler = () => {
    dispatch(sliceActions.decrement());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggler && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={increase}>Increment by 5</button>
      <button onClick={decrementtHandler}>Decrement</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
